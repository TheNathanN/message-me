import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between bg-black text-white pr-8 pl-4 py-1 text-2xl md:hidden">
      <div>
        <Image src={"/assets/Logo.png"} width={48} height={50} alt="logo" />
      </div>
      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
