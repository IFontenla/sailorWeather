import { CircularProgress } from "@mui/material";

export default function Card({
  showData,
  loadingData,
  weather,
  alerts,
  lat,
  lon,
}) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getYear();
  var date = day + "/" + month + "/" + year;

  var iconUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=8fca14d50d4a46c987a571cd4b762635`;

  if (loadingData) {
    return <CircularProgress />;
  }
  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className="board mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="latlon">Latitud: {weather.data[0].lat}º, Longitud: {weather.data[0].lon}º</h3>
                <p className="date">{weather.data[0].ob_time}</p>
                <h1 className="temp">{weather.data[0].temp}ºC{" "}</h1>
                <p className="tiempo"><img src={weather.data[0].weather.icon} alt="weather icon" />{weather.data[0].weather.description}</p>
                
                <img
                  src="https://images.pexels.com/photos/17040068/pexels-photo-17040068/free-photo-of-brillos-marinos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-fluid rounded-start"
                  alt="sea"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start m-4">
                  <h5 className="">Sensación térmica: {weather.data[0].app_temp} ºC</h5>
                  <h5 className="">Presión atmosférica: {weather.data[0].pres} mb</h5>
                  <h5 className="">Humedad: {weather.data[0].rh} %</h5>
                  <h5 className="">Dirección del viento: {weather.data[0].wind_cdir}</h5>
                  <h5 className="">Velocidad del viento: {weather.data[0].wind_spd} m/s</h5>
                  <h5 className="">Visibilidad: {weather.data[0].vis} KM</h5>
                  <h5 className="">Hora del amanecer: {weather.data[0].sunrise}</h5>
                  <h5 className="">Hora del atardecer: {weather.data[0].sunset}</h5>
                </div>
                <hr />
                <div className="row m-4 mx-auto">
                {/* {alerts.alerts ? "No hay alertas" : `${alerts.alerts.title}`} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto text-light not-found">
          No hay datos
        </div>
      )}
    </div>
  );
}
