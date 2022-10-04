import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
    //mapping through the links array to assign an <a> tag to each link
    links.map(link => (<a href={"#" + link} key={link}>{link}</a>))
  
  }</nav>;
}

export default NavBar;
