import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser, faHeart, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

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

  const closeAddButton = () => {
    setIsOpen(false);
  };

  const BottomBar = (props) => {
    return (
      <div
        onClick={props.item.name === "Add" ? toggleAddButton : null}
        className={`relative flex items-center py-2  z-50 cursor-pointer ${
          isOpen && props.item.name === "Add" ? "hidden" : ""
        } ${props.item.name === "Add" ? "bg-white rounded-full text-black" : ""}`}
        style={{
          position: props.item.name === "Add" ? "absolute" : "relative",
          top: props.item.name === "Add" ? "-1.6rem" : "0",
          padding: props.item.name === "Add" ? "0.8rem" : "0",
          paddingTop: props.item.name === "Add" ? "1rem" : "0",
          paddingBottom: props.item.name === "Add" ? "1rem" : "0",
        }}
      >
        <FontAwesomeIcon className="text-2xl" icon={props.item.icon} fixedWidth />
      </div>
    );
  };

  const AddButtonContent = () => {
    return (
      <div className={`absolute buttonn bottom-20 left-20 ${isOpen ? 'animated-rotate' : 'animated-rotateback'}`}>
        <div className=" flex flex-row custom">
          <div className="bg-purple-400 h-11 w-16 rounded-t-3xl rounded-b-2xl"></div>
          <div className="bg-red-500 h-11 w-16   rounded-t-3xl rounded-b-2xl"></div>
          <div className="bg-orange-500 h-11 w-16  rounded-t-3xl rounded-b-2xl"></div>
        </div>
        <button className="absolute top-2 left-[4.8rem] p-2" onClick={closeAddButton}>
          <FontAwesomeIcon className="text-2xl" icon={faTimes} fixedWidth />
        </button>
      </div>
    );
  };

  return (
    <div className="h-full z-50">
      <div className="w-full items-center inline-block z-50 overflow-x-hidden">
        <div className="bg-[#111111] borderf w-full h-[4.5rem] flex flex-col justify-end text-gray-100 fixed bottom-0 z-50">
          <div className="bg-[#111111] borderf w-full h-[4.5rem] flex justify-around">
            {navItems.map((item) => (
              <BottomBar item={item} key={item.name} />
            ))}
          </div>
          {isOpen && <AddButtonContent />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
