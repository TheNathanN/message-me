import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import SignIn from "../components/SignIn";

const Home: NextPage = () => {
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

      <main>
        <SignIn />
      </main>
    </div>
  );
};

export default Home;
