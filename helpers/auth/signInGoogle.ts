import firebase from "../../app/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserState } from "../../features/user/userSlice";

const provider = new GoogleAuthProvider();

const auth = getAuth(firebase);

const signInGoogle = async (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
) => {
  try {
    const result = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const { uid, email, displayName, photoURL } = result.user;
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

export default signInGoogle;
