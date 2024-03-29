import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const NavPage = () => {
    const [showIcon, setShowIcon] = useState(true);

    return (
        <>
            <div className="navBar  sticky ">
                <nav>
                    <div className="nav-img">
                        <picture>
                        <a href="https://smebitsindri.live/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/bitlogo.png' alt="Logo" className="bitlogo" /></a>
                        <a href="https://smebitsindri.live/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/Smelogo.png' alt="smelogo" className="smelogo"/></a>
                        </picture>
                    </div>

                    <div className={showIcon ? "nav-links nav-X" : "nav-links nav-Y"}>
                        <ul className='navUl'>
                            <li className='navLi'>
                                 <NavLink className="navlink homePage" to="/" onClick={() => setShowIcon(true)}>Home Page</NavLink>
                            </li>
                            <li className='navLi'>
                                 <NavLink className="navlink" to="/batch2020" onClick={() => setShowIcon(true)}>Session 20-21</NavLink>
                            </li> 
                            <li className="navLi">
                                 <NavLink className="navlink" to="/batch2021" onClick={() => setShowIcon(true)}>Session 21-22</NavLink>
                            </li>
                             <li className="navLi">
                                 <NavLink className="navlink" to="/batch2022" onClick={() => setShowIcon(true)}>Session 22-23</NavLink>
                            </li>

                        </ul>

                    </div>

                    <div className={showIcon ? "menu-container" : "menu-container-change"} onClick={() => {
                        setShowIcon(!showIcon)
                    }}
                        >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default NavPage;