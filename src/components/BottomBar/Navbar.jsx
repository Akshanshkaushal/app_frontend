import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faHome, faSearch, faUser, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaBookmark } from "react-icons/fa";

const navItems = [
  { name: "Home", icon: faHome },
  { name: "Search", icon: faSearch },
  { name: "Add", icon: faPlus },
  { name: "Likes", icon: faHeart },
  { name: "Profile", icon: faUser },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddButton = () => {
    setIsOpen(!isOpen);
  };

  const BottomBar = (props) => {
    return (
      <div
        onClick={props.item.name === "Add" ? toggleAddButton : null}
        className={`flex items-center py-2 text-gray-300 z-50 cursor-pointer ${
          isOpen && props.item.name === "Add" ? "rotate-45" : ""
        }`}
      >
        <FontAwesomeIcon className="text-2xl" icon={props.item.icon} fixedWidth />
        {props.item.name === "Add" && isOpen && (
          <div className="absolute  items-center rotate-180">
          
            
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full z-50">
      <div className="w-screen items-center inline-block z-50 overflow-x-hidden">
        <div className="bg-[#111111] borderf w-full h-[6rem] flex flex-col justify-end text-gray-100 fixed bottom-0 z-50">
          <div className="bg-[#111111] borderf w-full h-[6rem] flex justify-around">
            {navItems.map((item) => (
              <BottomBar item={item} key={item.name} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="h-1 bg-gray-400 w-1/2 rounded-lg mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
