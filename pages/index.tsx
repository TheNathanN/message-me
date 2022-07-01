import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const Home: NextPage = () => {
  const signInBtns = [
    {
      id: 1,
      name: "google",
      text: "Sign in with Google",
      icon: "fa-brands fa-google",
    },
    {
      id: 2,
      name: "guest",
      text: "Sign in as a Guest",
      icon: "fa-solid fa-user",
    },
  ];

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
        <div className="flex flex-col items-center h-screen">
          <div className="my-16">
            <Image src={"/assets/logo.png"} width={320} height={300} />
          </div>
          <div className="text-center mt-5">
            <h1 className="text-5xl mb-8">Sign In</h1>
            {signInBtns.map(info => {
              const { id, icon, text } = info;
              return (
                <div
                  className="flex items-center justify-center w-60 bg-[#E0E0E0] text-2xl py-3 rounded-md mb-4 cursor-pointer hover:bg-[#acacac]"
                  key={id}
                >
                  <i className={icon}></i>
                  <p className="w-44 ml-2">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
