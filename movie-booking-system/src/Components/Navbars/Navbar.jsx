import React from "react";
import { assets } from "../../assets/assets";
import Logo from "./Logo";
import { MenuIcon, Search, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import Logins from "./Logins";

const Navbar = () => {
  return (
    <div className="fixed top-0 left- w-full  py-6 px-6 lg:px-36 md:px-16  flex items-center justify-between">
      <Logo assets={assets.logo} />
      <MenuBar/>
      <Logins/>

    
    </div>
  );
};

export default Navbar;

{
  /* <div className=' z-50 flex items-center justify-between '> */
}
