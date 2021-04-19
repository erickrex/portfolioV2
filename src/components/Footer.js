import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <a href="mailto:erickrhein@gmail.com" className="footer__link">
          mailto:erickrhein@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/don-eric-rea/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/erickrex">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
