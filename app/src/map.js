import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from './data.json';

const MyMapComponent = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false} style={{ height: '400px', width: '700px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.Waypoints.map((waypoint, index) => (
        <Marker key={index} position={[parseFloat(waypoint.lat), parseFloat(waypoint.lng)]}>
          <Popup>
            <div>
              <h3>{waypoint.label}</h3>
              <p>Latitude: {waypoint.lat}</p>
              <p>Longitude: {waypoint.lng}</p>
              <p>Timestamp: {waypoint.timestamp}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMapComponent;
