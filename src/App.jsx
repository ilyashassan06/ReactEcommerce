import { useContext, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import { ThemeContext } from './assets/context/ThemeToggleContext';


function App() {
  const [count, setCount] = useState(0)
        const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use context
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <>
    <div className={`w-[100%] flex flex-col ${theme === "light"
        ? "bg-white   "
        : "bg-[#0C0C0C]  "
    }`} >
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
         <Route path="/singleproduct/:id" element={<SingleProduct/>} /> 
         <Route path='/categories/:id' element={<Categories/>}/>
      </Routes>

    <Footer/>
    </div>
    </>
  )
}


export default App
