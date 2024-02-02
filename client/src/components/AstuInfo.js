import React from 'react'
import './NaveBar.css'
import { Link, useHistory } from "react-router-dom";

function AstuInfo() {
  return (
   
    <div className="row about" >
        <div className='col-lg-6'></div>
        <div className="header__nav col-lg-6  ">
          <Link to="/eventlist" className="header__clearlink ">
            <div className="header__option ">
              <span className="header__optionLineOne">+2510909090</span>
            </div>
          </Link>
          <Link to="/eventstory" className="header__clearlink ">
            <div className="header__option">
              <span className="header__optionLineOne"> abcde@gmail.com</span>
            </div>
          </Link>
        
      
          <Link to={"/login"} className="header__clearlink ">
            <div className="header__option ">
              <span className="header__optionLineOne">Organizer Login</span>
            </div>
          </Link></div>
       
      </div>
   
  );
  
}

export default AstuInfo