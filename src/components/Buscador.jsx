import { useState } from "react";

export default function Buscador({ newCoordinates }) {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const handleChangeLat = (e) => {
    setLat(e.target.value);
  };
  const handleChangeLon = (e) => {
    setLon(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ lat }, { lon });
    if (!lat || !lon) return;
    newCoordinates(lat, lon);
  };
  return (
    <div className="containter mt-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            className="form-control"
            type="number"
            placeholder="lat"
            name="lat"
            value={lat}
            onChange={handleChangeLat}
          />

          <input
            className="form-control"
            type="number"
            placeholder="lon"
            name="lon"
            value={lon}
            onChange={handleChangeLon}
          />

          <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
        </div>
      </form>
    </div>
  );
}
