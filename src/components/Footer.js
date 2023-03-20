import profile from "../constants/profile.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="max-w-6xl mx-auto text-gray-800 flex flex-wrap justify-between gap-8 sm:gap-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-between p-5 w-1/3 sm:w-1/6flex items-center justify-between p-5 w-1/3 sm:w-auto flex-grow">
          <a
            href="https://github.com/NanaPokun"
            className="text-gray-400 hover:text-gray-300 rounded-full transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/nanayaw_codes"
            className="text-gray-400 hover:text-gray-300 rounded-full transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/felix-osei-1890401a1/"
            className="text-gray-400 hover:text-gray-300 rounded-full transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Portfolio Link with Image */}
        <div className="p-5 w-1/3 sm:w-auto flex-grow">
          <a href="https://my-folio-nanapokun.vercel.app/">
            <img
              src={profile}
              alt="portfolio"
              className="w-8 h-8 rounded-full"
            />
          </a>
        </div>
        {/* Copyright */}
        <div className="p-5 w-1/3 sm:w-auto flex-grow">
          <div className="text-sm text-gray-400 font-normal">
            <div>&copy; {new Date().getFullYear()} | Copyright |Mfie</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
