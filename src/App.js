import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header brand="FasTask" />
      <Main />
      <Footer brand="FasTask" />
    </div>
  );
}

export default App;
