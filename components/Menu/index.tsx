import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMobileMenu } from "../../features/mobileMenu/mobileMenuSlice";
import { setUser } from "../../features/user/userSlice";
import signOutAuth from "../../helpers/auth/signOutAuth";
import getRooms from "../../helpers/db/getRooms";

const Menu = () => {
  const dispatch = useAppDispatch();
  const [loggedOutUser, setLoggedOutUser] = useState({
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
  });

  const clickHandler = async () => {
    await signOutAuth(setLoggedOutUser);
    dispatch(setUser(loggedOutUser));
    dispatch(setMobileMenu({ shown: false }));
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ type: "tween", ease: "easeInOut" }}
      className="absolute flex flex-col items-center justify-between w-screen h-screen bg-[#E0E0E0] z-10 text-black pt-20 pb-2"
    >
      <div>
        <h2 className="text-3xl">Chat Rooms</h2>
        <div></div>
      </div>
      <div>
        <button onClick={clickHandler}>
          Sign Out <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default Menu;
