import Event2023October01 from "./eventComponents/Event2023October01";
import Event2023November01 from "./eventComponents/Event2023November01";
import Event2023November21 from "./eventComponents/Event2023November21";
import Event2024February09 from "./eventComponents/Event2024February09";
import Event2024October11 from "./eventComponents/Event2024October11";
import Event2024June21 from "@/components/Forum/eventComponents/Event2024June21";
import './style.scss';

const Forum = ({params}) => {
   const slug = params.slug;

   if (slug === '2023-october-01') {
      return <Event2023October01 />
   } else if (slug === '2023-november-01') {
      return <Event2023November01 />
   } else if (slug === '2023-november-21') {
      return <Event2023November21 />
   } else if (slug === '2024-february-09') {
      return <Event2024February09 />
   } else if (slug === '2024-october-11') {
      return <Event2024October11 />
   } else if (slug === '2024-june-21') {
      return <Event2024June21 />
   }
};

export default Forum;
