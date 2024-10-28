/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import MarkedLocation from "../Marker/Marker";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../../features/places/PlacesSlice";
import Modal from "../Modal/Modal";
import "./MapClickPin.css";

const MapClickPin = () => {
  const pins = useSelector((state) => state.places.value);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newPlace, setNewPlace] = useState({
    lat: null,
    lng: null,
    remark: "",
  });
  const [clickable, setClickable] = useState(true);

  const map = useMapEvents({
    click: (event) => {
      if (!clickable) return;
      const { lat, lng } = event.latlng;
      setNewPlace({ lat, lng, remark: "" });
      setShowModal(true);
      setClickable(false);
    },
  });

  const handleFormSubmit = (place) => {
    dispatch(
      addPlace({ coordinates: [place.lat, place.lng], remark: place.remark })
    );
    setShowModal(false);
    setClickable(true);
  };

  return (
    <>
      {pins.map((pin, index) => (
        <MarkedLocation
          key={index}
          setShowModal={setShowModal}
          setClickable={setClickable}
          pin={pin.coordinates}
          index={index}
        />
      ))}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
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
              <button type="submit">Add Place</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MapClickPin;