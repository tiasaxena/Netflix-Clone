import React, { useState, useEffect } from 'react';
import "./Navbar.css";

function Navbar() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
        alt='Netflix Logo'
        ></img>
        <img 
        className='nav__avatar'
        src='https://occ-0-3371-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
        alt='Avatar'
        ></img>
    </div>
  )
}

export default Navbar;