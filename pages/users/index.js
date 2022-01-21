import style from "../../styles/User.module.css";
import Link from "next/link";

import Image from "next/image";
import Presentation from "../../public/images/man.png";
import bulle from "../../public/images/bulle.png";

import Layout from "../../components/Layout";
import DevisModuleArtisan from "../../components/DevisModuleArtisan";

export default function PagePro() {
  return (
<<<<<<< HEAD
    <>
      <Layout>
        <div className="mt-24" />

        <div className={style.infoContainerPagePro}>
          <div className={style.textContainerPagePro}>
            <p className={style.textTitlePagePro}>
              Besoin d&apos;aide? La ManoManoCommunauté est là pour ça!
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
            <Link passHref href="/users/createProject">
              <div className={style.linkBecomeArtisan}>
                Créer un nouveau projet
              </div>
            </Link>
            <Link passHref href="/users/myProject">
              <div className={style.linkPersonalSpace}>
                Accèdez à vos projets en cours
              </div>
            </Link>
            <Link passHref href="/service">
              <div className={style.linkPersonalSpaceArtisan}>
                Trouvez un artisan Labelisé @ManoManoCommunauté
              </div>
            </Link>
          </div>
          <div className={style.returnPro}>
            <h3 className={style.questionClient}>
              Besoin d&apos;aide? Vite sur le Forum!
            </h3>
            <div className={style.imageLink}>
              <Link passHref href="/service/forum" target="_blank">
                <a target="_blank">
                  <div className={style.linkForum}>
                    <Image src={bulle} height={60} width={60} alt="bulle" />
                    <span>FORUM</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
=======
    <Layout>
      <div className="flex justify-center items-center flex-col mt-12">
        <div className="mb-10">
          <BtnUsers
            icon={<AddIcon />}
            className="cursor-pointer bg-three"
            onClick={() => Router.push("users/createProject")}
            content="Projet en cour"
          />
        </div>
        <InputAutoComplete />
        <div className="mt-12 w-full px-10 flex ">
          <DevisModuleArtisan />
        </div>
        <main className="flex-grow-1" />
      </div>
    </Layout>
>>>>>>> 6e948b6175adb97bfecefab512626cb09e1077e8
  );
}
