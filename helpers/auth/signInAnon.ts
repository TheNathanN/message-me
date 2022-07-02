import firebase from "../../app/firebase";
import { getAuth, signInAnonymously } from "firebase/auth";
import { UserState } from "../../features/user/userSlice";

const auth = getAuth(firebase);

const signInAnon = async (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
) => {
  try {
    const userCredential = await signInAnonymously(auth);
    const { uid, email, displayName, photoURL } = userCredential.user;
    const anonUser = {
      uid: uid === null ? "" : uid,
      email: email === null ? "" : email,
      displayName: displayName === null ? "Anon" : displayName,
      photoURL: photoURL === null ? "/assets/guest-icon.png" : photoURL,
    };
    setUser(anonUser);
  } catch (err) {
    console.log(err);
  }
};

export default signInAnon;
