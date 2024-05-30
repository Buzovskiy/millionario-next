'use client';

import axios from "axios";

const Page = () => {
   const addToCartHandler = () => {
      const data = {
         quantity: 11,
         sizeId: 77102,
      }
      axios.put('https://api.weestep-kids.es/es/v1/basket/', data)
         .then(function (response) {
            console.log(response);
         })
   }
   return (
      <button onClick={addToCartHandler}>Add to cart</button>
   )
}

export default Page;