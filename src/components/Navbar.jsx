import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Transia-logo.png";
import logoWord from "../assets/Transia-word.png";
import { FaSnapchatGhost } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-screen p-4 px-8 flex-col-reverse md:flex-row flex justify-between  items-center">
      <ul className="flex">
        <li className="mr-2">
          <FaXTwitter size={22} />
        </li>
        <li className="mr-2">
          <FaSnapchatGhost size={22} />
        </li>
        <li className="mr-2">
          <FaInstagram size={22} />
        </li>
        <li>
          <FaTiktok size={22} />
        </li>
      </ul>
      <img className="h-12 md:pl-15 md:mb-0 mb-10" src={logo} alt="" />
      <img className="h-6 mb-10 md:mb-0" src={logoWord} alt="" />
    </nav>
  );
};

export default Navbar;
