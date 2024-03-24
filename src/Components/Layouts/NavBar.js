import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../utilities/Logo.webp";
const NavBar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const nav = useNavigate();

  return (
    <div className="relative w-full h-full flex flex-row items-center justify-between md:text-xl">
      <div className="px-5">
        <img
          src={Logo}
          alt="logo"
          onClick={() => nav("/")}
          className="w-32  hover:cursor-pointer"
        />
      </div>

      {/* for tablet & desktop users */}
      <div className="hidden md:flex px-8 text-white font-bold text-xl">
        <ul className="flex flex-row gap-10 items-center text-black">
          <li
            onClick={() => nav("/")}
            className="hover:cursor-pointer flex justify-center"
            onMouseEnter={() => setHoveredItem("Home")}
            onMouseLeave={() => setHoveredItem("")}
          >
            <div
              className={`absolute z-10 text-3xl ${
                hoveredItem === "Home" ? "-translate-y-4" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div
              className={`relative z-20 p-1 bg-white ${
                hoveredItem === "Home" ? "translate-y-3" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              Home
            </div>
          </li>
          <li
            onClick={() => nav("/location")}
            className="hover:cursor-pointer flex justify-center"
            onMouseEnter={() => setHoveredItem("Location")}
            onMouseLeave={() => setHoveredItem("")}
          >
            <div
              className={`absolute z-10 text-3xl ${
                hoveredItem === "Location" ? "-translate-y-4" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div
              className={`relative z-20 bg-white p-1 ${
                hoveredItem === "Location" ? "translate-y-3" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              Location
            </div>
          </li>
          <li
            onClick={() => nav("/aboutus")}
            className="hover:cursor-pointer flex justify-center"
            onMouseEnter={() => setHoveredItem("About us")}
            onMouseLeave={() => setHoveredItem("")}
          >
            <div
              className={`absolute z-10 text-3xl ${
                hoveredItem === "About us" ? "-translate-y-4" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              <ion-icon name="people-circle-outline"></ion-icon>
            </div>
            <div
              className={`relative z-20 bg-white p-1 ${
                hoveredItem === "About us" ? "translate-y-3" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              About us
            </div>
          </li>
          <li
            onClick={() => nav("/contact")}
            className="hover:cursor-pointer flex justify-center"
            onMouseEnter={() => setHoveredItem("Contact")}
            onMouseLeave={() => setHoveredItem("")}
          >
            <div
              className={`absolute z-10 text-3xl ${
                hoveredItem === "Contact" ? "-translate-y-4" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div
              className={`relative z-20 bg-white p-1 ${
                hoveredItem === "Contact" ? "translate-y-3" : "translate-y-0"
              } ease-in-out duration-[300ms]`}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>

      {/* for mobile users */}
      <div className="md:hidden h-full text-5xl mr-4 flex items-center">
        <button
          onClick={() => {
            setShowMenuBar((prev) => !prev);
          }}
          className={`z-20 ${
            showMenuBar ? `fixed top-7 right-5 text-white` : `relative`
          }`}
        >
          {showMenuBar ? (
            <ion-icon name="close-circle-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </button>

        <div
          className={`fixed w-56 h-screen top-0 right-0 bg-transparent08 text-white pt-2 border-l-2 z-10 border-black ${
            showMenuBar ? `translate-x-0` : `translate-x-full`
          } ease-in-out duration-[1000ms]`}
        >
          <ul className="w-full h-full flex flex-col items-center text-xl gap-4 mt-20">
            <li
              onClick={() => nav("/")}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Home
            </li>
            <li
              onClick={() => nav("/aboutus")}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              About us
            </li>
            <li
              onClick={() => nav("/location")}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Location
            </li>
            <li
              onClick={() => nav("/contact")}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
