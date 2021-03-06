import Link from "next/link";
import style from "../../styles/PagePro.module.css";
import Image from "next/image";
import Presentation from "../../public/images/presentation.png";
import ImagePro from "../../public/images/ManoPro.png";
import Layout from "../../components/Layout";

export default function PagePro() {
  return (
    <>
      <Layout>
        <div className="mt-24" />

        <div className={style.infoContainerPagePro}>
          <div className={style.textContainerPagePro}>
            <p className={style.textTitlePagePro}>
              Artisan, si vous passiez au e-commerce?
            </p>
            <p className={style.paragraphPagePro}>
              En plus de profiter de nos services, ManoMano vous propose
              désormais de faire partie de la communauté.
            </p>
            <p className={style.paragraphPagePro}>
              Intégrez dès à présent la ManoManoCommunité et mettez en avant vos
              savoir-faire auprès de millions de visiteurs.
            </p>
            <p className={style.paragraphPagePro}>
              Gagnez du temps en rencontrant vos futurs clients en quelques
              clics.
            </p>
          </div>
          <div className={style.imageContainer}>
            <Image src={Presentation} layout="responsive" alt="image-travaux" />
          </div>
        </div>
        <div className={style.containerWelcomePro}>
          <div className={style.containerLinkPro}>
            <Link passHref href="/pro/become-manomano-team">
              <div className={style.linkBecomeArtisan}>
                Devenez Artisan labelisé @ManoMano
              </div>
            </Link>
            <Link passHref href="/pro/gestion">
              <div className={style.linkPersonalSpace}>
                Accèdez à votre espace de gestion
              </div>
            </Link>
          </div>
          <div className={style.returnPro}>
            <h3 className={style.questionClient}>Pas encore de compte Pro?</h3>
            <div className={style.imageLink}>
              <Link passHref href="https://www.manomano.fr/pro" target="_blank">
                <a target="_blank">
                  <Image
                    src={ImagePro}
                    layout="responsive"
                    alt="image-travaux"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
