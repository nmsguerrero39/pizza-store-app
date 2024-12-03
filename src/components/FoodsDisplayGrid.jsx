import React, { useState, useEffect } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FoodsDisplayGrid = () => {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 3; // Define items per page

  useEffect(() => {
    fetch("http://localhost:5000/api/pizza")
      .then((response) => response.json())
      .then((item) => setFoods(item))
      .catch((error) => console.error("Error fetching the data", error));
  }, []);

  // Calculate the current slice of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFoods = foods.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for navigation
  const handleNext = () => {
    if (currentPage < Math.ceil(foods.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Food Grid */}
      <div className="grid grid-cols-3 gap-3">
        {currentFoods.map((food) => (
          <div
            key={food.id}
            className="shadow-grids w-72 flex flex-col justify-center items-center py-4 px-6 text-center"
          >
            <img className="w-48" src={food.image} alt={food.name} />
            <h2 className="font-bold text-2xl">{food.name}</h2>
            <p className="text-base my-2">
              {food.description || "No description available"}
            </p>
            <div className="flex justify-between w-40 font-bold">
              {food.size &&
                Object.values(food.size).map((size, index) => (
                  <div
                    key={index}
                    className="border-2 rounded-full px-2 py-1 border-red-400 text-red-400"
                  >
                    {size}
                  </div>
                ))}
            </div>
            <div className="flex w-64 justify-between my-4">
              <p className="font-bold text-2xl">{food.price}&#36;</p>
              <div className="flex items-center">
                <FaMinusCircle />
                <input
                  type="text"
                  className="w-7 mx-0.5 bg-slate-400 rounded text-white"
                  defaultValue="1"
                />
                <FaPlusCircle />
              </div>
            </div>
            <button className="bg-red-600 py-2 px-10 rounded text-white uppercase font-bold">
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      {foods.length > itemsPerPage && (
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`py-2 px-6 rounded font-bold ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(foods.length / itemsPerPage)}
            className={`py-2 px-6 rounded font-bold ${
              currentPage === Math.ceil(foods.length / itemsPerPage)
                ? "bg-gray-300 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodsDisplayGrid;
