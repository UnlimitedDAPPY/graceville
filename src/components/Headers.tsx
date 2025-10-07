import React, { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import GVLogo from "../assets/gv-logo.png";

export const Headers: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Navigation links (avoids repetition)
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Ministries", href: "#ministries" },
    { name: "Events", href: "#events" },
    { name: "Services", href: "#services" },
     { name: "Pastor", href: "#pastors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
    <section className="fixed top-0 left-0 right-0 z-50">
      {/* 🔹 Top Info Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center text-sm gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Sunday Service: 9:00 AM & 11:30 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+2348035457934</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>
             3/4 Aluform Avenue, General B/Stop Lasu-Isheri Expressway,
              Igando, Lagos. 
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <header className="bg-white shadow-lg  font-header">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
             <a  href="#home">
               <img
                src={GVLogo}
                alt="RCCG Graceville Logo"
                className="w-32 md:w-40"
              />
             </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-900 font-medium transition-colors hover:underline-blue-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@gracevillerccg693"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-900 text-purple-900 px-4 py-1.5 rounded-md hover:bg-red-600 hover:text-white transition-colors font-medium text-sm"
              >
                Watch Live
              </a>

              {/* <a
                href="#about"
                className="bg-gray-900 hover:bg-gray-500 text-white py-2 px-6 rounded-lg transition-colors font-medium text-sm"
              >
                Read More
              </a> */}

              <a
                href="https://your-giving-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold shadow-md"
              >
                Give Online
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 🔹 Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="https://www.youtube.com/@gracevillerccg693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-600 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium text-sm text-center"
                  >
                    Watch Live
                  </a>
                  <a
                    href="https://your-giving-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium text-center"
                  >
                    Give Online
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      </section>
    </>
  );
};
