import React, { useState } from "react";

function FilterSection({
  products,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}) {
  const categories = products.map((p) => p.category?.name || "Unknown");
  const uniqueCategories = ["All", ...new Set(categories)];

  const [isOpen, setIsOpen] = useState(false); // for mobile toggle

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(cat)
          ? prev.filter((c) => c !== cat)
          : [...prev.filter((c) => c !== "All"), cat]
      );
    }
  };

  return (
    <div className="w-full bg-gray-100">
      {/* ✅ Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full bg-gray-200 p-3 rounded-md mb-4 flex justify-between items-center"
      >
        <span className="font-semibold">Filters</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* ✅ Filter content */}
      <div
        className={`p-5  rounded-md  
          ${isOpen ? "block" : "hidden"} 
          lg:block`} // always visible on desktop
      >
        <h1 className="font-bold mb-4">Apply Filters</h1>

        {/* Categories */}
        <div className="w-full mb-6">
          <label className="font-semibold">Select Category</label>
          {uniqueCategories.map((cat, index) => (
            <div key={cat} className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value={cat}
                id={`cat-${index}`}
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <label htmlFor={`cat-${index}`}>{cat}</label>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="w-full flex flex-col gap-4">
          <label className="font-semibold">Set Price Range</label>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([+e.target.value, priceRange[1]])
              }
              className="w-20 p-1 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              min="0"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], +e.target.value])
              }
              className="w-20 p-1 border rounded"
            />
          </div>

          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], +e.target.value])
            }
            className="w-full"
          />

          <p className="text-sm text-gray-600">
            Selected: ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
