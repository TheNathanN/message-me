import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import getMessages from "../../helpers/db/getMessages";
import { DocumentData } from "firebase/firestore";
import { useAppSelector } from "../../app/hooks";

const MessageRoom = () => {
  const [room, setRoom] = useState("default_room");
  const [messageData, setMessageData] = useState<DocumentData>();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    getMessages(room, setMessageData);
  }, [room, getMessages, setMessageData]);

  const messages = messageData?.messages;

  return (
    <>
      <Nav />

      <div className="h-[80%]">
        <section className="h-full p-4">
          {messages &&
            messages.map((message: any) => (
              <div
                key={message.id}
                className={`${
                  user.uid === message.sender.uid
                    ? "flex justify-start"
                    : "flex justify-end"
                } w-full`}
              >
                <p
                  className={`${
                    user.uid === message.sender.uid
                      ? "bg-[#6A6A6A]"
                      : "bg-[#2464E0]"
                  } w-40 px-4 py-2 rounded-md m-1`}
                >
                  {message.message}
                </p>
              </div>
            ))}
        </section>
        <div className="flex flex-col items-center">
          <input
            className="border-black border-[1px] rounded-full w-10/12 px-3 h-10 outline-none"
            type="text"
            name="message"
            id="message"
          />
        </div>
      </div>
    </>
  );
};

export default MessageRoom;
