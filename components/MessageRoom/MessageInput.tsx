import React, { useState } from "react";
import { motion } from "framer-motion";
import { rainbowHoverVariant } from "../../helpers/animations";

const MessageInput = () => {
  const [input, setInput] = useState("");

  return (
    <form className="w-10/12 relative">
      <input
        className="border-black border-[1px] rounded-full w-full px-3 h-10 outline-none shadow-xl"
        type="text"
        name="message"
        id="message"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <motion.button
        whileHover="visible"
        variants={rainbowHoverVariant}
        className="absolute h-full w-[15%] right-0 bg-black text-xs text-white rounded-full"
      >
        SEND
      </motion.button>
    </form>
  );
};

export default MessageInput;
