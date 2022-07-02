import firebase from "../../app/firebase";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebase);

export default db;
