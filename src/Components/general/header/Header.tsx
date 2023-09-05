import React from "react";
import Logo from "../../Logo/Logo";
import logo from "../../../assets/images/logo512.png";
import HeaderMenu from "../../menus/HeaderMenu";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
          <Link to={"/"}>
              <Logo link={logo} alt={"Self Education"} className={"header-logo"}/>
          </Link>
          <HeaderMenu />
      </header>
    </>
  )
}

export default Header;