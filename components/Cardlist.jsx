import React from 'react';
import Cards from './Cards';


const Cardlist = ({ products , addproduct}) => {
  return (
    <div className="flex flex-wrap mx-10 gap-10">
      {products.map((product) => (
        <Cards key={product.id} product={product} addproduct={addproduct}/>
      ))}
    </div>
  );
};

export default Cardlist;