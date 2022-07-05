import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMobileMenu } from "../../features/mobileMenu/mobileMenuSlice";
import { setRoom } from "../../features/room/roomSlice";
import { motion } from "framer-motion";
import { rainbowHoverVariant } from "../../helpers/animations";

interface Props {
  name: string;
}

const RoomCard = ({ name }: Props) => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(state => state.room.roomName);

  return (
    <motion.button
      variants={rainbowHoverVariant}
      whileHover="whiteVisible"
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
    >
      <p>{name}</p>
    </motion.button>
  );
};

export default RoomCard;
