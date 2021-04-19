import React, { useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Button } from "./Button";
import AOS from "aos";

function Cards() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="cards">
      <h1>I build web apps and micro startups!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/logo-javascript.jpg"
              text="JavaScript development"
              label="ReactJS"
            />
            <CardItem
              src="images/analytics.jpg"
              text="Marketing and analytics"
              label="Jupyter Notebooks"
            />
            <CardItem
              src="images/logo-wpmetaverse.png"
              text="MVP development"
              label="WordPress"
            />
          </ul>
        </div>
        <h1 style={{ padding: 30 }}>WHAT I AM BUILDING NOW</h1>
        <Button buttonStyle="btn--primary">NOW</Button>
      </div>
    </div>
  );
}

export default Cards;
