import React from 'react';

const Card = ({ product , addproduct}) => {
  function handlpost (e){
    e.preventDefault()
    addproduct(product);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-800 font-semibold">${product.price}</span>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handlpost}
            >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;