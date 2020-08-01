import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import About from './Components/About.jsx';
import Thumbnail from './Components/Thumbnail.jsx';
import Footer from './Components/Footer';
import  './Assets/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <Thumbnail />
      <Footer />
    </div>
  );
}

export default App;
