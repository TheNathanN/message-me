import { collection, getDocs } from "firebase/firestore";
import db from "./db";

const getRooms = async (
  setRooms: React.Dispatch<React.SetStateAction<string[] | undefined>>
) => {
  const querySnapshot = await getDocs(collection(db, "main"));
  const rooms = querySnapshot.docs;
  querySnapshot.forEach(item => {
    const roomsData = item.data();
    const rooms = Object.keys(roomsData).sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
    setRooms(rooms);
  });
};

export default getRooms;
