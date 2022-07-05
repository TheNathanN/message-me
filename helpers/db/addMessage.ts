import { uuidv4 } from "@firebase/util";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { Sender } from "../../types";
import db from "./db";

const addMessage = async (room: string, message: string, sender: Sender) => {
  const newMessage = {
    id: uuidv4(),
    message,
    sender,
    time: new Timestamp(
      Math.floor(Date.now() / 1000),
      Math.floor(performance.now())
    ),
  };

  const messagesRef = doc(db, room, "messages");

  try {
    await updateDoc(messagesRef, {
      messages: arrayUnion(newMessage),
    });
  } catch (err) {
    console.log(err);
  }
};

export default addMessage;
