import React from "react";
import Header from "../Components/header";
import PriceList from "../Images/Services/PriceList.png";
import coreAeration from "../Images/Services/SubtitleCoreAeration.png";
import fall from "../Images/Services/SubtitleFall.png";
import lateSpring from "../Images/Services/SubtitleLateSpring.png";
import Spring from "../Images/Services/SubtitleSpring.png";
import Summer from "../Images/Services/SubtitleSummer.png";
import TreesAndOrnamentals from "../Images/Services/SubtitleTrees&Ornamentals.png";

function Services() {
  const background = require("../Images/Services/backgroundImage.jpg");
  return (
    <div style={{ backgroundImage: "url(" + background + ")" }}>
      <h1 class="serviceHeader">Services</h1>
      <div class="bulletList">
        <div class="columnOne">
          <img class="bulletImg" src={Spring} alt="" />
          <h4 class="timeFrame">March - April</h4>
          <p>* Lawn Aeration</p>
          <p>
            * SPRING SPRAY - Pre-emergent weed control for crabgrass, spurge and
            other weeds, plus broadleaf weed control. Heavy liquid fertilizer,
            includes iron.
          </p>
          <p>
            * Spider barrier for foundation and cracks in sidewalks and
            driveways.
          </p>
          <img class="bulletImg" src={lateSpring} alt="" />
          <h4 class="timeFrame">May - June</h4>
          <p>LATE SPRING SPRAY - Insect control for bill</p>
          <p>
            * bugs, cutworms, and grubs. Broad-leaf weed control for dandelion,
            morning glory, plus regular liquid fertilizer. Nitrogen stabilizer
            also added.
          </p>

          <p>
            * Root feeding for trees, shrubs, and systemic insect control.
            Foliar treatment also included if needed.
          </p>

          <p>
            * Weed control for fields, vacant lots etc. Can be done in spring or
            fall.
          </p>

          <p>* Foundation spider barrier.</p>

          <p>
            * Lawn renovation to improved diseased, damaged or old worn out
            lawns. Works best in late summer.
          </p>

          <p>
            * Hydretain water management to reduce water requirements up to 50%.
            Lasts 90 days.
          </p>
          <img class="bulletImg" src={TreesAndOrnamentals} alt="" />
          <p>
            Yard root feeding is a soil injection in the spring which includes
            water soluble balanced fertilizer plus systemic insect control.
            Also, foliar treatments for insect and trunk applications can be
            applied. Free estimates are available
          </p>
        </div>
        <div class="columnTwo">
          <img class="bulletImg" src={TreesAndOrnamentals} alt="" />
          <h4 class="timeFrame">July - September</h4>
          <p>
            * SUMMER APPLICATION - Dry fertilizer plus spot weed control. Insect
            prevention for cranberry girdler for localized program areas.
          </p>
          <p>
            * LATE SUMMER SPRAY - Dry or liquid fertilizer plus spot weed
            control and insect control if needed for cranberry girdler.
            (Subterranean sod webworm)
          </p>
          <p>* Disease management. (Proper watering)</p>
          <p>
            * Roundup® non-selective vegetation control along fences, edges, and
            gardens.
          </p>
          <p>* Foundation spider barrier</p>
          <p>
            * Lawn renovation to improve diseased or damaged old lawns. Works
            best in late summer.
          </p>
          <img class="bulletImg" src={fall} alt="" />
          <h4 class="timeFrame">October - November</h4>
          <p>* FALL SPRAY - heavy fertilizer plus broadleaf weed control.</p>

          <p>* Roundup® weed control.</p>

          <p>* Foundation spider barrier.</p>

          <p>* Lawn aeration for root development over winter</p>

          <p>* Weed control for fields, vacant lots etc.</p>
          <img class="bulletImg" src={coreAeration} alt="" />
          <p>
            Aeration relieves compaction gets oxygen to the grass roots and
            helps with drainage. It penetrates the thatch layer and helps
            fertilizers and insecticides get to the roots quicker. Do not power
            rake unless overseeding a lawn.
          </p>
        </div>
      </div>
      <div class="priceList">
        <img class="priceListImage" src={PriceList} alt="" />
      </div>
    </div>
  );
}

export default Services;
