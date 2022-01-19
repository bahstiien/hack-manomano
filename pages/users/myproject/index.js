import Router from "next/router";
import BtnUsers from "../../../components/Btn";


export default function MyProject() {
  return (
    <>
    <div className="flex justify-center items-center flex-col">
      <h1 className="my-10 font-bold">Mes Projets</h1>
      <BtnUsers content="Créer un projet"/>
      <p className="my-10">
        Vous avez déjà créé un projet ?
        <span
          className="text-red-400 cursor-pointer"
          onClick={() => Router.push("/")}
        >
          Y accéder
        </span>
      </p>

    </div>
    Mes devis
  </>
  );
}
