import React, { useState, FormEvent } from "react";

import addMessage from "../../helpers/db/addMessage";

import { motion } from "framer-motion";
import { rainbowHoverVariant } from "../../helpers/animations";
import { Sender } from "../../types";
import { useAppSelector } from "../../app/hooks";

interface Props {
  room: string;
  messages: any;
}

const MessageInput = ({ room, messages }: Props) => {
  const user = useAppSelector(state => state.user);
  const [input, setInput] = useState("");

  const sender: Sender = {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    if (input !== "") {
      e.preventDefault();
      await addMessage(room, input, sender, messages);
      setInput("");
    } else {
      throw new Error("There was an error sending the message");
    }
  };

  return (
    <form className="w-10/12 relative" onSubmit={submitHandler}>
      <input
        className="border-black border-[1px] rounded-full w-full pl-3 pr-[15%] h-10 outline-none shadow-xl"
        type="text"
        name="message"
        id="message"
        value={input}
        autoComplete="off"
        required={true}
        onChange={e => setInput(e.target.value)}
      />
      <motion.button
        type="submit"
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
