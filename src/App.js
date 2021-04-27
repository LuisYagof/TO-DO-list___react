import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthContext from "./Contexts/authContext-F";

function App() {
  const [auth, setAuth] = useState(false)
  const toggleAuth = () => setAuth(!auth)
  const authContext = {
    auth, toggleAuth
  }

  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={authContext}>
          <Header brand="Hookies" />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/" component={Main} />
          </Switch>
          
        </AuthContext.Provider >
        {/* <Footer brand="FasTask" /> */}
      </div>
    </Router>
  );
}

export default App;
