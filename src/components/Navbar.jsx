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
          <Link to="/" className="text-ra-darkgreen font-bold text-2xl">
            Realtors App
          </Link>
        </div>
        <div className="flex items-center gap-10 justify-end w-full">
          <Link
            to="/home"
            className={
              isLinkActive("/home")
                ? "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-darkgreen "
                : "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text"
            }
          >
            Home
          </Link>
          <Link
            to="/about"
            className={
              isLinkActive("about")
                ? "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-darkgreen "
                : "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text"
            }
          >
            About
          </Link>
          <Link
            to="/property-list"
            className={
              isLinkActive("property-list")
                ? "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-darkgreen"
                : "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text"
            }
          >
            Property List
          </Link>
          <Link
            to="/contact"
            className={
              isLinkActive("contact")
                ? "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-darkgreen"
                : "cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
