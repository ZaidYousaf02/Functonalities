import React from "react";
import Logo from "../Assets/Images/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>© MedSight Company,Inc.All right reserved</p>

        <a href="/">
          <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />
        </a>

        <ul>
          For More Information email us at:
          <br /> muhammadzaid.zy@gmail.com
        </ul>
      </footer>
    </>
  );
}

export default Footer;
