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
        <NavLink to={'/contact'} className={({ isActive })=> isActive ? 'text-slate-200' : 'text-black'}>
           Contact
        </NavLink>
        <NavLink to={'/about'} className={({ isActive })=> isActive ? 'text-slate-200' : 'text-black'}>
              About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;