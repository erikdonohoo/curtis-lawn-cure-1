import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Logo from "./Images/Home/curtis-lawn-care.png";
import Instagram from "./Images/Home/instagram.jpeg";
import Facebook from "./Images/Home/facebook.png";
import Twitter from "./Images/Home/twitter.png";
import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import FAQ from "./Pages/faq";
import Services from "./Pages/services";

function App() {
  const bg = require("./Images/Home/HeaderBackground.png");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "auto;"
      }}
    >
      <div>
        <Router>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundImage: "url(" + bg + ")",
            }}
          >
            <img
              style={{
                width: "200px",
                height: "200px",
                padding: "20px", 
              }}
              src={Logo}
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h3 style={{textAlign:'end', paddingRight:'20px' }}>801-254-0405</h3>
              <div style={{textAlign:'end', paddingRight:'20px'  }}>
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
              <div style={{marginTop:'30px'}}>
                <nav
                  style={{ paddingRight: "75px" }}
                >
                  <ul style={{ display: "flex", flexDirection: "row" }}>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                    </h3>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/services"
                        >
                          Services
                        </Link>
                      </li>
                    </h3>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                    </h3>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/faq"
                        >
                          FAQ
                        </Link>
                      </li>
                    </h3>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                    </h3>
                    <h3>
                      <li style={{ padding: "0px 5px", listStyleType: "none" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </h3>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </div>
    </div>
  );
}
export default App;

{
  /* <div style={{border:'solid black 1px'}}>
      <div style={{border:'solid black 1px' , display:'flex', flexDirection:'row',}}>
        <div style={{border:'solid black 1px', display:'flex', flexDirection:'row', }}>
          <Router>
            <div style={{border:'solid black 1px', display:'flex', flexDirection:'column'}}>
              <img style={{ padding: "20px", width:'25%' }} src={Logo} alt="cat"></img>
              <div style={{textAlign:'right'}}>
                <div >
                  <div>801-254-0405</div>
                  <div>
                    <img
                      style={{ width: "25px", borderRadius: 15 }}
                      src={Instagram}
                    ></img>
                    <img
                      style={{ width: "25px", borderRadius: 15 }}
                      src={Facebook}
                    ></img>
                    <img
                      style={{ width: "25px", borderRadius: 15 }}
                      src={Twitter}
                    ></img>
                  </div>
                </div>
                <div>
                  <div>
                    <nav>
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center"
                        }}
                      >
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/"
                          >
                            HOME
                          </Link>
                        </li>
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/services"
                          >
                            SERVICES
                          </Link>
                        </li>
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/about"
                          >
                            ABOUT US
                          </Link>
                        </li>
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/faq"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/blog"
                          >
                            BLOG
                          </Link>
                        </li>
                        <li style={{ padding: "5px" }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/contact"
                          >
                            CONTACT US
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <div>
                      <Route path="/" exact component={Home} />
                      <Route path="/about" exact component={About} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </div> */
}
