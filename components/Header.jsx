import Link from "next/link";
import style from "../styles/Header.module.css";
import logo from "../public/logoManoMano.png";
import Image from "next/image";
import LogoPro from "../public/images/LogoPro.jpeg";
import repair from "../public/worker/repair.png";
import talk from "../public/worker/talk.png";
import projet from "../public/worker/projet.png";

export default function Header() {
  return (
    <header className="bg-white flex flex-col items-center justify-center uppercase">
      <div className={style.logo}>
        <Link passHref href="/">
          <a>
            <Image src={logo} width="307px" height="205px" alt="logo" />
          </a>
        </Link>
      </div>
      <nav className={style.menu}>
        <Link passhref href="/users">
          <a className="flex flex-row justify-center items-center">
            <Image
              src={projet}
              width={50}
              height={50}
              alt="logo pro"
              className=" flex"
            />

            <p className="font-second text-2xl mx-2 text-center">Projets</p>
          </a>
        </Link>

        <Link passhref href="/pro">
          <a className="flex flex-row justify-center items-center">
            <Image
              src={LogoPro}
              width={50}
              height={50}
              alt="logo pro"
              className="rounded-full flex"
            />

            <p className="font-second text-2xl mx-2">Pro</p>
          </a>
        </Link>

        <Link passhref href="/service">
          <a className="flex flex-row justify-center items-center">
            <Image
              src={repair}
              width={50}
              height={50}
              alt="logo pro"
              className="flex"
            />

            <p className="font-second text-2xl mx-2">Service</p>
          </a>
        </Link>

        <Link passhref href="/service/forum">
          <a className="flex flex-row justify-center items-center">
            <Image
              src={talk}
              width={50}
              height={50}
              alt="logo pro"
              className=" flex"
            />

            <p className="font-second text-2xl mx-2">Forum</p>
          </a>
        </Link>
      </nav>
    </header>
  );
}
