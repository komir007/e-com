"use client"

import React, { useState } from 'react';
import { BeakerIcon,RocketLaunchIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const Checkout = ({ items, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handremoveFromCart = (e,id) => {
   e.preventDefault();  
    removeFromCart(id);
    console.log(id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-black hover:text-white transition duration-300"
        onClick={toggleDropdown}
      >
       <ShoppingCartIcon className="h-8 w-8 text-black"/> ({items.length})
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-64 p-4">
          <h2 className="text-2xl font-bold mb-4">Carrello</h2>
          {items.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.price}€</p>
                  </div>
                  <button
                    className="text-red-500 font-bold"
                    onClick={(e)=>removeFromCart(item.id)}
                  >
                    Rimuovi
                  </button>
                </li>
              ))}
            </ul>
          )}
          <span className="text-2xl font-bold mb-4">Totale: {items.reduce((acc, curr) => acc + curr.price, 0)}€</span>
        </div>
      )}
    </div>
  );
};

export default Checkout;