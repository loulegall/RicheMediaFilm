import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from './data.json';

const MyMapComponent = ({ onMarkerClick }) => {
  // Create markers from waypoints
  const markers = useMemo(() => {
    return data.Waypoints.map((waypoint, index) => ({
      position: [parseFloat(waypoint.lat), parseFloat(waypoint.lng)],
      label: waypoint.label,
      timestamp: waypoint.timestamp,
    }));
  }, []);

  // Calculate map center
  const calculateCenter = (markers) => {
    if (markers.length === 0) {
      return [51.505, -0.09]; // Default center if no markers
    }

    // Calculate average latitude and longitude
    const sumLat = markers.reduce((sum, marker) => sum + marker.position[0], 0);
    const sumLng = markers.reduce((sum, marker) => sum + marker.position[1], 0);
    const avgLat = sumLat / markers.length;
    const avgLng = sumLng / markers.length;

    return [avgLat, avgLng];
  };

  const center = calculateCenter(markers);

  return (
    <MapContainer center={center} zoom={3} scrollWheelZoom={false} style={{ height: '400px', width: '700px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (

        <Marker
          key={index}
          position={marker.position}
          eventHandlers={{click: () => {onMarkerClick(marker.timestamp)}}}
        >
          <Popup>
            <div>
              <h3>{marker.label}</h3>
              <p>Latitude: {marker.position[0]}</p>
              <p>Longitude: {marker.position[1]}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMapComponent;
