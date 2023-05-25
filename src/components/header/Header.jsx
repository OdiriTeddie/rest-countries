import { FaMoon, FaRegMoon } from "react-icons/fa";
import "./header.scss";
import { useState } from "react";
import { useGlobalContext } from "../../utils/context";

const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <div className="header">
      <div className="container flex">
        <h1>Where in the world?</h1>

        <div className="header__mode" onClick={toggleDarkTheme}>
          {isDarkTheme ? <FaMoon /> : <FaRegMoon />}
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
