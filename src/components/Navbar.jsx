import { useState } from "react";
import {
  IconSearch,
  IconLayoutGrid,
  IconMoonStars,
  IconMenu,
  IconBrightnessUpFilled,
} from "@tabler/icons-react";
import { Burger } from "@mantine/core";

const Navbar = ({ toggleViewMode, setIsSidebarOpen }) => {
  const [showGrid, setShowGrid] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleIcons = () => {
    setShowGrid((prev) => !prev);
    toggleViewMode(); // Call the parent function to toggle the view mode
  };

  return (
    <nav className="w-full flex justify-between items-center px-4 py-1 xs-mx:px-2 xs-mx:py-1 lg-mx:px-10 lg-mx:py-4 bg-[#FBFDFC] darkMode:bg-black darkMode:text-white md-mx:px-6 md-mx:py-2">
      <div className="flex items-center gap-4 xs-mx:gap-1 md-mx:gap-3 lg-mx:gap-4">
        <div>
          <Burger
            onClick={() => setIsSidebarOpen(true)}
            size={15}
            className="xs-mx:h-5 xs-mx:w-5 md-mx:h-6 md-mx:w-6 lg-mx:h-6 lg-mx:w-7"
            aria-label="Toggle navigation"
          />
        </div>
        <div className="logo flex items-center gap-2 xs-mx:gap-1 md-mx:gap-3 lg-mx:gap-4">
          <img
            src="./Union.png"
            className="xs-mx:w-5 xs-mx:h-5 md-mx:w-6 md-mx:h-6 lg-mx:w-7 lg-mx:h-6"
            alt="Logo"
          />
          <h2 className="font-bold xs-mx:text-sm text-[#3F9142] darkMode:text-white md-mx:text-xl lg-mx:text-2xl">
            DoIt
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-3 md-mx:gap-3 lg-mx:gap-6">
        <span>
          <IconSearch
            size={16}
            className="xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
          />
        </span>
        <span
          onClick={handleToggleIcons}
          className="cursor-pointer xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
        >
          {showGrid ? (
            <IconLayoutGrid
              size={16}
              className="xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
            />
          ) : (
            <IconMenu
              size={16}
              className="xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
            />
          )}
        </span>
        <span
          className="cursor-pointer xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
          onClick={() => setIsDarkMode((prev) => !prev)}
        >
          {isDarkMode ? (
            <IconBrightnessUpFilled
              size={16}
              className="xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
            />
          ) : (
            <IconMoonStars
              size={16}
              className="xs-mx:w-5 xs-mx:h-5 md-mx:w-5 md-mx:h-5 lg-mx:w-6 lg-mx:h-6"
            />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
