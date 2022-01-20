import Link from "next/link";
import style from "../styles/Header.module.css";
import logo from "../public/logoManoMano.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white flex items-center justify-center uppercase">
      <div className={style.logo}>
        <Link passHref href="/">
          <a>
            <Image src={logo} width="307px" height="205px" alt="logo" />
          </a>
        </Link>
      </div>
      <nav className={style.menu}>
        <Link passHref href="/users">
          <a>Utilisateurs</a>
        </Link>
        <Link href="/pro">
          <a>Professionnels</a>
        </Link>
        <Link href="/service">
          <a>Services</a>
        </Link>
        <Link passHref href="/service/forum">
          <a>Forum</a>
        </Link>
      </nav>
    </header>
  );
}
