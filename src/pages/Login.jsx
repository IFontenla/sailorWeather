import { useState } from "react";

import firebase from "../firebase/credentials.jsx";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebase)

export default function Login() {

  const firestore = getFirestore(firebase)
  const[crear, setCrear] = useState(false)

  async function createUser(email, password) {
    const userInfo = await createUserWithEmailAndPassword(auth, email, password)
    .then((userFirebase) => {
      return userFirebase
    })
    const docRef = doc(firestore, `users/${userInfo.user.uid}`)
    setDoc(docRef, {correo: email, contraseña: password})
  }

  function handleSubmit(e) {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    
    console.log("submit")

    if(crear) {
      createUser(email, password)
    } else {
      signInWithEmailAndPassword(auth, email, password)
    }

  }

  return (
    <>
      <div className="login-wrapper border rounded mx-auto bg-dark text-light nb-5">
        <h1>{crear ? "Registrarse" : "Iniciar sesión"}</h1>
        <form  onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="email" id="email"/>
          </label>
          <br />
          <label>
            <p>Password</p>
            <input type="password" id="password"/>
          </label>
          <div>
            <button className="btn btn-primary input-group-text m-3" type="submit">{crear ? "Registrarse" : "Iniciar sesión"}</button>
          </div>
        </form>
        <button className="btn bg-transparent text-light mt-4" onClick={() => setCrear(!crear)}>{crear ? <u>Ya tengo una cuenta</u> : <u>Registrarse</u>}</button>
      </div>
    </>
  );
}
