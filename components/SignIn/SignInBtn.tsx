import React from "react";

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
  const { id, icon, text } = info;

  return (
    <motion.div
      whileHover="grayVisible"
      variants={rainbowHoverVariant}
      className="flex items-center justify-center w-72 bg-[#E0E0E0] text-2xl py-3 rounded-md mb-4 cursor-pointer hover:text-white"
      onClick={
        id === "guest"
          ? async () => await signInAnon(setNewUser)
          : async () => await signInGoogle(setNewUser)
      }
    >
      <i className={icon}></i>
      <p className="w-44 ml-2">{text}</p>
    </motion.div>
  );
};

export default SignInBtn;
