import React from "react";
import "./Footer.css";
import img1 from './google.png'
import img2 from './apple.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
     <div className="footer-row">
      <div className="footer-left">
      <span>About Disney+ Hotstar</span>
            <span>Terms Of Use</span>
            <span>Privacy Policy</span>
            <span>FAQ</span>
            <span>Feedback</span>
            <span>Careers</span>
            <p>
            @2022 STAR. All Rights reserved. HBO, Home Box Office and all related channel and programming logos are service marks of,<br/>
            all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.<br/>
            </p>
      </div>
      <div className="footer-middle">
            <span className="text">Connect with us</span>
            <span><FacebookIcon/></span>
            <span><TwitterIcon/></span>
        </div>
        <div className="footer-right">
          <span className="text">Disney+ Hotstar App</span>
          <div className="symbol">
            <img className="apple" src={img1} alt=""/>
            <img src={img2} alt=""/>
          </div>
        </div>
     </div>
  );
};

export default Footer;
