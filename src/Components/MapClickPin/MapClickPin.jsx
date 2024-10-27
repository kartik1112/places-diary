/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import MarkedLocation from "../Marker/Marker";

const MapClickPin = () => {
  const [pins, setPins] = useState([]);

  const map = useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      setPins((prevPins) => [...prevPins, [lat, lng]]);
    },
  });

  return (
    <>
      {pins.map((pin, index) => (
        <MarkedLocation key={index} pin={pin} index={index} />
      ))}
    </>
  );
};

export default MapClickPin;
