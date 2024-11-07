// src/components/Poster.jsx

import React from 'react';
import person1 from '../../utiles/person1.jpg'; // Import the image

function Poster() {
  return (
    <div className="flex items-center justify-between bg-blue-800 text-white p-8 mx-4 mt-20 mb-20">
      <div className="flex items-center">
        <img
          src={person1} // Use the imported image
          alt="Styled Look"
          className="h-40 w-40 object-cover rounded-full border-4 border-white"
        />
        <div className="ml-20 p-4 inline-flex space-x-8 text-white">
          <span className="text-lg font-medium flex items-center">
            <span className="mr-2">✅</span> Free Register
          </span>
          <span className="text-lg font-medium flex items-center">
            <span className="mr-2">✅</span> Great Service
          </span>
          <span className="text-lg font-medium flex items-center">
            <span className="mr-2">✅</span> Easy Payment
          </span>
        </div>
      </div>
      <div className="text-right mr-20">
        <h3 className="text-3xl font-semibold mb-2">Find your Style!</h3>
        <p className="text-lg mb-4">Thousands style more!</p>
        <button className="bg-white text-blue-800 px-4 py-2 rounded-full">Shop Collections</button>
      </div>
    </div>
  );
}

export default Poster;