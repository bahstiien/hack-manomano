import Link from "next/link";
import twitter from "../public/twitter.png";
import facebook from "../public/facebook.png";
import Image from "next/image";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      {/* <div className="flex flex-row ">
        <Image
          className=""
          src={twitter}
          alt="twitter icon"
          layout="responsive"
        />
        <Image
          className=""
          src={facebook}
          alt="facebook icon"
          layout="responsive"
        />
      </div> */}
      <div className="copyright">
        <p> ©2022 Mano Mano </p>
      </div>

      <h2>
        Rejoignez-nous <br />
        La magie de l&#39;internet mondial !
      </h2>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </footer>
  );
}
