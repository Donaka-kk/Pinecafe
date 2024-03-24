import { Link, useNavigate } from "react-router-dom";
import Logo from "../../utilities/Logo.webp";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-around items-center bg-black text-white py-5 gap-3">
      <div className="flex flex-col items-center text-sm md:text-base">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/location">Location</Link>
      </div>
      <div className="w-32">
        <img
          src={Logo}
          alt="logo"
          onClick={() => nav("/")}
          className="w-32  hover:cursor-pointer"
        />
      </div>
      <div>Copyright © Pine Cafe</div>
    </div>
  );
};

export default Footer;
