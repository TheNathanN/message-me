import Head from "next/head";
import Script from "next/script";
import type { NextPage } from "next";
import { useAppSelector } from "../app/hooks";
import { AnimatePresence, motion } from "framer-motion";

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
      <main className="h-screen relative overflow-hidden lg:flex lg:justify-center">
        <AnimatePresence>
          {mobileMenuShown && (
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="relative z-20 lg:hidden"
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
        {user.uid === "" ? <SignIn /> : <MessageRoom />}
      </main>
    </>
  );
};

export default Home;
