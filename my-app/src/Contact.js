import { Link } from "react-router-dom";
import React from "react";

function Contact() {
  return (
    <div>
      <h1>This is the contact page</h1>
      <Link to="About">Click to view our about page</Link>
      <Link to="Home">Click to view our contact page</Link>
    </div>
  );
}

export default Contact;
