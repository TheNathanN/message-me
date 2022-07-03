import { collection, DocumentData, getDocs } from "firebase/firestore";
import db from "./db";

const getMessages = async (
  room: string | string[] | undefined,
  setMessages: React.Dispatch<React.SetStateAction<DocumentData | undefined>>
) => {
  if (typeof room === "string") {
    const querySnapshot = await getDocs(collection(db, room));
    const messages = querySnapshot.docs[0].data();
    setMessages(messages);
  }
};

export default getMessages;
