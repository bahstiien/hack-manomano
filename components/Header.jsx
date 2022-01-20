import Link from "next/link";
import style from "../styles/Header.module.css";
import logo from "../public/logoManoMano.png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className={style.logo}>
        <Image src={logo} width="307px" height="205px" alt="logo" />
      </div>
      <nav className={style.menu}>
        <Link passHref href="/">
          <a>Accueil</a>
        </Link>

        <Link passHref href="/utilisateurs">
          <a>Utilisateurs</a>
        </Link>
        <Link href="/pro">
          <a>Professionnels</a>
        </Link>
        <Link href="/service">
          <a>Services</a>
        </Link>
        <Link passHref href="/forum">
          <a>Forum</a>
        </Link>
      </nav>
    </header>
  );
}
