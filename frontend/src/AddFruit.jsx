import React, { useState } from "react"
import axios from "axios"
import videoFile from "./assets/video/background.mp4"

function Addfruit() {
  const [fruitName, setFruitName] = useState(""); 

  const check = async () => {
    if (!fruitName.trim()) {
      alert("Please enter a fruit name...!");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/fruits`, {
        params: { fruits: fruitName },
      });
      alert(response.data.message);
      setFruitName("");
    } catch (error) {
      console.error("Error adding fruit:", error);
      alert("Failed to add fruit. Please try again.");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-50 shadow-2xl rounded-lg p-8 w-80">
          <h1 className="text-3xl font-bold text-black mb-4 drop-shadow-lg text-center">
            Add Fruit
          </h1>
          <p className="text-gray-900 text-center mb-6 drop-shadow-lg">
            Enter a new fruit to add it to your collection!
          </p>
          <input
            type="text" placeholder="Enter fruit name" value={fruitName} onChange={(e) => setFruitName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="w-full bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-bold py-3 px-4 rounded-md mt-6 hover:from-green-500 hover:to-blue-600 transition duration-300 shadow-md"
            onClick={check}
          >
            Add Fruit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addfruit;