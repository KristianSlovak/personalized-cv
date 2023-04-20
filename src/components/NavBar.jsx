import React from "react";

function NavBar({ scrollToAboutRef, scrollToHelloRef, scrollToFooterRef }) {
  return (
    <div
      className="fixed flex flex-row w-screen bg-white font-extralight text-xs px-1 md:px-2 h-12 md:h-16 
      items-center md:text-base z-50"
    >
      <p className="w-1/3 p-1">Kristián Slovák</p>
      <ul className="flex flex-row justify-end w-2/3 gap-1 items-center">
        <li
          onClick={scrollToHelloRef}
          className="hover:border-0 rounded p-1 hover:bg-zinc-100 cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={scrollToAboutRef}
          className="hover:border-0 rounded p-1 hover:bg-zinc-100 cursor-pointer"
        >
          About Me
        </li>
        <li
          onClick={scrollToFooterRef}
          className="hover:border-0 rounded p-1 pr-2 md:pr-5 hover:bg-zinc-100 cursor-pointer"
        >
          Links & Contact
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
