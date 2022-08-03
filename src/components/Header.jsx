import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.getElementById("html").setAttribute("data-theme", "light");

      setDarkMode(false);
    } else {
      document.getElementById("html").setAttribute("data-theme", "dark");

      setDarkMode(true);
    }
  }, []);

  const handleChangeMode = () => {
    if (darkMode) {
      document.getElementById("html").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      document.querySelector('.header__mode-title').innerText='Dark Mode'
      setDarkMode(false);
    } else {
      document.getElementById("html").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      document.querySelector('.header__mode-title').innerText='Light Mode'
      setDarkMode(true);
    }
  };

  return (
    <header>
      <Link to="/">
        <div className="header__logo">Countries-app</div>
      </Link>
      <div className="header__mode">
        <h3 onClick={handleChangeMode} className="header__mode-title">
          Dark Mode
        </h3>
      </div>
    </header>
  );
}

export default Header;
