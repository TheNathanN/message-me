import Head from "next/head";
import Script from "next/script";
import type { NextPage } from "next";
import { useAppSelector } from "../app/hooks";
import { AnimatePresence, AnimationType, motion } from "framer-motion";

import SignIn from "../components/SignIn";
import MessageRoom from "../components/MessageRoom";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const user = useAppSelector(state => state.user);
  const mobileMenuShown = useAppSelector(state => state.mobileMenu.shown);

  return (
    <>
      <Head>
        <title>Message Me!</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/c4aa491b21.js"
        crossOrigin="anonymous"
      />
      <main className="h-screen relative overflow-hidden">
        <AnimatePresence>{mobileMenuShown && <Menu />}</AnimatePresence>
        {user.uid === "" ? <SignIn /> : <MessageRoom />}
      </main>
    </>
  );
};

export default Home;
