import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import React from 'react'

function Contact() {
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
                <Link to="/Shop">h</Link>
              </li>
              <li>
                <Link to="/Gallary">GALLARY</Link>
              </li>
              <li>
                <Link to="/Blogs">BLOG</Link>
              </li>
              <li>
                <Link to="/Pages">PAGES</Link>
              </li>
              <li>
                <a href="#">ELEMENTS</a>
              </li>
              <li>
                <Link to="../Contact">CONTACT US</Link>
              </li>
            </ul>
            <a href="#">
              <div className="sub_header_btn">Search</div>
            </a>
          </nav>
        </div>
      </div>
      {/* End main header */}
      {/* start slider */}
      <div className="container-fluid">
        <div className="row">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/s22.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/s33.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/s11.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* end slider */}
      {/* Start offers */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 spacerTop  text-center">
            <div className="h1_offers">
              <h1>WHAT WE OFFER</h1>
            </div>
          </div>
          <div class="card-group">
            <div class="card p-4">
              <img
                class="card-img-top"
                src={require("../img/p1.jpg")}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title text-center">Party Cupcakes</h5>
                <p class="card-text text-center">
                  We provide a variety of cupcakes for any party made with
                  high-quality natural ingredients and no preservatives.
                </p>

                <a href="#">
                  <div className="sub_header_offers text-center">SEARCH</div>
                </a>
              </div>
            </div>
            <div class="card p-4">
              <img
                class="card-img-top"
                src={require("../img/p2.jpg")}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title text-center">Choco cakes</h5>
                <p class="card-text text-center">
                  Nothing tastes better than a chocolate cake with a variety of
                  flavors, which is always available at our bakery.
                </p>
                <a href="#">
                  <div className="sub_header_offers text-center">SEARCH</div>
                </a>
              </div>
            </div>
            <div class="card p-4">
              <img
                class="card-img-top"
                src={require("../img/p3.jpg")}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title text-center">Wedding cakes</h5>
                <p class="card-text text-center">
                  Want to make your wedding unforgettable? Then you need to
                  order a unique wedding cake at Sweet Bakery!
                </p>
                <p class="card-text">
                  <a href="#">
                    <div className="sub_header_offers text-center">SEARCH</div>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End offers */}
      {/* start new product */}
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-xl-12 spacerTop text-center">
            <div className="h1_offers">
              <h1>NEW PRODUCTS</h1>
            </div>
            <div className="main_product d-flex ">
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o1.png")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE COOKIES</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>

              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o2.png")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">DARK CHOCOLATE CAKE</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$25.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o3.png")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE PUDDING</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o4.png")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE TRUFFLES</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
            </div>

            <div className="main_product d-flex p-4">
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o5.jpg")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE COOKIES</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>

              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o7.jpg")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">DARK CHOCOLATE CAKE</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$25.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/o6.png")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE PUDDING</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
              <article class="product border">
                <div class="product-body">
                  <div class="product-figure">
                    <img
                      src={require("../img/08.jpg")}
                      alt=""
                      width="215"
                      height="112"
                    ></img>
                  </div>
                  <h5 class="product-title">
                    <a href="single-product.html">CHOCOLATE TRUFFLES</a>
                  </h5>
                  <div class="product-price-wrap">
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
                <div class="product-button-wrap">
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-search74"
                      href="single-product.html"
                    ></a>
                  </div>
                  <div class="product-button">
                    <a
                      class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                      href="cart-page.html"
                    ></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* end new product */}
      {/* start parallex */}
      <div className="container-fluid spacerTop">
        <div className="row">
          <div className="col-xl-12">
            <div className="main_parallax">
              <div className="img_parallax">
                <img
                  src={require("../img/px1.jpg")}
                  height="450"
                  width="1250"
                ></img>
              </div>
              <div className="parallax_content">
                <h1>SUMMER SALE</h1>
                <div className="offer">
                  <span>
                    <h3 className="color_pink">-20% ON ALL CAKES </h3>
                  </span>
                </div>
                <p>
                  Purchase our tasty cakes and sweets for your next event or
                  family dinner<br></br> at our online shop and save more money
                  than anywhere.
                </p>
                <div className="sub_header_shop">
                  <a href="#">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end parallex */}
      {/* start about us */}
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-xl-12">
            <div className="about_text spacerTop text-center">
              <h1>ABOUT US</h1>
            </div>
            <div className="main_aboutus">
              <div className="img_about">
                <img src={require("../img/about.jpg")} alt="" />
              </div>
              <div className="about_con text-center">
                <p>PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS</p>
                <hr />
                <p className="about_text2">
                  Our mission is to create a bakery that makes the best quality
                  baked goods on site from scratch, and where both employees and
                  customers would feel comfortable.
                </p>
                <p className="read_more text-center">
                  <div className="sub_header_shop2">
                    <a href="#">SHOP NOW</a>
                  </div>
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about us */}
      {/* start our team */}
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-xl-12 spacerTop">
            <div className="about_text text-center">
              <h1>OUR TEAM</h1>
            </div>
            <div className="main_team">
              <div className="sub_team p-3">
                <img
                  src={require("../img/t1.jpg")}
                  alt=""
                  className="img_team"
                />
                <h2 className="text-center p-3">RICHARD SMITH</h2>
                <p className="text-center">
                  Richard has a true passion for baking and that’s why he has
                  <br></br> been our founder and head baker since day one aker since day one..
                </p>
                <div className="icon_team">
                  <i class="fa-brands fa-facebook-f p-2"></i>
                  <i class="fa-brands fa-twitter  p-2"></i>
                  <i class="fa-brands fa-instagram  p-2"></i>
                  <i class="fa-brands fa-google-plus-g  p-2"></i>
                </div>
              </div>
              <div className="sub_team p-3">
                <img
                  src={require("../img/t2.jpg")}
                  alt=""
                  className="img_team"
                />
                <h2 className="text-center p-3">SUSAN ANDERSON</h2>
                <p className="text-center"> 
                  Susan spends most of her time baking and cake decorating as
                  well <br></br>as heading up the bakery's marketing aker since day one.
                  initiatives.
                </p>
                <div className="icon_team">
                  <i class="fa-brands fa-facebook-f p-2"></i>
                  <i class="fa-brands fa-twitter p-2"></i>
                  <i class="fa-brands fa-instagram p-2"></i>
                  <i class="fa-brands fa-google-plus-g p-2"></i>
                </div>
              </div>
              <div className="sub_team p-3">
                <img
                  src={require("../img/t3.jpg")}
                  alt=""
                  className="img_team"
                />
                <h2 className="text-center p-3">STEVE RUFFALO</h2>
                <p className="text-center">
                  Steve is our lead cake designer. for various occasions
                  <br></br>including weddings, parties, showers
                  and more.
                </p>
                <div className="icon_team">
                  <i class="fa-brands fa-facebook-f p-2"></i>
                  <i class="fa-brands fa-twitter p-2"></i>
                  <i class="fa-brands fa-instagram p-2"></i>
                  <i class="fa-brands fa-google-plus-g p-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End our team */}
    </>
  )
}

export default Contact