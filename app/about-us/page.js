import {Fragment} from "react";
import AboutUs from "@/components/AboutUs";
import Promo from "@/components/Promo";
import Team from "@/components/Team";


const Page = () => {
   return (
      <div style={{backgroundColor: 'white'}}>
         <AboutUs/>
         <Promo/>
         <Team/>
      </div>
   )
}

export default Page;