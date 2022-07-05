import { collection, DocumentData, getDocs } from "firebase/firestore";
import db from "./db";

const getMessages = async (
  room: string | string[] | undefined,
  setMessages: React.Dispatch<React.SetStateAction<DocumentData | undefined>>
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "main"));
    const rooms = querySnapshot.docs[0].data();
    if (typeof room === "string") {
      const messages = rooms[room];
      setMessages(messages);
    }
  } catch (err) {
    console.log(err);
  }
};

export default getMessages;
