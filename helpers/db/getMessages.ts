import { collection, DocumentData, getDocs } from "firebase/firestore";
import db from "./db";

const getMessages = async (
  room: string | string[] | undefined,
  setMessages: React.Dispatch<React.SetStateAction<DocumentData | undefined>>
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    const messages = querySnapshot.docs[0].data();
    setMessages(messages);
  } catch (err) {
    console.log(err);
  }
};

export default getMessages;
