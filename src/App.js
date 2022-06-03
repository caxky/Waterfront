import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Values from './components/Values';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Values/>
      <Footer/>
    </div>
  );
}

export default App;
