import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Über uns",
    "Akademik",
    "Admissions",
    "Leben in der Schule",
    "Kontakt",
  ];

  return (
    <div
      className={`fixed z-20 w-full pt-4 pb-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img
        className="w-[120px] ml-7 lg:ml-12 object-contain cursor-pointer"
        src="src/assets/mm-logo.png"
        alt="logo"
      />

      {/* Desktop Menu - Hidden on mobile */}
      <nav className="hidden md:flex items-center gap-8 mr-8 lg:mr-12">
        <ul className="flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-colors font-accent font-medium text-white hover:text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="rounded px-6 py-2 font-semibold transition-all bg-accent text-white hover:bg-secondary cursor-pointer">
          Registrieren
        </button>
      </nav>

      {/* Mobile Burger Menu */}
      <div className="relative md:hidden">
        <button
          className="p-2 text-3xl mr-4 cursor-pointer transition-colors text-white "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <CiMenuBurger />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="bg-primary/95 flex flex-col items-center text-center font-accent absolute text-xl capitalize right-0 mt-5 w-screen  backdrop-blur-md  p-4 shadow-lg">
            <ul className="space-y-4 text-white mb-4 p-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-secondary transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-accent cursor-pointer text-white w-full mt-4 rounded p-2 font-semibold hover:bg-secondary transition-colors">
              Registrieren
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
