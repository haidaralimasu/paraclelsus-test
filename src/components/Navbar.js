import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#bd8d4c" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            ></Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/salp"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SALP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/undp"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  UNDP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sylp"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SYLP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/drup"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  DRUP
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link"></Link>
                ) : (
                  <Link to="/sign-up" className="btn-link"></Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
