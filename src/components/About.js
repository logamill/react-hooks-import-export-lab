import React from "react";
import Obj from "../data/user";

function About(Obj) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={Obj.image} alt="I made this" />
    </div>
  );
}

export default About