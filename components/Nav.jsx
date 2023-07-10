import React from 'react';
import { BeakerIcon,RocketLaunchIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import Checkout from "@/components/Checkout";

const Navbar = ({cart, removeproduct}) => {


  return (
    <nav className="sticky top-0 bg-gray-300 rounded-md mx-3 ">
      <div className="container mx-auto px-4 py-2 my-3 ">
        <div className="flex items-center justify-between">
          
          <a 
            href="/" 
            className="text-2xl font-bold text-black">
          <RocketLaunchIcon className="h-8 w-8 text-black" />
          </a>
          <h1 className='text-2xl font-bold text-black'>
            E-sport shop
          </h1>
          <Checkout items={cart}  removeFromCart={removeproduct}/>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
