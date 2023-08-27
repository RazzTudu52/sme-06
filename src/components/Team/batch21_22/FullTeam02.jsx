import React, {useState} from 'react'
// import Team01Data from './Team01Data'
import '../Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import Team02Data , { CoordinatorsData } from './Team02Data'
import NavPage from '../../Navigation/NavPage';
import Footer from '../../Footer/Footer';
const  FullTeam02 =  () => {
  const [item1] = useState(Team02Data);
  const [item2] = useState( CoordinatorsData);
  return (
    <>
      <section>
          <NavPage />
        <div className='team-section' id='team'>
                              
        <div className="team-text">
        <h3 className='headLine01'>TEAM</h3>
          <h3 className='headLine01'>SESSION 21-22</h3>
          <h1 className='headLine02'>Our<span className='headSpsn'> Office-Bearers</span></h1>
        </div>
        <div className="team-mambers">

          {
            item1.map((data, i) => {
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
        </div>
        <div className="team-text">
          <h1 className='headLine02'>Our<span className='headSpsn'> Student Coordinators</span></h1>
        </div>

          <div className="team-mambers coordinator"> 
          {
            item2.map((data) => {
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