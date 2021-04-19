import React from "react";
import "./CardLeft.css";
import CardLeft from "./CardLeft";

function Projects() {
  return (
    <div className="cards">
      <h1 style={{ padding: 30 }}>
        Some of the projects I have built recently
      </h1>
      <br />
      <br />
      <br />
      <div>
        <div>
          <ul>
            <CardLeft
              data-aos="fade-up"
              src="images/wrestling-predictions.JPG"
              text="Vue JS 3 and XState library"
              description='(IN PROGRESS 04.2021)Fantasy sports app similar to "ESPN Pick em" where a user logs in and selects who he thinks the winner of a UFC fight will be. Wrestlingpredictions.com does the same but for wrestling matches. The front end is managed by a State Machine based multi step questionnaire which can be quickly changed using a JSON object when a different PPV happens. Authentication and the backend is built with Firebase. The project was succesfully tested and had 25+ happy users.'
              label="Firebase, State Machine"
              url="https://wrestlingpredictions.com"
              target="_blank"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/logo-wpmetaverse.png"
              text="WP Metaverse"
              description="(IN PROGRESS 04.2021) Scraping of over 10k tech profiles of WordPress-made websites and organizing the data in a searchable database. Built with WordPress."
              label="Web scraping"
              url="https://wpmetaverse.com"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/empire.png"
              text="EMPIRE.de web development"
              description="Developed the website for the flagship product of the company. Empire XPU is CAD and simulation software for antenna design. I also worked on benchmarks using Python and VR software functional testing during my time at IMST."
              label="WordPress"
              url="https://empire.de/"
              target="_blank"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/meganoche.png"
              text="ATTENTION NSFW - adult nightlife venues directory"
              description="Well, I am not not proud of this one :). I apologize for its current state, I have not maintained it properly as it is not generating any revenue anymore. It is an adult nightlife venues directory which runs on WordPress, the Open Street Maps API and JavaScript. It had 15k visitors a month at its peak and is still the biggest site of its kind in the country. I could explain personally better."
              label="WordPress"
              url="https://meganoche.com/"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/centraldeingles.png"
              text="Centraldeingles.com"
              description="Affiliate review site for language learning apps that I am using myself to learn German. Developed in WordPress, HTML and CSS"
              label="WordPress"
              url="https://centraldeingles.com/"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/filters.png"
              text="Instagram filters made in SPARK AR Studio"
              description="Created 2 instagram filters for American wrestlers using JavaScript, the face tracker and eye tracker features from Spark AR.The filters have 8K impressions so far (04.2021)."
              label="2D Design"
              url="https://www.facebook.com/sparkarhub/portfolios/453897605624260"
            />
            <CardLeft
              data-aos="fade-up"
              src="images/jupyter.png"
              text="LinkedIn scraper and visualization project."
              description="University project where 2 colleagues and me used Python and the WSL2 environment to run an automate a web scraper, the data was processed in Jupyter notebooks to visualize the results."
              label="Selenium"
              url="https://github.com/erickrex/LinkedIn-scraper/blob/main/03_Alumni.ipynb"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
