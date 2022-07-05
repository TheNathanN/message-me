import Image from "next/image";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setMobileMenu } from "../../features/mobileMenu/mobileMenuSlice";

const Nav = () => {
  const dispatch = useAppDispatch();
  const mobileMenuShown = useAppSelector(state => state.mobileMenu.shown);

  const clickHandler = () => {
    dispatch(setMobileMenu({ shown: !mobileMenuShown }));
  };

  return (
    <nav className="relative z-20 flex items-center justify-between bg-black text-white pr-8 pl-4 py-1 text-2xl lg:hidden">
      <div>
        <Image src={"/assets/Logo.png"} width={48} height={50} alt="logo" />
      </div>
      <button onClick={clickHandler}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Nav;
