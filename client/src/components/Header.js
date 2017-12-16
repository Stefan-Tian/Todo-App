import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div>
      <div>
        <Link to="/todos">
          <h1>Todo</h1>
        </Link>
        <a to="/api/logout">Sign Out</a>
      </div>
    </div>
  </header>
);

export default Header;
