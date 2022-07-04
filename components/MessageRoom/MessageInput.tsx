import React, { useState, useEffect, MouseEvent } from "react";

import addMessage from "../../helpers/db/addMessage";

import { motion } from "framer-motion";
import { rainbowHoverVariant } from "../../helpers/animations";
import { Sender } from "../../types";
import { useAppSelector } from "../../app/hooks";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import db from "../../helpers/db/db";

interface Props {
  room: string;
  messages: any;
  setMessageData: React.Dispatch<
    React.SetStateAction<DocumentData | undefined>
  >;
}

const MessageInput = ({ room, messages, setMessageData }: Props) => {
  const user = useAppSelector(state => state.user);
  const [input, setInput] = useState("");

  const sender: Sender = {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };

  const clickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    if (messages) {
      e.preventDefault();
      await addMessage(room, input, sender);
      setInput("");
    }
  };

  return (
    <form className="w-10/12 relative">
      <input
        className="border-black border-[1px] rounded-full w-full pl-3 pr-[15%] h-10 outline-none shadow-xl"
        type="text"
        name="message"
        id="message"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <motion.button
        onClick={clickHandler}
        whileHover="blackVisible"
        variants={rainbowHoverVariant}
        className="absolute h-full w-[15%] right-0 bg-black text-xs text-white rounded-full"
      >
        SEND
      </motion.button>
    </form>
  );
};

export default MessageInput;
