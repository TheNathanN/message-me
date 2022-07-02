import { getAuth, signOut } from "firebase/auth";
import { UserState } from "../../features/user/userSlice";
import firebase from "../../app/firebase";

const auth = getAuth(firebase);

const signOutGoogle = async (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
) => {
  try {
    await signOut(auth);
    setUser({
      uid: "",
      displayName: "",
      email: "",
      photoURL: "",
    });
  } catch (err) {
    console.log(err);
  }
};

export default signOutGoogle;
