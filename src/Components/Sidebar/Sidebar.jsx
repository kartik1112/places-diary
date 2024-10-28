import { useState } from "react";
import GenericButton from "../GenericButton/GenericButton";
import "./Sidebar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removePlace } from "../../features/places/PlacesSlice";
import { useMap } from "react-leaflet";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const pins = useSelector((state) => state.places.value);
  const dispatch = useDispatch();

  // const map = useMap();

  const handleRemove = (pin) => {
    dispatch(removePlace(pin.id));
  };

  // function locateOnMap(pin) {
  //   map.locate(pin.coordinates);
  // }

  return (
    <div className="sidebar-container">
      <GenericButton icon={faBars} onClick={() => setActive(!active)} />
      <div className={`sidebar-section ${active ? "active" : ""}`}>
        {pins.length === 0 ? (
          <div className="pin-tile">
            <p>No pins available</p>
          </div>
        ) : (
          pins.map((pin, index) => (
            <>
              <div key={index} className="pin-tile" onClick={()=>locateOnMap(pin)}>
                <p>{pin.remark}</p>
                <GenericButton
                  text={"Remove"}
                  className="remove-button"
                  onClick={() => handleRemove(pin)}
                ></GenericButton>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
