import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { UserState } from "../../features/user/userSlice";
import { setUser } from "../../features/user/userSlice";
import { RootState } from "../../app/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { motion } from "framer-motion";
import signInAnon from "../../helpers/auth/signInAnon";
import signInGoogle from "../../helpers/auth/signInGoogle";

const SignIn = () => {
  const auth = getAuth();
  const router = useRouter();
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
  }, [newUser, setUser, dispatch]);

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
        <Image src={"/assets/logo.png"} width={220} height={200} />
      </div>
      <div className="text-center mt-5">
        <h1 className="text-5xl mb-8">Sign In</h1>

        {signInBtns.map(info => {
          const { id, icon, text } = info;

          return (
            <motion.div
              whileHover={{
                backgroundColor: ["#E0E0E0", "#9b65ff", "#00c0fa", "#ff5329"],
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="flex items-center justify-center w-72 bg-[#E0E0E0] text-2xl py-3 rounded-md mb-4 cursor-pointer hover:text-white"
              key={id}
              onClick={
                id === "guest"
                  ? async () => {
                      await signInAnon(setNewUser);
                      router.push("/default_room");
                    }
                  : async () => {
                      await signInGoogle(setNewUser);
                      router.push("/default_room");
                    }
              }
            >
              <i className={icon}></i>
              <p className="w-44 ml-2">{text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SignIn;
