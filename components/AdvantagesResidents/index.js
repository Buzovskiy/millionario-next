'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import './style.scss';

const AdvantagesResidents = () => {

   const [items, setItems] = useState([]);

   useEffect(() => {
      const fetchItems = async () => {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/api/advantages/list`);
         const items = await response.json();
         setItems(items);
         console.log(items);
      }
      fetchItems().catch(console.error);
   }, []);

   return (
      <div className="container advantages-residents">
         <div className="row py-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  Переваги для резидентів бізнес-клубу MILLIONARIO
               </div>
               <div className="advantages-residents__wrapper">
                  {items.map(item => (
                     <div className="item" key={item.id}>
                        <div className="description">{item.description}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdvantagesResidents;