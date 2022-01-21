import React from "react";
import ProfileCardDemo from "../components/ProfileCard";
import Layout from "../components/Layout";
import Link from "next/link";

export default function contact() {
  return (
    <Layout>
      <div>
        <h1 className="text-center text-3xl font-extrabold mt-10">LA TEAM</h1>
        <div className="flex flex-row gap-5 justify-center items-center mt-10">
          <ProfileCardDemo src="matthew.png" typo1="Bastien LE CALVEZ" />
          <ProfileCardDemo src="jenny.jpg" typo1="Florence MARTN" />
          <ProfileCardDemo src="steve.jpg" typo1="Nicolas CHAVANOUD " />
          <ProfileCardDemo src="elliot.jpg" typo1="Kalil BELGOUMRI" />
        </div>
        <Link passHref href="/">
          <a>
            <p className="font-second text-center text-6xl uppercase mt-8">
              {" "}
              Manomano
            </p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
