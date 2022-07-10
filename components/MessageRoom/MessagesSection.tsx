import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { UserState } from "../../features/user/userSlice";

interface Props {
  messages: any;
  user: UserState;
}

const MessagesSection = ({ messages, user }: Props) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  if (messages && messages.length < 1) {
    return (
      <p className="h-full flex items-center text-center">
        No messages have been sent in this room yet. <br />
        Be the first and send a message below!
      </p>
    );
  }

  return (
    <section className="h-full py-4 overflow-scroll w-10/12 my-4 no-scrollbar">
      {messages &&
        messages.map((message: any) => {
          const {
            sender: { uid, photoURL, displayName },
          } = message;

          const milliseconds = message.time.seconds * 1000;
          const dateClass = new Date(milliseconds);
          const month = dateClass.getMonth() + 1;
          const day = dateClass.getDate();
          const year = dateClass.getFullYear();
          const hour = dateClass.getHours();
          const formatHour = hour > 12 ? hour - 12 : hour;
          const amPm = hour < 12 ? "am" : "pm";
          const minutes = dateClass.getMinutes();
          const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
          const date = `${month}/${day}/${year}`;
          const time = `${formatHour}:${formatMinutes}${amPm}`;

          return (
            <div
              key={message.id}
              className={`${
                user.uid !== message.sender.uid ? "items-start" : "items-end"
              } flex flex-col w-full text-white`}
            >
              <p
                className={`${
                  user.uid !== uid ? "bg-[#6A6A6A]" : "bg-[#2464E0]"
                } min-w-[${
                  message.length
                }] max-w-[65%] px-4 py-2 rounded-md my-2`}
              >
                {message.message}
              </p>

              <div className="flex text-black">
                <div className="mr-4 ">
                  <p className="text-sm">{displayName}</p>
                  <div className="text-xs flex">
                    <p>{time}</p>
                    <p className="ml-4">{date}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    src={photoURL}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      <div ref={messageEndRef} />
    </section>
  );
};

export default MessagesSection;
