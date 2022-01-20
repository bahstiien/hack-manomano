import Link from "next/link";
import twitter from "../public/twitter.png";
import facebook from "../public/facebook.png";
import pinterest from "../public/pinterest.png";
import instagram from "../public/instagram.png";
import blogger from "../public/blogger.png";
import Image from "next/image";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className="copyright">
        <p> ©2022 ManoMano </p>
      </div>
      <nav className="">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <h2>
          Rejoignez-nous <br />
          La magie de l&#39;internet mondial !
        </h2>
        <div className="flex justify-end">
          <div className="mx-2">
            <Image
              src={twitter}
              alt="twitter icon"
              width="30px"
              height="30px"
            />
          </div>
          <div className="mx-2">
            <Image
              src={instagram}
              alt="instagram icon"
              width="30px"
              height="30px"
            />
          </div>
          <div className="mx-2">
            <Image
              src={facebook}
              alt="facebook icon"
              width="30px"
              height="30px"
            />
          </div>
          <div className="mx-2">
            <Image
              src={pinterest}
              alt="pinterest icon"
              width="30px"
              height="30px"
            />
          </div>
          <div className="mx-2">
            <Image
              src={blogger}
              alt="blogger icon"
              width="30px"
              height="30px"
            />
          </div>
        </div>
      </nav>
    </footer>
  );
}
