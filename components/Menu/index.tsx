import React, { useState } from "react";
import signOutAuth from "../../helpers/auth/signOutAuth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMobileMenu } from "../../features/mobileMenu/mobileMenuSlice";
import { setUser } from "../../features/user/userSlice";

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
    <div className="absolute w-screen h-screen bg-[#E0E0E0] z-10 text-black pt-20">
      <div>
        <h2>Chat Rooms</h2>
      </div>
      <div>
        <button onClick={clickHandler}>
          Sign Out
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default Menu;
