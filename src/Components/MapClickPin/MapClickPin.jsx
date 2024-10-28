/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import MarkedLocation from "../Marker/Marker";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../../features/places/PlacesSlice";
import Modal from "../Modal/Modal";
import "./MapClickPin.css";
import GenericButton from "../GenericButton/GenericButton";
import {
  setClickable,
  toggleClickable,
} from "../../features/mapClickable/mapClickableSlice";

const MapClickPin = () => {
  const pins = useSelector((state) => state.places.value);
  const clickable = useSelector((state) => state.clickable.value);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newPlace, setNewPlace] = useState({
    lat: null,
    lng: null,
    remark: "",
  });
  // const [clickable, setClickable] = useState(true);

  const map = useMapEvents({
    click: (event) => {
      if (!clickable) return;
      const { lat, lng } = event.latlng;
      setNewPlace({ lat, lng, remark: "" });
      setShowModal(true);
      dispatch(setClickable(false));
    },
  });

  const handleFormSubmit = (place) => {
    dispatch(
      addPlace({ coordinates: [place.lat, place.lng], remark: place.remark })
    );
    dispatch(toggleClickable());
    setShowModal(false);
  };

  return (
    <>
      {pins.map((pin, index) => (
        <MarkedLocation
          key={index}
          setShowModal={setShowModal}
          pin={pin.coordinates}
          index={index}
        />
      ))}
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => {
            setShowModal(false);
            dispatch(setClickable(true));
          }}
        >
          <div style={{ height: "90%" }}>
            <h2>Add Your Memory</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(newPlace);
              }}
            >
              <label>
                Remarks <br />
                <textarea
                  className="input-bar"
                  type="text"
                  value={newPlace.remark}
                  onChange={(e) =>
                    setNewPlace({ ...newPlace, remark: e.target.value })
                  }
                  required
                />
              </label>
              <GenericButton text={"Add Place"} type="submit"></GenericButton>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MapClickPin;
