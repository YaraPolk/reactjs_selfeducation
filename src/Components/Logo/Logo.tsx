import React from "react";

const Logo = (props: any) => {
  return (
      <img className={props.className} src={props.link} alt={props.alt}/>
  )
}

export default Logo;