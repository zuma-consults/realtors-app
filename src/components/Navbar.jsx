import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLinkActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="navbar  top-0 right-0 left-0">
      <div
        className={
          isScrolled
            ? "navbar flex items-center py-3 px-5 justify-between top-0 right-0 left-0 w-full shadow"
            : "navbar top-10 flex items-center py-3 px-5 justify-between  w-[90%]  shadow"
        }
      >
        <div className="flex items-center justify-start cursor-pointer w-full">
          <span className="text-ra-darkgreen font-bold text-2xl">
            Realtors App
          </span>
        </div>
        <div className="flex items-center gap-10 justify-end w-full">
          <Link to="/about" className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            About
          </Link>
          <Link to="/property-list" className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            Property List
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            Contact
          </Link>
          <Link to="/add-property" className="cursor-pointer bg-ra-darkgreen text-lg  font-semibold text-white p-2 rounded-lg">
            Add Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
