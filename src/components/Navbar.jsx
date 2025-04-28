import logo from "../assets/sklogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center h-12 w-12 hover:scale-110 cursor-pointer">
        <img src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shuvam-kumar25/" target="_blank" className="hover:scale-110"><FaLinkedin title="Linkedin"/></a>
        <a href="https://github.com/shuvam773" target="_blank" className="hover:scale-110"><FaGithub title="Github" /></a>
        <a href="https://www.instagram.com/shuvamkumar.in/" target="_blank" className="hover:scale-110"><FaInstagram title="Instagram"/></a>
        <a href="https://x.com/shuvam_kumar_/" target="_blank" className="hover:scale-110"><FaSquareXTwitter title="X"/></a>
    </div>
  </nav>
}

export default Navbar;