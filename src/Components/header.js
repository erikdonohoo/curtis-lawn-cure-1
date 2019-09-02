// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Logo from "../Images/Home/curtis-lawn-care.png";
// import Instagram from "../Images/Home/instagram.jpeg";
// import Facebook from "../Images/Home/facebook.png";
// import Twitter from "../Images/Home/twitter.png";
// import Home from "../Pages/home";
// import About from "../Pages/about";
// import Blog from "../Pages/blog";
// import Contact from "../Pages/contact";
// import FAQ from "../Pages/faq";
// import Services from "../Pages/services";
// import App from "../App";

// function Header() {
//   const bg = require("../Images/Home/HeaderBackground.png");

//   return (
//     <Router>
//     <div>
//       <header
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           backgroundImage: "url(" + bg + ")",
//           margin: 0,
//           padding: 0
//         }}
//       >
//         <img style={{ padding: "20px" }} src={Logo}></img>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             padding: "20px",
//             width: "75%",
//             textAlign: "right",
//             margin: 0
//           }}
//         >
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div>801-254-0405</div>
//             <div>
//               <img
//                 style={{ width: "25px", borderRadius: 15 }}
//                 src={Instagram}
//               ></img>
//               <img
//                 style={{ width: "25px", borderRadius: 15 }}
//                 src={Facebook}
//               ></img>
//               <img
//                 style={{ width: "25px", borderRadius: 15 }}
//                 src={Twitter}
//               ></img>
//             </div>
//           </div>

//           <div>
//             {/* this is a nave bar comment */}
//              <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>
//           </div>
              
//         </div>
//       </header>
//     </div>
//     </Router>
//   );
// }

// export default Header;




// {/* <div>
// <nav>
//     <ul
//       style={{
//         listStyleType: "none",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center"
//       }}
//     >
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/"
//         >
//           HOME
//         </Link>
//       </li>
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/services"
//         >
//           SERVICES
//         </Link>
//       </li>
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/about"
//         >
//           ABOUT US
//         </Link>
//       </li>
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/faq"
//         >
//           FAQ
//         </Link>
//       </li>
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/blog"
//         >
//           BLOG
//         </Link>
//       </li>
//       <li style={{ padding: "5px" }}>
//         <Link
//           style={{ textDecoration: "none", color: "black" }}
//           to="/contact"
//         >
//           CONTACT US
//         </Link>
//       </li>
//     </ul>
//   </nav>
  
 
//     </div> */}
