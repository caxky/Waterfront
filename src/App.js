import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Values from './components/Values';
import Staff from './components/Staff';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Values/>
      <Staff/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
