import style from "../../../styles/FormArtisan.module.css";
import Layout from "../../../components/Layout";
import BackBtn from "../../../components/BackBtn";

export default function FormArtisan() {
  return (
    <>
      <Layout>
        <div className="mt-8">
          <div className="flex ">
            <BackBtn content="Retour" url="/pro" />
          </div>
          <form className={style.createArtisanForm}>
            <h2 className={style.formTitle}>Créer votre fiche profil</h2>

            <div className={style.fullNameContainer}>
              <div className={style.nameContainer}>
                <h3 className={style.inputTitleForm}>Nom</h3>
                <input
                  type="text"
                  className={style.nameInputForm}
                  autoComplete="off"
                />
              </div>
              <div className={style.nameContainer}>
                <h3 className={style.inputTitleForm}>Prénom</h3>
                <input
                  type="text"
                  className={style.nameInputForm}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={style.fullNameContainer}>
              <div className={style.nameContainer}>
                <h3 className={style.inputTitleForm}>activité</h3>
                <input
                  type="text"
                  className={style.nameInputForm}
                  autoComplete="off"
                />
              </div>
              <div className={style.nameContainer}>
                <h3 className={style.inputTitleForm}>Localisation</h3>
                <input
                  type="text"
                  className={style.nameInputForm}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={style.descriptionContainer}>
              <h3 className={style.inputTitleForm}>Decription</h3>
              <textarea
                name="descriptio "
                className={style.textAreaForm}
                required
              />
            </div>

            <div className={style.uploadImageContainer}>
              <h3 className={style.inputTitleForm}>
                Téléchargez votre photo de profil
              </h3>
              <button className={style.uploadPhotoForm}>Choisir Photo</button>
            </div>

            <button type="submit" className={style.btnSubmitForm}>
              Envoyer le formulaire
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
