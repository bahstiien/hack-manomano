import Link from "next/link";
import style from "../../styles/PagePro.module.css";
import Image from "next/image";
import Presentation from "../../public/images/presentation.png";

export default function PagePro() {
  return (
    <>
      <h1 className="text-five"> Bienvenue dans l&apos;espace pro </h1>

      <div className={style.infoContainerPagePro}>
        <div className={style.textContainerPagePro}>
          <p className={style.textTitlePagePro}>
            Artisan, si vous passiez au e-commerce?
          </p>
          <p className={style.paragraphPagePro}>
            En plus de profiter de nos services, ManoMano vous propose désormais
            de faire partie de la communauté.
          </p>
          <p className={style.paragraphPagePro}>
            Intégrez dès à présent la ManoManoCommunité et mettez en avant vos
            savoir-faire auprès de millions de visiteurs.
          </p>
          <p className={style.paragraphPagePro}>
            Gagnez du temps en rencontrant vos futurs clients en quelques clics.
          </p>
        </div>
        <div className={style.imageContainer}>
          <Image src={Presentation} layout="responsive" alt="image-travaux" />
        </div>
      </div>

      <div className={style.containerWelcomePro}>
        <div className={style.linkBecomeArtisan}>
          <Link passHref href="/pro/become-manomano-team">
            Devenez Artisan labelisé @ManoMano
          </Link>
        </div>
        <div className={style.linkPersonalSpace}>
          <Link passHref href="/pro/gestion">
            Accèdez à votre espace de gestion
          </Link>
        </div>
      </div>
    </>
  );
}
