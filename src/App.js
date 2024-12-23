import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import MyWork from './components/MyWork/MyWork';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Home from './pages/Home';
import ServiceDetails from './pages/Servicedetails';

function App() {
  return (
       <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
