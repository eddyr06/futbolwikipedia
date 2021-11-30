import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4 style={{ textAlign: "center" }}>Soccer Leagues WikiPedia</h4>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
