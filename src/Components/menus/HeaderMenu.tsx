import React from "react";
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className={"header-menu"}>
            <ul>
                <li><Link to={"/contact_us"}>Contact Us</Link></li>
                <li><Link to={"/about_us"}>About Us</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
            </ul>
        </div>
    )
}

export default HeaderMenu;