import { useState, useEffect } from "react";

const NavBar = () => {
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
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg font-semibold text-ra-text">
            Home
          </span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            About
          </span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            Property List
          </span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">
            Contact
          </span>
          <span className="cursor-pointer bg-ra-darkgreen text-lg  font-semibold text-white p-2 rounded-lg">
            Add Property
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
