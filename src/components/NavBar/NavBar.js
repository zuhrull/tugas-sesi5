import React from "react";
import NavBarLeft from "./NavbarLeft";
import NavBarRight from "./NavBarRight";

class NavBar extends React.Component {
    render(){
        return (
            <>
                <div className="topnav" id="myTopnav">
                <NavBarLeft />
                <NavBarRight />  
                </div>            
            </>
        )
    }
}

export default NavBar;