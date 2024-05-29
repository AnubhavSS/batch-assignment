"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mode, setmode] = useState(false);
  const [open, setopen] = useState(false);
  return (
    <div className=" flex items-center justify-between relative">
      {/* Dark/Light Mode  */}
      <button
        type="button"
        className={`${
          mode ? "bg-white text-black" : "bg-black text-white"
        } font-medium rounded-lg text-sm px-5 py-2.5 mt-5 ml-5 hover:bg-gray-300`}
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
          setmode(!mode);
        }}
      >
        {mode ? "Light" : "Dark"}
      </button>

      {/* Medium screen Nav */}
      <div className="hidden md:flex flex-row item-center justify-end mt-5 mr-3">
        <p className="md:text-[20px] text-base font-medium cursor-pointer mx-3 text-red-500">
          Blog
        </p>

        <p className="md:text-[20px] text-base  font-medium cursor-pointer mx-3">
          Works
        </p>

        <p className="md:text-[20px] text-base  font-medium cursor-pointer mx-3">
          Contact
        </p>
      </div>

      <button
        className="mt-5 mr-5 cursor-pointer md:hidden"
        onClick={() => setopen(!open)}
      >
        {/* Hamburger */}
        {!open ? (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            fill="#000000"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <polygon
              points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
            />
          </svg>
        )}
      </button>

{/* Mobile Nav */}
    { open && <div className="w-[60%]  border-gray-400 border-2 absolute top-14 right-8">
        <p className="md:text-[20px] text-base font-medium cursor-pointer m-3 text-red-500">
          Blog
        </p>

        <p className="md:text-[20px] text-base  font-medium cursor-pointer m-3">
          Works
        </p>

        <p className="md:text-[20px] text-base  font-medium cursor-pointer m-3">
          Contact
        </p>
      </div>}
    </div>
  );
};

export default Header;
