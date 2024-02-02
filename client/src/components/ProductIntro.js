import React from "react";
import logo from "../images/logo.jpg"
import './NaveBar.css'
import { Link } from "react-router-dom";



function ProductIntro() {
  
  return (
    <div className="row productIntro">
      <div className="col-lg-6 subPro  m-6">

        <div>
        <div className = "text1Body">
            Bring Remote and In-Person Audiences <br/>Together for One Memorable Hybrid
          Event
        </div>
        <div className = "text2Body">
          Make effectively connecting and fully engaging <br/>both audiences simple
          with a unified hybrid event platform.
          </div>
          <div className = "text2Body">
          Make effectively connecting and fully engaging <br/>both audiences simple
          with a unified hybrid event platform.
        </div>
      </div>
        
        <div className="header__clearlink  reqButton">
        <Link to={"/requestevent"} className="header__clearlink ">
          <button  className="header__option requestOne">
            Request Event
            </button>
          </Link>
        </div>
        <div className="header__clearlink  reqButton">
        <Link to={"/eventList"} className="header__clearlink ">
          <button  className="header__option requestOne">
            Edit Request
            </button>
          </Link>
          </div>
        
      </div>
      <div className="col-lg-6 productPictureOne">
          <img
            src={logo}
            alt="Astu"
            className="productLogo"
          />
      </div>
    </div>
  );
}

export default ProductIntro;
