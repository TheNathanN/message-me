import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

import { DocumentData } from "firebase/firestore";
import getMessages from "../../helpers/db/getMessages";

import MessagesSection from "./MessagesSection";
import MessageInput from "./MessageInput";
import Nav from "../Nav";

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
        <MessageInput
          room={room}
          messages={messages}
          setMessageData={setMessageData}
        />
      </div>
    </>
  );
};

export default MessageRoom;
