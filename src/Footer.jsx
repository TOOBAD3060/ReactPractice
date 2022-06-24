import React from "react";

let presentYear = new Date().getFullYear();
function Footer() {
  return <p> Copy right {presentYear} </p>;
}

export default Footer;
