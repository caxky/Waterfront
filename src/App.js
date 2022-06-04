import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ValuesPage from './components/ValuesPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
        <Routes>
          <Route path='/values' element={<ValuesPage/>}/>
          <Route path='/' element={<Layout/>}/>
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
