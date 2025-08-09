// import colors from "../styles/Colors"
import '../index.css'
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#223A5E] w-full p-4 text-[#F5F5F5] shadow-[rgba(0,0,0,0.35)_0px_5px_15px,_rgba(34,58,94,0.5)_5px_10px_15px] rounded-xl font-['Satoshi']">
      
      {/* Logo and Mobile Menu Button Container */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-3xl font-extrabold text-[#F4C430]">
          My Shop
        </h1>
        {/* Hamburger/Close Button for mobile */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden outline-none border-none p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F5F5F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F5F5F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links (Collapsible on mobile) */}
      <div 
        className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row flex-grow md:flex items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-12 lg:space-x-16 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg">Accueil</a>
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg">Nos produits</a>
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg">Nos services</a>
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg md:hidden">S'inscrire</a>
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg md:hidden">Se connecter</a>
      </div>

      {/* User and Cart Buttons (Always Visible) */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg">S'inscrire</a>
        <a href="#" className="hover:text-[#FF6F61] transition-colors duration-200 text-lg">Se connecter</a>
        <button className="outline-none border-none w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-[#A9A9A9] transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#F4C430]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="0" fill="currentColor" stroke="currentColor" className="text-xl">
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
          </svg>
        </button>

        <button className="outline-none border-none w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-[#A9A9A9] transition-all ease-in-out duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#F4C430]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="text-xl">
            <circle r="1" cy="21" cx="9"></circle>
            <circle r="1" cy="21" cx="20"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};
