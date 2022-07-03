import React, { useState } from "react";
import { useRouter } from "next/router";

import { rainbowHoverVariant } from "../../helpers/animations";
import { motion } from "framer-motion";
import signInAnon from "../../helpers/auth/signInAnon";
import signInGoogle from "../../helpers/auth/signInGoogle";
import { UserState } from "../../features/user/userSlice";

interface Props {
  info: { id: string; text: string; icon: string };
  setNewUser: React.Dispatch<React.SetStateAction<UserState>>;
}

const SignInBtn = ({ info, setNewUser }: Props) => {
  const router = useRouter();

  const { id, icon, text } = info;

  return (
    <motion.div
      whileHover="visible"
      variants={rainbowHoverVariant}
      className="flex items-center justify-center w-72 bg-[#E0E0E0] text-2xl py-3 rounded-md mb-4 cursor-pointer hover:text-white"
      key={id}
      onClick={
        id === "guest"
          ? async () => {
              await signInAnon(setNewUser);
              router.push("/default_room");
            }
          : async () => {
              await signInGoogle(setNewUser);
              router.push("/default_room");
            }
      }
    >
      <i className={icon}></i>
      <p className="w-44 ml-2">{text}</p>
    </motion.div>
  );
};

export default SignInBtn;
