import React from "react";
import { UserState } from "../../features/user/userSlice";

interface Props {
  messages: any;
  user: UserState;
}

const MessagesSection = ({ messages, user }: Props) => {
  return (
    <section className="h-full py-4 overflow-scroll w-10/12 my-4">
      {messages &&
        messages.map((message: any) => (
          <div
            key={message.id}
            className={`${
              user.uid !== message.sender.uid
                ? "flex justify-start"
                : "flex justify-end"
            } w-full text-white`}
          >
            <p
              className={`${
                user.uid !== message.sender.uid
                  ? "bg-[#6A6A6A]"
                  : "bg-[#2464E0]"
              } w-40 px-4 py-2 rounded-md m-1`}
            >
              {message.message}
            </p>
          </div>
        ))}
    </section>
  );
};

export default MessagesSection;
