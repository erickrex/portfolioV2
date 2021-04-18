import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hello<strong>I am Eric</strong>
        </h1>
        <h2 className="section__subtitle section__subtitle--intro">
          front-end dev
        </h2>
        <img src="/images/rick.png" className="intro__img" alt="Mister Eric" />
      </div>
    </>
  );
}

export default HeroSection;
