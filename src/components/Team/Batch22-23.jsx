import React, { useState } from 'react'
import Batch22_23 from './Batch22-23Data'
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Batch22 = () => {
  const [item] = useState(Batch22_23);
  return (
    <>
      <section>
        <div className='team-section' id='team'>

        <div className="team-text">
          <h3 className='headLine01'>TEAM</h3>
          <h3 className='headLine01'>SESSION 22-23</h3>
          <h1 className='headLine02'>Our<span className='headSpsn'> Office-Bearers</span></h1>
        </div>
        <div className="team-mambers">

          {
            item.map((data, i) => {
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
      </section>
    </>
  )
}

export default Batch22;