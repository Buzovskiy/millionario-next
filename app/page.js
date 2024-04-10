import Image from "next/image";
import Hero from "@/components/hero/hero";
import BusinessEvents from "@/components/BusinessEvents";
import Participants from "@/components/Participants";
import Activities from "@/components/Activities";
import Join from "@/components/Join";
import Advantages from "@/components/Advantages";
import Chair from "@/components/Chair";
import Partners from "@/components/Partners";

export default function Home() {
   return (
      <main>
         <Hero/>
         <Activities/>
         <BusinessEvents/>
         <Join/>
         <Advantages/>
         <Participants/>
         <Chair/>
         <Partners/>
      </main>
   );
}
