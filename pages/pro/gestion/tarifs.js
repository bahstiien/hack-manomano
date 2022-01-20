import Layout from "../../../components/Layout";
import DashboardArtisan from "../../../components/DashboardArtisan";
import style from "../../../styles/Tarifs.module.css";
import DevisModuleArtisan from "../../../components/DevisModuleArtisan";

export default function Tarifs() {
  return (
    <>
      <Layout>
        <DashboardArtisan />
        <div className={style.tarifsInfoContainer}>
          <h2 className={style.infoTitleTarifs}>
            Informez vos visiteurs de vos bases tarifaires
          </h2>
          <div className={style.infoTextTarifs}>
            Ces informations seront visibles par tout les utilisateurs ManoMano
            Communauté qui visiterons votre profil
          </div>
          <div className={style.tarifInputContainer}>
            <div className={style.tarifInput}>
              <h3 className={style.inputTitleForm}>Taux horaire prestation</h3>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                className={style.priceInputForm}
                autoComplete="off"
                placeholder="60"
              />
              €/TTC
            </div>
            <div className={style.tarifInput}>
              <h3 className={style.inputTitleForm}>
                Taux horaire conseil/aide
              </h3>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                className={style.priceInputForm}
                autoComplete="off"
                placeholder="50"
              />
              €/TTC
            </div>
            <div className={style.tarifInput}>
              <h3 className={style.inputTitleForm}>
                Gestion complète d&apos;un projet
              </h3>
              <input
                type="text"
                className={style.priceInputTextForm}
                autoComplete="off"
                value="sur devis"
              />
            </div>
            <button className={style.validationBtnTarfis}>
              Valider ces tarifs
            </button>
          </div>
          <h2 className={style.infoTitleDevis}>
            Gerez vos devis pour la ManoManoCommunauté
          </h2>
          <div className={style.infoTextTarifs}>
            Ces informations seront visibles uniquements par vos destinaitaires
          </div>
          <DevisModuleArtisan />

          <h2 className={style.infoTitleDevis}>Partagez vos devis Pdf</h2>
          <div className={style.infoTextTarifs}>
            Module d&apos;envoi de votre devis à votre nouveau client
          </div>
          <div className={style.devisInputContainer}>
            <div className={style.devisContainer}>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>
                  Prix total du devis TTC
                </h3>
                <input
                  type="number"
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                  className={style.priceInputForm}
                  autoComplete="off"
                  placeholder="prix"
                />
                €/TTC
              </div>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>
                  Téléchargez votre devis en pdf
                </h3>
                <button className={style.btnUploadDevis}>
                  Choisir le fichier
                </button>
              </div>
              <div className={style.tarifInput}>
                <h3 className={style.inputTitleForm}>
                  Pseudonyme du destinataire
                </h3>
                <input
                  type="text"
                  className={style.priceInputTextForm}
                  autoComplete="off"
                  placeholder="pseudonyme"
                />
              </div>
            </div>
            <div className={style.messageAndSend}>
              <div className={style.littleDivNoName}>
                <h3 className={style.textAreaTitleForm}>
                  Message à votre destinaire
                </h3>
                <textarea
                  name="description "
                  className={style.textAreaForm}
                  placeholder="Votre message ici"
                  required
                />
              </div>

              <button className={style.sendBtnTarfis}>Envoyer</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
