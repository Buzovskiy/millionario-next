'use client';
import {Container, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import Image from "next/image";
import TeamMember from "@/components/Team/teamMember";

import './style.scss';


const Team = () => {
   const [team, setTeam] = useState([]);

   useEffect(() => {
      const fetchMembers = async () => {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/api/members/list?active=1`);
         const members = await response.json();
         setTeam(members);
      }
      fetchMembers().catch(console.error)
   }, []);

   return (
      <section className="gauto-driver-area section_70">
         <Container>
            <Row>
               <Col md={12}>
                  <div className="site-heading">
                     <h4>засновники та учасники</h4>
                     <h2>клубу Millionario</h2>
                  </div>
               </Col>
            </Row>
            <Row>
               {team.map((member) => <TeamMember member={member} key={member.id}/>)}
            </Row>
         </Container>
      </section>
   );
};

export default Team;
