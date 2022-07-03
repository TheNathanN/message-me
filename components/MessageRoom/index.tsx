import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { DocumentData } from "firebase/firestore";
import Nav from "../Nav";
import getMessages from "../../helpers/db/getMessages";
import MessagesSection from "./MessagesSection";
import MessageInput from "./MessageInput";

const MessageRoom = () => {
  const [messageData, setMessageData] = useState<DocumentData>();
  const [room, setRoom] = useState("default_room");
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    getMessages(room, setMessageData);
  }, [room, getMessages, setMessageData]);

  const messages = messageData?.messages;

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center h-[85%]">
        <MessagesSection messages={messages} user={user} />
        <MessageInput />
      </div>
    </>
  );
};

export default MessageRoom;
