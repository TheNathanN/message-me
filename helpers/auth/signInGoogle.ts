import firebase from "../../app/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserState } from "../../features/user/userSlice";

const provider = new GoogleAuthProvider();

const auth = getAuth(firebase);

const signInGoogle = async (
  setUser: React.Dispatch<React.SetStateAction<UserState>>
) => {
  try {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
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
