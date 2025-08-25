import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/GRYZOR.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("ABOUT"); // default

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "PROFILES", id: "profiles" },
    { label: "OUR GAMES", id: "games" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="GRYZOR" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className={`nav-link ${
                activeMenu === item.label ? "active" : ""
              }`}
              onClick={() => setActiveMenu(item.label)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
