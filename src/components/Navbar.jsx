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
    <div
      className={
        isScrolled
          ? "navbar  top-0 right-0 left-0 w-full shadow rounded"
          : "navbar top-10  right-10 left-10  w-[90%]  shadow rounded"
      }
    >
      <div className="w-full px-10 flex items-center justify-between">
        <div className="flex items-center justify-center cursor-pointer">
          <span className="text-ra-darkgreen font-bold text-2xl">Realtors App</span>
        </div>
        <div className="flex items-center gap-10 justify-end">
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg font-semibold text-ra-text">Home</span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">About</span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">Property List</span>
          <span className="cursor-pointer hover:text-ra-darkgreen text-lg  font-semibold text-ra-text">Contact</span>
          <span className="cursor-pointer bg-ra-darkgreen text-lg  font-semibold text-white p-2 rounded-lg">Add Property</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
