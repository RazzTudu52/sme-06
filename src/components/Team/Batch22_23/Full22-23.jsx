import React, {useState} from 'react'
import '../Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import {Coordinator22} from './Batch22-23Data';
import Batch22 from "./Batch22-23.jsx";
import NavPage from '../../Navigation/NavPage';
import Footer from '../../Footer/Footer';
const  Full22 =  () => {
    const [item] = useState( Coordinator22);
  return (
    <>
      <section>
          <NavPage />
          <Batch22 />
          <div className="team-text">
          <h1 className='headLine02'>Our<span className='headSpsn'> Student Coordinators</span></h1>
        </div>
        <div className="team-mambers coordinator"> 
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

export default Full22;