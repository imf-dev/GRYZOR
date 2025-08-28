import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/GRYZOR.svg";

// Add profiles data here or import from a separate file
const profilesData = [
  { id: 1, realName: "Jennifer Leigh Chio", ign: "swzvzn" },
  { id: 2, realName: "Irah Mae Faner", ign: "yorchigt" },
  { id: 3, realName: "Cyrene Isabelle Wenceslao", ign: "Izabel" },
  { id: 4, realName: "Aveja Cedrick Ipong", ign: "bas_dash" },
  { id: 5, realName: "Nicolo Ariola", ign: "Xylo" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("ABOUT");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "PROFILES", id: "profiles" },
    { label: "OUR GAMES", id: "games" },
  ];

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight PROFILES if on a profile page
  useEffect(() => {
    if (location.pathname.includes("/profile")) setActiveMenu("PROFILES");
  }, [location.pathname]);

  // Highlight menu based on scroll position on MainScreen
  useEffect(() => {
    if (!location.pathname.includes("/profile")) {
      const handleSectionScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (const item of menuItems) {
          const section = document.getElementById(item.id);
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              setActiveMenu(item.label);
              break;
            }
          }
        }
      };
      window.addEventListener("scroll", handleSectionScroll);
      return () => window.removeEventListener("scroll", handleSectionScroll);
    }
  }, [location.pathname]);

  const handleClick = (item) => {
    setActiveMenu(item.label);
    if (location.pathname.includes("/profile")) {
      navigate("/GRYZOR");
      setTimeout(() => {
        const section = document.getElementById(item.id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(item.id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Search logic
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setSearchResults([]);
      return;
    }

    const results = profilesData.filter(
      (p) =>
        p.realName.toLowerCase().includes(term) ||
        p.ign.toLowerCase().includes(term)
    );

    setSearchResults(results);
  };

  // Mga profile IDs to route paths
  const profileRoutes = {
    1: "chio",
    2: "faner",
    3: "wenceslao",
    4: "ipong",
    5: "demo", // temporary for Nicolo
  };

  const handleSelectProfile = (id) => {
    const route = profileRoutes[id] || "demo"; // fallback to demo if not found
    navigate(`/GRYZOR/profile/${route}`);
    setSearchTerm("");
    setSearchResults([]);
  };

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
              onClick={() => handleClick(item)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Show search bar only on profile pages */}
        {location.pathname.includes("/profile") && (
          <div className="header-search">
            <input
              type="text"
              placeholder="Search player..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchResults.length > 0 && (
              <div className="search-suggestions">
                {searchResults.map((profile) => (
                  <div
                    key={profile.id}
                    className="search-suggestion"
                    onClick={() => handleSelectProfile(profile.id)}
                  >
                    {profile.realName} (@{profile.ign})
                  </div>
                ))}
              </div>
            )}
            {searchTerm && searchResults.length === 0 && (
              <div className="search-suggestions no-results">No results</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
