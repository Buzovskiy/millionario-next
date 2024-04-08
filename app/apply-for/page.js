import ApplyFor from "@/components/ApplyFor";
import {Suspense} from "react";


const ApplyForPage = () => {
   return (
      <Suspense fallback={''}>
         <ApplyFor component='ApplyForFormLong' />
      </Suspense>
   )
}

export default ApplyForPage;