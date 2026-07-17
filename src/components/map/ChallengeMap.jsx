import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const challenges = [
  {
    title: "Sustainable Fisheries",
    position: [64.14, -21.94], // Iceland
  },
  {
    title: "Remote Healthcare",
    position: [60.39, 5.32], // Norway
  },
  {
    title: "Circular Tourism",
    position: [65.01, 25.47], // Finland
  },
  {
    title: "Climate Strategies",
    position: [59.33, 18.06], // Sweden
  },
];

function ChallengeMap() {
  return (
    <MapContainer
      center={[64.5, 12]}
      zoom={4}
      className="h-[550px] w-full rounded-2xl"
      scrollWheelZoom
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {challenges.map((item) => (
        <Marker
          key={item.title}
          position={item.position}
          icon={icon}
        >
          <Popup>{item.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ChallengeMap;