import React from "react";
import "./NaveBar.css";
import logo from "../images/logo.jpg"

import { Link, useHistory } from "react-router-dom";

function NaveBar() {
  return (
    <div  className="header row">
      <div className="col-lg-3 logo"  >
        <Link to="/">
          <img
            src={logo}
            alt="Astu"
            className="header__logo"
          />
        </Link>
    
      </div>
      <div className="col-lg-9">
        <div className="header__nav">
          <Link to="/eventlist" className="header__clearlink ">
            <div className="header__option">
              <span className="header__optionLineTwo">Event List</span>
            </div>
          </Link>
          <Link to="/eventstory" className="header__clearlink ">
            <div className="header__option">
              <span className="header__optionLineTwo"> Event Story</span>
            </div>
          </Link>
          <Link to={"/requestevent"} className="header__clearlink request ">
            <div className="header__option">
              <span className="header__optionLineTwo">Request Event</span>
            </div>
          </Link>
          <Link to={"/eventList"} className="header__clearlink request ">
            <div className="header__option">
              <span className="header__optionLineTwo">Edit</span>
            </div>
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default NaveBar;
