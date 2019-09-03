import React from "react";
import Dan from "../Images/About/HeadshotDan.jpg";
import Legrand from "../Images/About/HeadshotLeGrand.jpg";
import Mira from "../Images/About/HeadshotMira.jpg";
import Ben from "../Images/About/HeadshotBen.jpg";
import Grass from '../Images/About/FooterGrass.png';
import "../../src/App.css";

function About() {
  return (
    <div class='about-page' >
      <h1 style={{ textAlign: "center" }}>About US</h1>
      Our lawn care company started in Utah County back in 1979 when Provo was
      hit by an epidemic of Billbugs.  Many lawns were completely destroyed by
      the grub of this pest. We became very proficient at eradicating this pest
      while at the same time developing a liquid nitrogen to speed up the
      recovery of the lawns we treated. Over the years we improved our
      fertilizers and pest controls with the latest technologies and application
      techniques.  We pride ourselves with providing our customers with the best
      preventatives and technology available so that we don&#39;t have to try to
      fix problems which could have been prevented. Hence our slogan, &quot; an
      ounce of prevention is worth a pound of cure&quot;. We invite you to
      become a part of the Curtis Lawn Cure family of satisfied customers. We
      look forward to seeing you soon!
      <div class="top-profiles">
        <div class='profile'>
          <img style={{ width: "200px" }} src={Dan} />
          <h3 class="name">Daniel L. Cutis</h3>
          <p>
            Dan has been in the business for 37 years treating lawns, ornamental
            trees and shrubs. He graduated from BYU in 1980, then went on to
            work at Questar Gas, specializing in grounds, landscape improvement
            and maintenance for most of the 35 years that he worked there, then
            retired in 2013. Since then he spends full time making Curtis Lawn
            Cure the best small company with the best quality service available
            today. He has 6 children: 4 daughters and 2 sons, and 7
            grandchildren. He loves the outdoors especially camping, hiking, and
            house-boating on Lake Powell.
          </p>
        </div>
        <div class='profile' >
          <img style={{ width: "200px" }} src={Legrand} />
          <h3 class="name">LeGrand Curtis</h3>
          <p>
            LeGrand is Dan’s oldest son. He has worked side by side with his dad
            for many years helping to make this company what it is today. When
            it comes to lawns he really knows his stuff. He loves spending time
            with his wife, Lindsay and his two children, Adalyn and Liam. He
            loves making lawns green and showing customers how to maximize our
            treatments.
          </p>
        </div>
      </div>
      <div class="top-profiles">
        <div class='profile'>
          <img style={{ width: "200px" }} src={Ben} />
          <h3 class="name">Ben Curtis</h3>
          <p>
            Ben is Dan’s youngest son. He’s the tough guy of the family and
            enjoys going to the gym. He handles the rigorous job of aerating
            that no one else can do as fast and well. He's the one in the family
            who keeps his dad young and likes to rough it in the outdoors.
          </p>
        </div>
        <div class='profile'>
          <img style={{ width: "200px" }} src={Mira} />
          <h3 class="name">Mira J. Curtis</h3>
          <p>
            Mira has been married to Dan for 40 years. She is the backbone of
            this company, taking care of the books and keeping track of
            everything, including Dan. She is the sweet, kind voice at the other
            end of the phone who answers your questions about the cultural
            practices that make lawns stay green longer.
          </p>
        </div>
      </div>
      {/* <img src={{width:'100%'}} src={Grass} /> */}
    </div>
  );
}

export default About;
