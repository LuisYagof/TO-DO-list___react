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

function App() {
  return (
    <Router>
      <div className="App">
        <Header brand="Hookies" />
        {/* <Main /> */}
        {/* <Footer brand="FasTask" /> */}
        {/* <button>
          <Link to="/login">Login</Link>
        </button> */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
