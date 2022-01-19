import style from "../../../styles/FormArtisan.module.css";

export default function FormArtisan() {
  return (
    <>
      <h1 className="text-five"> Devenir Artisan @ManoMano </h1>
      <form className={style.formArtisan}>
        <h2 className={style.formTitle}>Créer votre fiche profil</h2>

        <button className={style.btnUpload}>UPLOAD</button>
        <div className={style.nameContainer}>
          <h3 className={style.littleTitle}>Nom</h3>
          <input
            type="text"
            id="name"
            name="UserName"
            placeholder="User Name"
            autoComplete="off"
          />
          <h3 className={style.littleTitle}>Prénom</h3>
          <input
            type="text"
            id="name"
            name="UserName"
            placeholder="User Name"
            autoComplete="off"
          />
        </div>

        <h3 className={style.littleTitle}>Decription</h3>
        <textarea name="new-post" id="new-post-area" required />

        <button type="submit" id="add-post-btn">
          Envoyer le formulaire
        </button>
      </form>
    </>
  );
}
