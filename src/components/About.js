import React from "react";
import aboutimage from "../images/about.png";

const About = (props) => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h2>Come With All You Need For Daily Life</h2>
        <p>
          Paragraphs can contain many different kinds of information. A
          paragraph could contain a series of brief examples or a single long
          illustration of a general point. It might describe a place, character,
          or process; narrate a series of events; compare or contrast two or
          more things; classify items into categories; or describe causes and
          effects. Regardless of the kind of information they contain, all
          paragraphs share certain characteristics. One of the most important of
          these is a topic sentence.
        </p>
        <button>Get The App</button>
      </div>
    </div>
  );
};

export default About;
