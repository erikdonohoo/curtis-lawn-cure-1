import React from "react";
import Header from "../Components/header";
import A from "../Images/Faq/A.png";
import Q from "../Images/Faq/Q.png";
import Background from "../Images/Faq/BackgroundGradientGreen.jpg";

function FAQ() {
  const background = require("../Images/Services/backgroundImage.jpg");
  return (
    <div class="faq" style={{ backgroundImage: "url(" + background + ")" }}>
    <h1 class='faqTitle'>FAQ</h1>
      <div class="qAndA">
        <div ><img class="faqButton" src={Q} /></div>
        <p class="text">
          What is the most common mistake lawn customers make that you have to
          deal with the most?
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={A} /></div>

        <p class="text">
          Most people mow too short and trim around the edges instead of edging
          vertically straight up and down. This would prevent most of the weed
          problems we have to deal with. For example in the spring when the
          average temperature is around 70 degrees mow short about 2 inches
          usually the first mowing or two in the early Spring. As the average
          temperature increases to around 80 degrees raise the mower to at least
          2 1/2 inches high. As the temperature approaches 90 degrees the mower
          should be raised to at least 3 inches in length. During the hottest
          months of Summer especially June July and August when temperatures are
          in the upper nineties or even 100 degrees or above the mower should be
          raised to at least 3 1/2 inches. In the fall the mower can be lowered
          a notch at a time as temperatures fall, back down to 2 inches for the
          final mowing in mid November.
        </p>
      </div>
      <div class="qAndA">
        <div>
        <img class="faqButton" src={Q} />
        </div>
        <p class="text">
          Why are we having so many problems with lawn diseases such as Necrotic
          Ring Spot and melting out (bleached out looking dead grass)?
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={A} /></div>
        <p class="text">
          Most disease problems can be corrected by using correct cultural
          practices such as proper watering and mowing. The rule of thumb for
          watering is "heavy but seldom". Mechanical aerating with clean
          equipment can also be effective in prevention of NRS. A balanced
          fertilizer with slow release nitrogen keeps the lawn healthy and more
          resistant to NRS and other diseases.
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={Q} /></div>
        <p class="text">
          What watering schedule have you found that works best here along the
          Wasatch Front?
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={A} /></div>
        <p class="text">
          Watering deep and infrequent is the key to a healthy disease free
          lawn. The lawn should be allowed to dry out as much as possible
          between waterings. This encourages roots to go deeper "chasing" after
          the water that remains deeper in the soil profile. By thus training
          the roots of the turf to "stretch" deeper they are literally toughened
          up to take the heat during the hot summer months. This training should
          begin in the Spring by delaying turning on the sprinklers as long as
          possible. When they are turned on water manually for as long as
          possible even into early June if possible. During April and May
          usually once a week if needed is sufficient. In June as the weather
          dries out completely, watering once every two or three days is
          sufficient. Avoid watering every day and in the evenings to keep the
          lawn surface dry for as long as possible. A good watering schedule
          that works well especially in sandy soils is a M W F or a 2 2 3 days
          apart for a weekly schedule. This allows a good opportunity or the
          lawn to dry out during the busy weekend keeping the roots "stretching"
          at least once a week.
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={Q} /></div>
        <p class="text">
          So how much should I water each time for a deep or heavy watering?
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={A} /></div>
        <p class="text">
          A lawn should be watered to a depth of at least 6 inches to be
          healthy. This usually takes about 1/2 inch of water to reach the
          proper depth. For the average fan type sprinklers this takes about 30
          minutes. If you have gear driven solid stream sprinklers add about 15
          more minutes to your watering time. To be exact use a straight sided
          can such as a tuna can to measure how long it takes to water 1/2 inch.
          Place the can about half the distance the sprinkler reaches. To avoid
          dry spots each area should have double coverage, that is, it takes two
          sprinklers to water any given area evenly.
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={Q} /></div>
        <p class="text">
          Are there any other ways I can save water during the arid hot days of
          Summer?
        </p>
      </div>
      <div class="qAndA">
        <div><img class="faqButton" src={A} /></div>
        <p class="text">
          For the last couple of years we've been using a water saving product
          called Hydretain. This product actually has the properties of holding
          water next to the roots of the turf. By using this product you can
          eliminate one of the watering days of your schedule. If you are on a 2
          2 3 schedule it can be changed to a once every 3 or 4 days for the
          weekly schedule. If you are watering every 3 days you can cut back to
          once every 5 or 6 days. Even if you have secondary water and the price
          is fixed, the lawn is healthier as a result and we don't run out of
          secondary water only to have it completely turned off with lawns
          burning up. The nice thing about Hydretain is it lasts for 90 days. If
          it is applied in the late Spring it works all through the driest part
          of Summer saving you the most water and money.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
