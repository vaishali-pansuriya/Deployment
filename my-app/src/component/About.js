import React from "react";
import About from "../component/Home"
import { Routes, Route } from "react-router-dom"

// import { IconName } from "react-icons/fa";

function Home() {
  return (
    <>
    {/* Start sub header */}
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="main_header">
              <div className="sub_header">
                <div className="main_text">
                  <i class="fa-solid fa-location-dot icon"></i>
                  <div className="sub_text">
                    <p>523 Sylvan Ave</p>
                    <p>Mountain View,CA 94041 USA</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="sub_header">
                  <img src={require("../img/logo.png")} />
                </div>
              </div>
              <div className="col-xl-4">
                <div className="sub_header">
                  <div className="sub_header_button">
                    <a href="#">
                      <i class="fa-solid fa-envelope icon1"></i>GET IN TOUCH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* End sub heder */}
      {/* Start main header */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
      </Routes>
      {/* End main header */}
    </>
  );
}

export default Home;
