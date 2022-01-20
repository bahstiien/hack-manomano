import style from "../../styles/User.module.css";
import Link from "next/link";

import Image from "next/image";
import Presentation from "../../public/images/man.png";
import ImagePro from "../../public/images/ManoPro.png";
import Layout from "../../components/Layout";

export default function PagePro() {
  return (
    <>
      <Layout>
        <h1 className="text-five"> Bienvenue dans l&apos;espace pro </h1>

        <div className={style.infoContainerPagePro}>
          <div className={style.textContainerPagePro}>
            <p className={style.textTitlePagePro}>
              Besoin d&apos;aide? La ManoManoCommunauté est la pour ça!
            </p>
            <p className={style.paragraphPagePro}>
              Que ce soit pour vous aider à faire par vous même, ou qu&apos;un
              pro prenne le relai...
            </p>
            <p className={style.paragraphPagePro}>
              Les membres de ManoMano Communauté sont là pour ça..
            </p>
            <p className={style.paragraphPagePro}>
              Gagnez du temps en rencontrant les bons partenaires en quelques
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
