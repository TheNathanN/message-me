import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import SignIn from "../components/SignIn";
import { useAppSelector } from "../app/hooks";
import MessageRoom from "../components/MessageRoom";

const Home: NextPage = () => {
  const user = useAppSelector(state => state.user);
  console.log(user);
  return (
    <div className="bg-[#FAFAFA] min-w-screen min-h-screen">
      <Head>
        <title>Message Me!</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/c4aa491b21.js"
        crossOrigin="anonymous"
      />

      <main>{user.uid === "" ? <SignIn /> : <MessageRoom />}</main>
    </div>
  );
};

export default Home;
