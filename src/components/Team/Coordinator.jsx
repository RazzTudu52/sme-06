import React, { useState } from 'react'
import CoordinatorsData from './CoordinatorsData';
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const  Coordinator =  () => {
  const [item] = useState( CoordinatorsData);
  return (
    <>
      <section>
        <div className="team-text  gallary-heading">
          <h1><span className='headSpsn'>Our</span>Student Coordinators</h1>
        </div>
        <div className="team-mambers">

          {
            item.map((data) => {
              const { id, name, designation, image, facebook, insta, linkdin } = data;
              return (

                <div className="mamber" key={id}>
                  <div className="img-social">

                    <img src={image} alt={id} />
                    <div className="social">

                      <a href={facebook}><FaFacebookF /></a>
                      <a href={insta}><FaInstagram /></a>
                      <a href={linkdin}><BsLinkedin /></a>

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
      </section>
    </>
  )
}

export default Coordinator;