
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Footer from "./components/UI/footer/Footer";

function App() {



    return (
      <div className='App'>
          <Navbar/>
                  <Routes>
                      <Route path="/" element={<Posts />} />
                      <Route path="gallery" element={<Gallery/>} />
                      <Route path="about" element={<About />} />
                      <Route path='*' element={<Error  />} />
                  </Routes>
          <Footer />

      </div>
  );
}

export default App;
