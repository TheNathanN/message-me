import { collection, doc, getDocs } from "firebase/firestore";
import db from "./db";

const getRooms = async () => {
  const querySnapshot = await getDocs(collection(db, "rooms"));
  querySnapshot.forEach(item => {
    console.log(item.data());
  });
};

export default getRooms;
