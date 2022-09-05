import React from "react";
import avatar from '../../assets/avatar.JPG';

function NavBarRight () {
  return (
    <>
        <div className="dropdown">
          <img src={avatar} alt="profile pic" className="profile-pic"></img>
          <div class="dropdown-content">
            <a href="#1">Your profile</a>
            <a href="#2">Your Repo</a>
            <a href="#3">Settings</a>
          </div>
        </div>
        <a href="#icon" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>        
    </>
  )
}

export default NavBarRight;