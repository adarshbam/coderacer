import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-16 flex items-center bg-blue-950 text-white w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4">
        <div className="text-2xl font-bol">
          <Link
            to="/"
            className="cursor-pointer caret-amber-300 hover:text-amber-400 transition-colors duration-400 ease-in-out"
          >
            Coderacer
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className="cursor-pointer caret-sky-300 hover:text-sky-400 transition-colors duration-400 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="race"
            className="cursor-pointer caret-sky-300 hover:text-sky-400 transition-colors duration-400 ease-in-out"
          >
            Race
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
