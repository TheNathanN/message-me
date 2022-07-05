import { collection, doc, DocumentData, getDocs } from "firebase/firestore";
import db from "./db";

const getRooms = async (
  setRooms: React.Dispatch<React.SetStateAction<DocumentData | undefined>>
) => {
  const querySnapshot = await getDocs(collection(db, "main"));
  querySnapshot.forEach(item => {
    const rooms = item.data();
    setRooms(rooms);
  });
};

export default getRooms;
