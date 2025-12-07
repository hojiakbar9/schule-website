import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-20 w-full bg-transparent  pt-4 flex items-center justify-between">
      {/* Logo */}
      <img
        className="w-[120px] ml-7 lg:ml-12 object-contain"
        src="src/assets/mm-logo.png"
        alt="logo"
      />

      {/* Burger */}
      <div className="relative md:hidden">
        <button
          className="p-2 text-3xl mr-4 text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <CiMenuBurger />}
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="  font-sans absolute text-xl capitalize right-0 mt-4 w-screen bg-transparent backdrop-blur-md rounded-lg p-4 shadow-lg">
            <ul className="space-y-4 text-white mb-4 p-4">
              <li className="cursor-pointer hover:text-secondary">Über uns</li>
              <li className="cursor-pointer hover:text-secondary">Akademik</li>
              <li className="cursor-pointer hover:text-secondary">
                Admissions
              </li>
              <li className="cursor-pointer hover:text-secondary">
                Leben in der Schule
              </li>
              <li className="cursor-pointer hover:text-secondary">Kontakt</li>
            </ul>
            <button className="bg-secondary text-white w-full mt-4 rounded p-2 font-semibold hover:bg-secondary/80">
              Registrieren
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
