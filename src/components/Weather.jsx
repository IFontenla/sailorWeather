import { useState } from "react";
import Buscador from "./Buscador";
import Board from "./Board";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Weather(handleFavorites, deleteFavorite) {
  
  const [weather, setWeather] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const isFavorite = () => {
    let list = JSON.parse(localStorage.getItem("favourites")).map(
      (fav) => fav.idFav
    )
  }

  const getCoordinates = async (lat, lon) => {
    setLoading(true);
    setLat(lat);
    setLon(lon);

    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=8fca14d50d4a46c987a571cd4b762635&lang=[es]`;
    const urlAlerts = `https://api.weatherbit.io/v2.0/alerts?lat=${lat}&lon=${lon}&key=8fca14d50d4a46c987a571cd4b762635&lang=[es]`;
    
    await fetch(url)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setLoading(false)
        setShow(true)
        setWeather(weatherData);
      }).catch( error => {
        console.log(error)
        setLoading(false)
        setShow(false)
      })

      await fetch(urlAlerts)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((alertsData) => {
        console.log(alertsData);
        setLoading(false)
        setShow(true)
        setAlerts(alertsData);
        setLoading(false)
        setShow(true)
      }).catch( error => {
        console.log(error)
        setLoading(false)
        setShow(false)
      })
  };

  return (
    <>
    <div>
      <IconButton>
        {}
        <FavoriteBorderIcon />
      </IconButton>
      <Buscador newCoordinates = {getCoordinates} />
    </div>
    <Board
      showData={show}
      loadingData={loading}
      weather={weather}
      alerts={alerts}
      lat={lat}
      lon={lon}
    />
    </>
  )
}
