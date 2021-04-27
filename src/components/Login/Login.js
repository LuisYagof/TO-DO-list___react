import React, { useContext } from 'react';
import { Link } from "react-router-dom";
// import { AuthContextConsumer } from "../../Contexts/authContext"
import AuthContext from "../../Contexts/authContext-F"


const Login = props => {
  const authContext = useContext(AuthContext);
  return (
    <form>
          <div className="login">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Correo" />
            <input type="text" placeholder="Contraseña" />
            <button type="button" onClick={authContext.toggleAuth}><Link to="/">Enviar</Link></button>
          </div>
      <button ><Link to="/">Volver</Link></button>
    </form>
  )
}

export default Login;

// -------------------------------------------CONTEXT CONSUMING W/CLASSES
    // <AuthContext.Consumer>
    // {context => (
    //   <button type="button" onClick={context.toggleAuth}><Link to="/">Enviar</Link></button>
    // )}
    // </AuthContext.Consumer>