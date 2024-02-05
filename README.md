# RicheMediaFilm
IAI3 - 2024

# Auteurs
- Rémi UHARTEGARAY
- Lou LE GALL

# Le sujet 
Elle devra proposer à l'utilisateur une interface lui permettant de visualiser
un film, de naviguer dans le contenu par le biais d'un chapitrage mais
également de consulter une carte illustrant les lieux où se déroule l'action.
L'utilisateur pourra interagir avec la carte en selectionnant des points
d'intérêt et ainsi accéder aux moments du film concernés. De même, une
liste dynamique de mots-clefs sera afficher durant la lecture du film. Enfin
un zone de discussion permettra à l'utilisateur de discuter avec d'autres
utilisateurs et partager des pointeurs dirigeant vers des moments du film.

# Consignes
- Un component chargé de la lecture de la vidéo,
- Un component chargé d'afficher les chapitres de la vidéo, cliquer sur les chapitres positionnera la vidéo au momrent correspondant, 
- Un component chargé d'afficher une carte avec des points d'intérêts liés à différents moment du film,
- Un component chargé d'afficher une liste de mots clefs correspondant à différents
moment du film,
- Un component chargé d'afficher la chatroom associé à la vidéo,
- Un component chargé de composer et poster des messages dans la chatroom. Certains
messages permettent de partager des "moments d'intérêt" de la vidéo.

## Technologies Utilisées

### Video-React
La librairie [Video-React](https://video-react.js.org/) est utilisée pour la lecture de la vidéo. Elle fournit une interface utilisateur réactive et des fonctionnalités avancées pour la gestion de la vidéo.

### Leaflet
La librairie [Leaflet](https://leafletjs.com/) est employée pour créer une carte interactive, permettant aux utilisateurs de visualiser les lieux du film. Les points d'intérêt sur la carte sont associés à des moments spécifiques du film, offrant une expérience immersive.

## Structure du Projet
Le projet est structuré en plusieurs composants principaux :

### Video Component
Gère la lecture de la vidéo et permet à l'utilisateur de naviguer à travers les chapitres du film.

### ChapterList Component
Affiche les chapitres du film sous forme de liste. Le clic sur un chapitre positionne la vidéo au moment correspondant.

### Map Component
Utilise Leaflet pour créer une carte interactive présentant les points d'intérêt liés aux moments spécifiques du film.

### KeywordList Component
Affiche une liste dynamique de mots-clés correspondant à différents moments du film.

### Chatroom Component
Permet aux utilisateurs de discuter et de partager des moments clés du film. Les messages peuvent inclure des liens redirigeant vers des moments spécifiques de la vidéo.

### Sender Component
Permet la composition et l'envoi de messages dans la chatroom. Certains messages peuvent inclure des "moments d'intérêt" de la vidéo.

## Installation
Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :
1. Clonez le dépôt.
2. Installez les dépendances avec la commande `npm install`.
