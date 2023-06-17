'use client'
import React from 'react'
import Image from 'next/image';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
/* import axios from 'axios'; */
import { getData } from '../../../../../../api/API';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData('/countertops.json')
      setProducts(data["countertops"])
    })()
    // Assuming that the public directory is served statically
    /* axios.get('/db.json').then(response => {
      setProducts(response.data["productList"]);
    }); */
  }, []);

  console.log(Array.isArray(products))

  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">

        {products.map(product => {
          return(
            <ProductCard key={product.id} {...product}/>
          )
        })}
        
        
        


        
      </ul>
    </section>
  );
}

export default ProductList