/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { capitalize, getAddress } from "../../utils/utils";
import { removePlace } from "../../features/places/PlacesSlice";
import GenericButton from "../GenericButton/GenericButton";
import { setClickable } from "../../features/mapClickable/mapClickableSlice";


const MarkedLocation = ({ pin, index }) => {
  const pins = useSelector((state) => state.places.value);
  // const clickable = useSelector((state) => state.clickable.value);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  useEffect(() => {
    getAddress(pins[index].coordinates[0], pins[index].coordinates[1]).then(
      (res) => {
        setAddress(res);
      }
    );
  }, [pins, index]);

  const handleRemove = () => {
    dispatch(setClickable(false));
    dispatch(removePlace(pins[index].id));
    setTimeout(() => dispatch(setClickable(true)), 100); 
  };

  return (
    <Marker className="marker" key={index} position={pin} draggable={true}>
      <Popup>
        <h2>Remarks</h2>
        <p>{capitalize(pins[index].remark)}</p>
        <p>
          Address: <span>{address}</span>
        </p>
        <GenericButton text={"Remove"} style={{padding:"0% 10%"}}  onClick={handleRemove}></GenericButton>
      </Popup>
    </Marker>
  );
};

export default MarkedLocation;