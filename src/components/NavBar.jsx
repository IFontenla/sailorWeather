import firebase from "../firebase/credentials.jsx";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase)

export default function NavBar() {
    return(
      <nav className="navbar bg-dark text-light nb-5">
        <div className="container-fluid">
          <img height={50} src="/sailorWeather.png" alt="sailorWeatherIcon" />
          <h3 className="mx-auto">SAILOR WEATHER</h3>
          <button onClick={() => signOut(auth)} className="btn btn-primary input-group-text">Cerrar sesión</button>
        </div>
      </nav>

    );
  }