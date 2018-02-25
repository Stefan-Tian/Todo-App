import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__container">
        <Link className="header__title" to="/todos">
          <h1>Donezo</h1>
        </Link>
        <a className="btn--link" href="/api/logout">
          Sign out
        </a>
      </div>
    </div>
  </header>
);

export default Header;
