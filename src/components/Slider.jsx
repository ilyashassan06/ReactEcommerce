import React, { useContext, useMemo } from 'react'
import { ProductsContext } from '../assets/context/Productcontext';
import SlickSlider from "react-slick"; // renamed to avoid confusion with your component name
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider() {
      const { products, loading, error } = useContext(ProductsContext);
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    const randomProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5).slice(0, 5);
  }, [products]);
  return (
    <div className="w-full">
      <SlickSlider {...settings}>
      {randomProducts.map((product,index) => (
       <div
      key={product.id}
      className={`
        w-[300px]  flex  p-4 rounded-2xl shadow-lg text-white
        ${index % 3 === 0 ? "bg-gradient-to-r from-purple-600 to-pink-500" : ""}
        ${index % 3 === 1 ? "bg-gradient-to-r from-blue-500 to-cyan-400" : ""}
        ${index % 3 === 2 ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
      `}
      
    >
      <div className="bg-black/50 p-2 rounded">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p>₹{product.price}</p>
      </div>
    </div>
      ))}
    </SlickSlider>
    </div>
  );
}

export default Slider