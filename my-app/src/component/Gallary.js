import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Gallary() {
  return (
    <>
      {/* Start sub header */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
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
              <div className="col-xl-3">
                <div className="sub_header">
                  <img src={require("../img/logo.png")} />
                </div>
              </div>
              <div className="col-xl-3">
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
      <div className="container-fluid">
        <div className="row">
          <nav className=" header_main bg-light">
            <ul class="main_menu">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Gallary">GALLARY</Link>
              </li>
              <li>
                <Link to="/Shop">SHOP</Link>
              </li>
              <li>
                <Link to="/Blogs">BLOG</Link>
              </li>
              <li>
                <Link to="/Pages">PAGES</Link>
              </li>
              <li>
                <Link to="/Elements">ElEMENTS</Link>
              </li>

              <li>
                <Link to="/Contact">CONTACT US</Link>
              </li>
            </ul>
            <a href="#">
              <div className="sub_header_btn">Search</div>
            </a>
          </nav>
        </div>
      </div>
      {/* End main header */}
      {/* start grid blog */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="main_grid">
              <img
                src={require("../img/blog.jpg")}
                alt=""
                width="1250"
                height="350"
              />
            </div>
            <div className="grid_text">
              <p>GRID BLOG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row spacerTop">
          <div className="col-xl-12 p-5">
            <CardGroup>
              <Card className="p-3">
                <Card.Img
                  variant="top"
                  src={require("../img/g1.jpg")}
                  height="300"
                />
                <Card.Body>
                  <Card.Title>How to Pipe a Fluffy Frosting Border on a Cake</Card.Title>
                  <Card.Text className="text-muted">
                  Est velox nuptia, cesaris. Est dexter turpis, cesaris. Cum nixus persuadere, omnes fluctuies promissio flavum.
                  </Card.Text>
                </Card.Body>
             <hr />
                  <small className=" text-center">August 9, 2020</small>
                
              </Card>
              <Card  className="p-3">
                <Card.Img
                  variant="top"
                  src={require("../img/o7.jpg")}
                  height="300"
                />
                <Card.Body>
                  <Card.Title>Recipe of the Day: Pumpkin Spice Latte Cake</Card.Title>
                  <Card.Text className="text-muted">
                  Talis tus acceleratrix contactuss lixa est. Pol, a bene equiso. Cum nuptia peregrinatione, omnes adgiumes visum
                  </Card.Text>
                </Card.Body>
                <hr />
                  <small className=" text-center">August 9, 2020</small>
                
              </Card>
              <Card  className="p-3">
                <Card.Img
                  variant="top"
                  src={require("../img/g2.jpg")}
                  height="300"
                />
                <Card.Body>
                  <Card.Title>Top 5 Tips for Successful Cake Baking</Card.Title>
                  <Card.Text className="text-muted">
                  Sensorems peregrinatione in rugensis civitas! Ubi est bi-color byssus? Velox, teres ollas recte aperto de castus
                  </Card.Text>
                </Card.Body>
               <hr />
                  <small className="text-center">August 9, 2020</small>
                
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      {/* End blod  */}
    </>
  );
}

export default Gallary;
