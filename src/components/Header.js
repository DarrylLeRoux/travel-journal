import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <i>
        <FaGlobeAmericas />
      </i>
      <p>my travel journal.</p>
    </header>
  );
};

export default Header;
