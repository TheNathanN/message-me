import { collection, DocumentData, getDocs } from "firebase/firestore";
import db from "./db";

const getMessages = async (
  room = "default_room",
  setMessages: React.Dispatch<React.SetStateAction<DocumentData | undefined>>
) => {
  const querySnapshot = await getDocs(collection(db, room));
  const messages = querySnapshot.docs[0].data();

  setMessages(messages);
};

export default getMessages;
