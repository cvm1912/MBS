import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Logo from "./Logo";
import { MenuIcon, Search, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import Logins from "./Logins";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="fixed top-0 left- w-full  py-6 px-15   flex items-center justify-between">
      <Logo assets={assets.logo} />
      <MenuBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      <Logins/>
      <MenuIcon className="md:hidden w-8 h-8 cursor-pointer" onClick={() => setIsSidebarOpen(true)}/>
    </div>
  );
};

export default Navbar;
