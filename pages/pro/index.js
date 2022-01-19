import Link from "next/link";
import style from "../../styles/PagePro.module.css";
import Image from "next/image";

export default function PagePro() {
  return (
    <>
      <h2 className={style.titlePagePro}>Bienvenue dans l&apos;espace pro</h2>
      <div className={style.infoContainerPagePro}>
        <div className={style.textContainerPagePro}>
          <p className={style.textTitlePagePro}>
            Artisan, si vous passiez au e-commerce?
          </p>
          <p className={style.paragraphPagePro}>
            En plus de profitez de nos services, ManoMano vous propose désormais
            de faire partie de la communauté.
          </p>
          <p className={style.paragraphPagePro}>
            Intégrez dès à présent la ManoManoCommunité et mettez en avant vos
            savoir-faire auprès de millions de visiteurs. Gagnez du temps en
            rencontrant vos futur client en quelques clics.
          </p>
        </div>
      </div>
      <div className={style.containerWelcomePro}>
        <div className={style.linkProPage}>
          <Link passHref href="/pro/become-manomano-team">
            Devenez Artisan labelisé @ManoMano
          </Link>
        </div>
        <div className={style.linkProPage}>
          <Link passHref href="/pro/gestion">
            Accèdez à votre espace de gestion
          </Link>
        </div>
      </div>
    </>
  );
}
