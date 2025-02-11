import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Transia-logo.png";
import logoWord from "../assets/Transia-word.png";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen z-100 md:fixed backdrop-blur-sm p-4 px-15 pt-10 top-0 flex-col-reverse md:flex-row flex justify-between  items-center">
      <ul className="flex">
        <Link
          to="https://x.com"
          className="mr-4 transform transition duration-500 hover:scale-125"
        >
          <FaXTwitter size={22} />
        </Link>
        <Link
          to="https://snapchat.com"
          className="mr-4 transform transition duration-500 hover:scale-125"
        >
          <FaSnapchatGhost size={22} />
        </Link>
        <Link
          to="https://instagram.com"
          className="mr-4 transform transition duration-500 hover:scale-125"
        >
          <FaInstagram size={22} />
        </Link>
        <Link
          to="https://tiktok.com"
          className="transform transition duration-500 hover:scale-125"
        >
          <FaTiktok size={22} />
        </Link>
      </ul>
      <Link to="/">
        <img
          className="transform transition duration-500 hover:scale-120  h-12 md:ml-13 md:mb-0 mb-10"
          src={logo}
          alt=""
        />
      </Link>
      <Link to="/">
        <img
          className="transform transition duration-500 hover:scale-115 h-6 mb-10 md:mb-0"
          src={logoWord}
          alt=""
        />
      </Link>
    </nav>
  );
};

export default Navbar;
