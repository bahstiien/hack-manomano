import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/logoManoMano.png";

export default function Header() {
  return (
    <header>
      <nav className={styles.menu}>
        <Link href="/">
          <a>Accueil</a>
        </Link>

        <Link href="/utilisateurs">
          <a>Utilisateurs</a>
        </Link>
        <Link href="/pro">
          <a>Professionnels</a>
        </Link>
        <Link href="/service">
          <a>Services</a>
        </Link>
      </nav>
    </header>
  );
}
