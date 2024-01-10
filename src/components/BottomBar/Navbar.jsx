import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import navItems from "./Nav_tems";

const Navbar = () => {
  const BottomBar = (props) => {
    return (
      <Link
        activeClass="text-blue-500"
        to={props.item.id}
        spy={true}
        smooth={true}
        duration={1000}
        className="flex items-center py-2 text-gray-300 z-50"
      >
        <FontAwesomeIcon className="text-2xl" icon={props.item.icon} fixedWidth />
      </Link>
    );
  };

  return (
    <div className="h-full z-50">
      <div className="w-screen items-center inline-block z-50 overflow-x-hidden">
        <div className="bg-[#111111] borderf w-full h-[6rem] flex flex-col justify-end text-gray-100 fixed bottom-0 z-50">
          <div className="bg-[#111111] borderf w-full h-[6rem] flex justify-around">
            {navItems.map((item) => (
              <BottomBar item={item} key={item.id} />
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
