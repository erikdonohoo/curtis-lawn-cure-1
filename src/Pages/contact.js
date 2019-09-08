import React from "react";
import Header from "../Components/header";
import "../../src/App.css";
import Instagram from "../Images/Home/instagram.jpeg";
import Facebook from "../Images/Home/facebook.png";
import Twitter from "../Images/Home/twitter.png";
import Footer from "../Images/About/FooterGrass.png";

function Contact() {
  return (
    <div>
      <div class="container">
        <h1 class="title">Contact Us</h1>
        <div class="contactInfo">
          <div>Give us a call!</div>
          <div class="number">801-254-0405</div>
        </div>
        <div class="email">
          Scheule a free estimate today{" "}
          <a href="mailto:preston.s.donohoo@gmail.com?subject=I would like an estimate">
            <button class="button">Click Here!</button>
          </a>
        </div>
        <div class='social-media-links'>
        <img
          style={{
            padding: "7px",
            width: "30px",
            height: "30px",
            borderRadius: "15px"
          }}
          src={Instagram}
        ></img>
        <img
          style={{
            padding: "7px",
            width: "30px",
            height: "30px",
            borderRadius: "30px"
          }}
          src={Facebook}
        ></img>
        <img
          style={{
            padding: "7px",
            width: "30px",
            height: "30px",
            borderRadius: "25px"
          }}
          src={Twitter}
        ></img>
        </div>
      </div>
      <footer>
        <img class="footer" src={Footer}></img>
      </footer>
    </div>
  );
}

export default Contact;
