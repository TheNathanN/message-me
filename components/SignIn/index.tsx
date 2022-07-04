import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { UserState } from "../../features/user/userSlice";
import { setUser } from "../../features/user/userSlice";
import { RootState } from "../../app/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import SignInBtn from "./SignInBtn";

const SignIn = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state: RootState) => state.user);
  const [newUser, setNewUser] = useState<UserState>(currentUser);

  if (newUser.uid === "") {
    onAuthStateChanged(auth, currentUser => {
      if (
        currentUser &&
        currentUser.displayName &&
        currentUser.email &&
        currentUser.photoURL
      ) {
        const { uid, displayName, email, photoURL } = currentUser;
        const user = { uid, displayName, email, photoURL };
        setNewUser(user);
      }
    });
  }

  useEffect(() => {
    dispatch(setUser(newUser));
  }, [newUser, dispatch]);

  const signInBtns = [
    {
      id: "google",
      text: "Sign in with Google",
      icon: "fa-brands fa-google",
    },
    {
      id: "guest",
      text: "Sign in as a Guest",
      icon: "fa-solid fa-user",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="my-8">
        <Image src={"/assets/logo.png"} width={220} height={200} alt="logo" />
      </div>
      <div className="text-center mt-5">
        <h1 className="text-5xl mb-8">Sign In</h1>

        {signInBtns.map(info => (
          <div key={info.id}>
            <SignInBtn info={info} setNewUser={setNewUser} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
