import './Navi.css';
import React, { useState } from "react";
import Button from "../components/ui/Button";

const Navi: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Profile", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#featureSection", highlight: true },
  ];

  return (
    <header>
      {/* DESKTOP NAVIGATION */}
      <nav id="desktop-nav">
        <div className="logo">Daniel Walker</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE NAVIGATION */}
      <nav id="hamburger-nav">
        <div className="logo">Daniel Walker</div>
        <div
          className={`hamburger-icon ${isOpen ? "open" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("Toggled menu");
          }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                <Button
                  variant="link"
                  size="md"
                  className={`${
                    link.highlight ? "text-[#0D9488]" : "text-[#64748B]"
                  } hover:underline hover:text-[#0D9488] text-left w-full`}
                >
                  {link.label}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navi;
