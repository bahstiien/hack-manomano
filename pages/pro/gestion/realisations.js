import Layout from "../../../components/Layout";
import DashboardArtisan from "../../../components/DashboardArtisan";
import style from "../../../styles/Realisation.module.css";
import Link from "next/link";
import ProjectModuleArtisan from "../../../components/ProjectModulArtisan";

export default function Realisations() {
  return (
    <>
      <Layout>
        <DashboardArtisan />
        <div className={style.tarifsInfoContainer}>
          <h2 className={style.infoTitleDevis}>Publier vos projets</h2>
          <div className={style.infoTextTarifs}>
            Les visiteurs pourront voir les photos de votre travail
          </div>
          <div className={style.devisInputContainer}>
            <div className={style.devisContainer}>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>date de votre projet</h3>
                <input type="date" className={style.priceInputForm} />
              </div>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>
                  Titre de votre publication
                </h3>
                <input
                  type="text"
                  className={style.priceInputTextForm}
                  autoComplete="off"
                  placeholder="projet de salle de bain"
                />
              </div>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>Téléchargez vos photos</h3>
                <button className={style.btnUploadDevis}>
                  Choisir les fichiers
                </button>
              </div>
            </div>
            <div className={style.messageAndSend}>
              <div className={style.littleDivNoName}>
                <h3 className={style.textAreaTitleForm}>
                  Quelques mots pour expliquer
                </h3>
                <textarea
                  name="description "
                  className={style.textAreaForm}
                  placeholder="Votre message ici"
                  required
                />
              </div>
              <Link passHref href="/service/details">
                <button className={style.sendBtnTarfis}>Publier</button>
              </Link>
            </div>
          </div>

          <div className={style.containerRealisation}>
            <ProjectModuleArtisan />
            <div className={style.ratingView}></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
