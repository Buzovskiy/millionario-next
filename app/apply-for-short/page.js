import ApplyFor from "@/components/ApplyFor";
import {Suspense} from "react";


const ApplyForPage = () => {
   return (
      <Suspense fallback={''}>
         <ApplyFor component='ApplyForFormShort'/>
      </Suspense>
   )
}

export default ApplyForPage;