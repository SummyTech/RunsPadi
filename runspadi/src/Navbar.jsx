import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "service", label: "Service" },
    { id: "about", label: "About" },
    { id: "howitworks", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" }
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl text-[#E8505B] font-bold satisfy-regular"
        >
          RunsPadi
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors px-3 py-2 rounded-md font-semibold ${
                  activeSection === item.id
                    ? "text-[#E8505B] bg-[#f7e7e8]"
                    : "text-[#1F2937]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Get Started Button (desktop only) */}
        <div className="hidden lg:block">
          {/* <Link
            to="/dashboardApp"
            className="bg-blue-600 text-white px-7 py-2 rounded"
          >
            Get Started
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md h-screen">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors px-3 py-2 rounded-sm font-semibold ${
                    activeSection === item.id
                      ? "text-[#007BFF] bg-[#DBE7F6]"
                      : "text-[#1F2937]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              {/* <Link
                to="/dashboardApp"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#2563EB] text-white px-7 py-2 rounded-lg"
              >
                Get Started
              </Link> */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
