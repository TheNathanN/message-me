import { uuidv4 } from "@firebase/util";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { Sender } from "../../types";
import db from "./db";

const addMessage = async (room: string, message: string, sender: Sender) => {
  const newMessage = {
    id: uuidv4(),
    message,
    sender,
    time: Timestamp.fromDate(new Date()),
  };

  const messagesRef = doc(db, "main", "rooms");

  if (typeof room === "string") {
    try {
      await updateDoc(messagesRef, {
        [room]: arrayUnion(newMessage),
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export default addMessage;
