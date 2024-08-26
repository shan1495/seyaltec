import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import mystyle from "../App.css";

const Navbar = () => {
    return (
        <>
            <Nav class="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon">
            <div style={{display:"flex", flexDirection:"column",alignItems:"center", flexWrap:"wrap"}}>
            <a title="Logo" href="/home" class="logo scroll">
                <img src="/banner.png" class="logo-dark default" style={{ height:"50px", width:"300px", paddingTop:"15px", alignContent:"center", alignItems:"center"}}/>
                {/* <span class="logotext" style={{marginLeft:"-2px", marginTop:"500px"}}>
                    <span class="logotext">SE<span class="b-clr">Y</span>AL</span> TECHNOLOGIES
                </span> */}
            </a>
            </div>
            
                <NavMenu>
                   <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>           
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    {/* <NavLink to="/industries" activeStyle>
                        Industries
                    </NavLink> */}
                    <NavLink to="/services" activeStyle>
                        Capabilities
                    </NavLink>
                    <NavLink to="/clients" activeStyle>
                        Customers
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    
                    
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
