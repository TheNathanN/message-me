import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../app/hooks";

import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import getMessages from "../../helpers/db/getMessages";

import MessagesSection from "./MessagesSection";
import MessageInput from "./MessageInput";
import Nav from "../Nav";
import db from "../../helpers/db/db";
import Menu from "../Menu";

const MessageRoom = () => {
  const [messageData, setMessageData] = useState<DocumentData>();
  const room = useAppSelector(state => state.room.roomName);
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "main", "rooms"), doc => {
      const rooms = doc.data();
      if (rooms && typeof room === "string") {
        const messages = rooms[room];
        setMessageData(messages);
      }
    });

    return unSub;
  }, [room, setMessageData]);

  useEffect(() => {
    getMessages(room, setMessageData);
  }, [room, setMessageData]);

  return (
    <>
      <Nav />
      <div className="hidden lg:inline-block bg-[#E0E0E0] w-5/12 h-full overflow-scroll no-scrollbar">
        <Menu />
      </div>
      <div className="flex flex-col items-center h-[85%] lg:h-full lg:w-full">
        <MessagesSection messages={messageData} user={user} />
        <MessageInput room={room} />
      </div>
    </>
  );
};

export default MessageRoom;
