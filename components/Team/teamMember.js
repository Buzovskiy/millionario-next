import {Col} from "react-bootstrap";
import Image from "next/image";

const TeamMember = ({member}) => {
   return (
      <Col lg={4} sm={6}>
         <div className="single-driver">
            <div className="driver-image">
               <Image
                  alt="Members"
                  src={member.image_url}
                  width={0}
                  height={0}
                  sizes="100vw"
               />
            </div>
            <div className="driver-text">
               <div className="driver-name">
                  <h3>{member.name}</h3>
                  <p className='heading'>Учасник клубу</p>
                  <div className='description' dangerouslySetInnerHTML={{__html: member.text}}/>
               </div>
            </div>
         </div>
      </Col>
   );
}

export default TeamMember;