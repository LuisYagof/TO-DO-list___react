import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header brand="Hookies"/>
      <Main />
      {/* <Footer brand="FasTask" /> */}
    </div>
  );
}

export default App;
