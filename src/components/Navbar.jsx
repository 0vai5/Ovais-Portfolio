import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className={
          "flex items-center justify-center "
        }
      >
        <img className="h-28 w-28" src="/logo.png" alt="logo" />
      </NavLink>
        
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to={'/contact'} className={({ isActive })=> isActive ? 'text-[#00B3FF] -translate-y-2' : 'text-[#FFFFff] hover:-translate-y-2 hover:text-[#00b3ff]  transition-all ease-in '}>
           Contact
        </NavLink>
        <NavLink to={'/about'} className={({ isActive })=> isActive ? 'text-[#00B3FF] -translate-y-2' : 'text-[#FFFFff] hover:-translate-y-2 hover:text-[#00b3ff]  transition-all ease-in '}>
              About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;