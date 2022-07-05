import { uuidv4 } from "@firebase/util";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { Sender } from "../../types";
import db from "./db";

const addMessage = async (
  room: string,
  message: string,
  sender: Sender,
  messages: any
) => {
  const newMessage = {
    id: uuidv4(),
    message,
    sender,
    time: Timestamp.fromDate(new Date()),
  };

  const messageArr = [...messages, newMessage];

  const messagesRef = doc(db, "rooms", room);
  console.log(messagesRef);

  try {
    await updateDoc(messagesRef, {
      messages: messageArr,
    });
  } catch (err) {
    console.log(err);
  }
};

export default addMessage;
