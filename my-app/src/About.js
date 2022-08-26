import { Link } from "react-router-dom";
import React from "react";

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
      <Link to="Home">Click to view our about page</Link>
      <Link to="Contact">Click to view our contact page</Link>
    </div>
  );
}

export default About;
