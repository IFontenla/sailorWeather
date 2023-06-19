import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Principal from "./pages/Principal";

import firebase from "./firebase/credentials.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebase)

function App() {
  const [token, setToken] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if(user) {
      setToken(user)
    } else {
      setToken(null)
    }
  })
  
  return (
    <div className="App">
      {token ? <Principal /> : <Login />}
    </div>
  );
}

export default App;
