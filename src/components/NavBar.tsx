import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen resizes to DESKTOP (lg breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Über uns", href: "#about" },
    { name: "Programme", href: "#academics" },
    { name: "Aufnahme", href: "#admissions" },
    { name: "Leben in der Schule", href: "#life" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`font-accent fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 z-50">
          <img
            className="h-12 w-auto object-contain"
            src="src/assets/mm-logo.png"
            alt="Marburger Moschee Logo"
          />
        </a>

        {/* Desktop Menu - visible only on LG screens and up */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* BUTTON REMOVED FROM HERE */}
        </div>

        {/* Mobile/Tablet Burger Button - visible on screens smaller than LG */}
        <button
          className="lg:hidden text-3xl text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoClose /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-primary/95 border-t border-white/10 backdrop-blur-md overflow-hidden shadow-2xl"
          >
            <ul className=" flex flex-col items-center py-8 space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {/* BUTTON REMOVED FROM HERE TOO */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
