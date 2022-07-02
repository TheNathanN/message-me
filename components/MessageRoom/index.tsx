import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import getMessages from "../../helpers/db/getMessages";
import { DocumentData } from "firebase/firestore";

const MessageRoom = () => {
  const [room, setRoom] = useState("default_room");
  const [messageData, setMessageData] = useState<DocumentData>();

  useEffect(() => {
    getMessages(room, setMessageData);
  }, []);

  console.log(messageData?.messages);

  return (
    <div className="h-screen">
      <Nav />

      <div className="h-full">
        <section className="h-5/6">Message Room</section>

        <div className="flex flex-col items-center">
          <input
            className="border-black border-[1px] rounded-full w-10/12 px-3 h-10 outline-none"
            type="text"
            name="message"
            id="message"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageRoom;
