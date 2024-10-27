/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";

const MarkedLocation = ({ pin, index }) => {
  return (
    <Marker key={index} position={pin} draggable={true}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default MarkedLocation;
