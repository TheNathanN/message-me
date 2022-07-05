import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import SignIn from "../components/SignIn";
import { useAppSelector } from "../app/hooks";
import MessageRoom from "../components/MessageRoom";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const user = useAppSelector(state => state.user);
  const mobileMenuShown = useAppSelector(state => state.mobileMenu.shown);

  return (
    <>
      <Head>
        <title>Message Me!</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/c4aa491b21.js"
        crossOrigin="anonymous"
      />

      <main className="h-screen relative">
        {mobileMenuShown && <Menu />}
        {user.uid === "" ? <SignIn /> : <MessageRoom />}
      </main>
    </>
  );
};

export default Home;
