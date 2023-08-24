import React, {useState} from 'react'
// import Team01Data from './Team01Data'
import CoordinatorsData from './CoordinatorsData';
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Team02 from './Team02';
// import Coordinator from './Coordinator';
import NavPage from '../Navigation/NavPage';
import Footer from '../Footer/Footer';
const  FullTeam02 =  () => {
  const [item] = useState( CoordinatorsData);
  return (
    <>
      <section>
          <NavPage />
          <Team02 />
        <div className="team-text  gallary-heading">
          <h1><span>Our</span>Student Coordinators</h1>
        </div>
        <div className="team-mambers"> 
        {/* <Coordinator /> */}
          {
            item.map((data) => {
              const { id, name, designation, image, facebook, insta, linkdin } = data;
              return (

                <div className="mamber" key={id}>
                  <div className="img-social">

                    <img src={image} alt={id} />
                    <div className="social">
     
                    <a href={facebook} title="face" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                      <a href={insta} title="insta" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                      <a href={linkdin} title="linkdin" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>

                    </div>
                  </div>
                  <div className="mamber-info">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                  </div>

                </div>

              )
            })
          }


        </div>
         <Footer />
      </section>
    </>
  )
}

export default FullTeam02;