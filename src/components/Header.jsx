import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="border-b-2 w-full h-20 dark:border-gray-700 dark:bg-gray-900">
      <div className="w-[90%] m-auto lg:w-[80%] xl:w-[1224px] flex justify-center align-baseline gap-4 pt-6">
        <div className="text-slate-600 dark:text-slate-300 font-medium text-xl leading-7">
          Promotheus Alerts
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <FiSun className="text-xl text-yellow-500" />
          ) : (
            <FiMoon className="text-xl text-slate-500" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;