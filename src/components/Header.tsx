"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
const [mode, setmode] = useState(false)
  return (
    <div className=" flex items-center justify-between">
     
     {/* Dark/Light Mode  */}
      <button
        type="button"
        className={`${mode?"bg-white text-black":"bg-black text-white"} font-medium rounded-lg text-sm px-5 py-2.5 mt-5 ml-5 hover:bg-gray-300`}
        onClick={() =>{ (theme == "dark" ? setTheme("light") : setTheme("dark")); setmode(!mode)}}
      >
       {mode?"Light":"Dark"}
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

   
    </div>
  );
};

export default Header;
