import { useState } from "react";
import NavBar from "../components/NavBar";
import Weather from "../components/Weather";
import Favorites from "../components/Favorites";

export default function Principal() {
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites"))

  const handleFavorites = (idFav) => {
    let newFav = [...favorites,{idFav}]
    setFavorites(newFav)
    localStorage.setItem("favorites", JSON.stringify(newFav))
  }

  const deleteFavorite = (idFav) => {
    let newFav = favorites.filter((fav) => fav.idFav !== idFav)
    setFavorites(newFav)
    localStorage.setItem("favorites", JSON.stringify(newFav))
  }

    return(
      <>
        <NavBar />
        <Weather handleFavorites={handleFavorites} deleteFavorite={deleteFavorite}/>
        <Favorites favorites={favorites} deleteFavorite={deleteFavorite}/>
      </>

    );
  }