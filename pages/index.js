import Head from "next/head";
import Image from "next/image";

import logo from "../public/logoManoMano.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-main">Mano Mano la communauté</h1>

      <Image src={logo} width={"200px"} height={"120px"} alt="logo" />
    </div>
  );
}
