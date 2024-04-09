import Image from "next/image";
import Hero from "@/components/hero/hero";
import BusinessEvents from "@/components/BusinessEvents";
import Participants from "@/components/Participants";
import Activities from "@/components/Activities";

export default function Home() {
   return (
      <main>
         <Hero/>
         <Activities/>
         <BusinessEvents/>
         <Participants/>
      </main>
   );
}
