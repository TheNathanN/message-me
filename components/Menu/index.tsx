import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMobileMenu } from "../../features/mobileMenu/mobileMenuSlice";
import { setUser } from "../../features/user/userSlice";
import signOutAuth from "../../helpers/auth/signOutAuth";
import getRooms from "../../helpers/db/getRooms";
import { DocumentData } from "firebase/firestore";
import { setRoom } from "../../features/room/roomSlice";

const Menu = () => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(state => state.room.roomName);
  const [rooms, setRooms] = useState<DocumentData>();
  const [roomNames, setRoomNames] = useState<string[]>();
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

  useEffect(() => {
    getRooms(setRooms);
  }, [setRooms]);

  useEffect(() => {
    if (rooms) {
      const roomNamesArr = Object.keys(rooms);
      setRoomNames(roomNamesArr);
    }
  }, [rooms, setRoomNames]);

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ type: "tween", ease: "easeInOut" }}
      className="absolute flex flex-col items-center justify-between w-screen h-screen bg-[#E0E0E0] z-10 text-black pt-20 pb-2"
    >
      <div className="w-full text-center">
        <h2 className="text-3xl">Chat Rooms</h2>
        <div className="w-full flex flex-col items-center mt-4">
          {roomNames &&
            roomNames.map(name => (
              <div
                className={`${
                  room === name ? "border-black border-2" : ""
                } bg-white text-2xl text-center rounded-lg py-3 w-[60%] mb-4`}
                onClick={() => {
                  dispatch(
                    setRoom({
                      roomName: name,
                    })
                  );
                  dispatch(
                    setMobileMenu({
                      shown: false,
                    })
                  );
                }}
                key={name}
              >
                <p>{name}</p>
              </div>
            ))}
        </div>
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
