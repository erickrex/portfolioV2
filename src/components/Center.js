import React from "react";
import "./Center.css";
function Center() {
  return (
    <>
      <div className="note">
        <i>
          *The API I am consuming has sadly reached the end of the free tier. I
          will find a solution to provide a similar functionality in the NOW
          section soon. Please email me{" "}
          <a href="mailto:erickrhein@gmail.com">mailto:erickrhein@gmail.com </a>
          if you have any questions. The up to date code for this web app is
          available in my{" "}
          <a href="https://github.com/erickrex/portfolioV2">GitHub</a> and is re
          deployed automatically with each commit.
        </i>
      </div>
      <div className="services">
        <div className="service">
          <h2>Web developer - tester - start-up founder</h2>
          <div className="descripcion">
            <p>
              I am a solutions oriented developer, based in NRW, Germany. I have
              5 years of experience in IT, always adapting to the organizations’
              needs.
            </p>
            <br />
            <p>
              I have worked with Python, C# and specially with WordPress and
              JavaScript. I am currently building projects in ReactJS, NextJS
              and VueJs. I am sociable, have a structured work approach and
              strong analytical skills.
            </p>
          </div>
        </div>

        <div className="service">
          <h3>Education</h3>
          <div className="descripcion">
            <ul>
              <li>
                Hochschule Rhein-Waal - Information Engineering and Computer
                Science M.Sc. (IN PROGRESS 04.2021 - one semester left) - Campus
                Kamp-Lintfort - NRW, Germany
              </li>
              <br />
              <li>
                Universidad de las Americas: IT Engineering B.Sc. - Campus Quito
                - Quito, Ecuador
              </li>
              <br />
              <li>Seneca Valley High School - Maryland, USA</li>
              <br />
              <li>English C2</li>
              <li>Spanish Native</li>
              <li>German A1</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Center;
