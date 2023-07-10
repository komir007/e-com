"use client"

import Cardlist from "@/components/Cardlist";
import Checkout from "@/components/Checkout";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://via.placeholder.com/300',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/300',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://via.placeholder.com/300',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Aggiungi più prodotti qui...
];


const Home = () => {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState([])


const addproduct = (product)=>{
  setCart([...cart, product])
}

function removeproduct (id){
 
  setCart(cart.filter((cart)=>cart.id !== id))
}


return(
  <section className='w-full flex-center flex-col'>
    <Navbar key={products.id} cart={cart} removeproduct={removeproduct}/>
    <h1 className='head_text text-center'>
      e-sport Champions
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> shop</span>
    </h1>
    <p className='desc text-center mb-16'>
     ####################################
     ####################################
     ####################################
    </p>

    <div className="flex-col flex-center">
      <Cardlist key={products.id} products={products} addproduct={addproduct}/>
    </div>
    <Footer />
  </section>
)};

export default Home;
