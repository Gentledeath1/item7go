import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reservations", path: "/reservations" },
  { label: "Order", path: "/order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-sm border-b border-brand-dark/10 py-3"
          : "bg-brand-cream py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-[24px] w-[84px] overflow-hidden rounded">
            <img
              src="/images/logo.jpg"
              alt="Item 7 Go"
              className="h-[100%] w-[100%] object-cover"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                  isActive
                    ? "text-brand-red"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Button — Desktop */}
        <a
          href="https://glovoapp.com"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-red text-white text-sm font-medium tracking-wide uppercase px-5 py-2.5 hover:bg-red-700 transition-colors duration-300 rounded-lg"
        >
          Order Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-brand-dark transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-dark transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-dark transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-brand-cream border-t border-brand-dark/10 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-brand-red"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://glovoapp.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-lg inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium tracking-wide uppercase px-5 py-3 hover:bg-red-700 transition-colors duration-300"
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
