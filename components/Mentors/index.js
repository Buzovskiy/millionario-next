import Link from "next/link";
import Image from "next/image";
import {data} from "@/components/Mentors/data";
import styles from "./Mentors.module.css";

const Mentors = () => {
   return (
      <div className="container">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  Ментори успiху
               </div>
               <div className={styles['mentors-wrapper']}>
                  {data.map(mentor => (
                     <div className={styles.mentor}>
                        <Image
                           alt="Mentors"
                           src={mentor.image_url}
                           width={0}
                           height={0}
                           sizes="100vw"
                        />
                        <div className={styles.description}>
                           <div className={styles.name}>{mentor.name}</div>
                           <div className={styles.role}>{mentor.role}</div>
                           <div className={styles.info}>{mentor.info}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Mentors;