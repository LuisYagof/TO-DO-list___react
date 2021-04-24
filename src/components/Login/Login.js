import React from 'react';
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <form>
      <div className="login">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo" />
        <input type="text" placeholder="Contraseña" />
        <button type="button">Enviar</button>
      </div>
      <button ><Link to="/">Volver</Link></button>
    </form>
  )
}

export default Login;