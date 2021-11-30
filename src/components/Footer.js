import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Designed by Eddy Ruiz</p>
        <a
          className="fab fa-github-square icons"
          href="https://github.com/eddyr06"
        ></a>
        <a
          className="fab fa-linkedin icons"
          href="https://www.linkedin.com/in/eddyruiz06/"
        ></a>
      </div>
      <div>
        <p>
          API provided by
          <a href="https://github.com/azharimm/football-standings-api">
            <br />
            azharimm/football-standings-api
          </a>
        </p>
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
