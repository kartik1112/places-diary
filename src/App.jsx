import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MapClickPin from "./Components/MapClickPin/MapClickPin";

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <main>
        <div className="search-section">
          <input type="text" placeholder="Search Location" />
        </div>{" "}
        <MapContainer
          className="map-container"
          center={[26.82167691666667, 75.84574525000002]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickPin />
          <div
            className="overlay-model-popup"
            onClick={() => {
              console.log("ok");
            }}
          ></div>
        </MapContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
