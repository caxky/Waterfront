import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
