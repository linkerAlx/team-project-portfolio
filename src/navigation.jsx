export default Navigation;
import Logo from "./logo";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";


const Navigation = () => {
    return (
        <div className="text-xl flex items-center justify-between gap-5 sm:gap-5 bg-black text-white shadow-md border-b px-[20px] md:px-[100px] py-5">
            <Logo />
            <div className="flex gap-5">
                <a href="#">About</a>
                <a href="#">Expertize</a>
                <a href="#">Services</a>
                <a href="#">Contacts</a>
            </div>
            <div className="flex items-center gap-5">
                <FaInstagram className="cursor-pointer hover:text-orange-700" />
                <FaTwitter className="cursor-pointer hover:text-orange-700" />
                <CiFacebook className="cursor-pointer hover:text-orange-700" />
            </div>
        </div>
    )
};
