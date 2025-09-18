import React, { useContext } from 'react'
import { ProductsContext } from '../assets/context/Productcontext';
import { div } from 'motion/react-client';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

function CategorySection() {

    const navigate = useNavigate()
    const { products, loading, error } = useContext(ProductsContext);
    const categories = products.map((p) => p.category || "Unknown")
     const uniqueCategories = [...new Set(categories)];
     // Get five random categories
function getRandomCategories(uniqueCategories, n = 7) {
  const shuffled = uniqueCategories.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Usage:
const randomFive = getRandomCategories(uniqueCategories, 7);
// randomFive will have 5 unique categories
  return (

   <div className="w-full flex flex-col md:justify-center items-center py-8 px-1">
  {/* Section Heading */}
  <h1 className="text-3xl font-bold mb-6 text-gray-800">Shop By Trending Categories</h1>

  {/* Categories Grid */}
  <div className="w-full flex flex-wrap  items-center justify-center md:flex   gap-2 md:gap-5">
    {randomFive.map((cat, index) => (
      <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }} 
        key={index}
         onClick={() => navigate(`/categories/${cat}` , { state: { cat } } )}
        className={`
          border rounded-xl px-4 py-3 shadow-sm 
          hover:shadow-md 
          flex justify-center items-center cursor-pointer
          ${index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"} 
        `}
      >
        <p className="text-sm sm:text-lg font-medium text-gray-700 truncate whitespace-nowrap max-w-[120px] sm:max-w-none">
          {cat}
        </p>
      </motion.div>
    ))}
  </div>
</div>


  )
}

export default CategorySection