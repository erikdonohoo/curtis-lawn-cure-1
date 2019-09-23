import React from 'react';

import Guarantee from "../Images/Home/OurGuarantee.png";
import Banner from '../Images/Home/BannerImage.jpg';



function Home() {
  return (
    <div>
      <img style={{width:'100%', height:'auto'}} src={Banner}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: '10px 20px'
        }}
      >
        <h3 style={{color:'green'}}>A Lawn Cure Program based on Local Experience</h3>
        <p>
          Thirty five years of local research gives our specialists the
          experience it takes to cure the most difficult lawn and yard problems
          of northern Utah. We can examine your lawn free of charge and
          recommend the correct procedure to cure any lawn problem. We not only
          treat with chemicals but do mechanical aerating if necessary. If your
          lawn is too far gone we do seeding or sodding and all the soil
          preparation that goes with it. Deep root feeding for trees and shrubs
          is also part of our service.
        </p>
        <h3 style={{color:'green'}}>Our Spray Program</h3>
        <p>
          Our program is based on prevention. For example, our early spring
          treatment contains a pre-emergent weed control to prevent spurge,
          crabgrass and foxtail weeds. Our early spring deep root feeding for
          your trees and shrubs includes a systematic insect control to keep
          bugs off your ornamentals all season long. Our late spring treatment
          contains an insecticide to prevent billbugs and other larva from
          spreading into epidemic proportions. Diagnoses of fungus disease is
          also part of our lawn cure program.
        </p>
        <h3 style={{color:'green'}}>A Partnership</h3>
        <p>
          Of course our treatments alone are not cure-alls. Proper watering and
          mowing are essential to a perfect lawn. Accompanying our treatments
          you will receive a brochure with suggestions to help you. If you have
          other questions we are as near as your phone.
        </p>
        <img style={{width:'300px', alignSelf:'center', paddingTop: '30px'}} src={Guarantee}></img>
        <p>
          Our first priority is your complete satisfaction. If for any reason
          you are not happy with our results, please give us a call. A more
          thorough analysis will be made of any persisting problem to determine
          corrections necessary in our lawn cure program, at no additional cost
          to you.
        </p>
      </div>
      
    </div>
  )
}

export default Home;
