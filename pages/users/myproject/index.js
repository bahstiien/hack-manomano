import Image from "next/image";
import Router from "next/router";
import BtnUsers from "../../../components/Btn";
import CardCreateProjet from "../../../components/cardCreateProjet";
import InputAutoComplete from "../../../components/inputAutoComplete";
export default function MyProject() {

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="my-10 font-bold">Mes Projets</h1>
        <div className="mb-10">
          <BtnUsers
            className="cursor-pointer"
            onClick={() => Router.push("createProject")}
            content="Créer un projet"
          />
        </div>
        <InputAutoComplete />
      </div>
      <div className="flex flex-col justify-center items-center mt-12 gap-5 mb-20 overflow-hidden ">
        <CardCreateProjet content="Un nouveau projet ?" image="/users/nouvelle.png" alt='image'/>
        <CardCreateProjet content="A l'exterieur ?" image="/users/Exterieur.png" alt='image'/>
        <CardCreateProjet content="A l'interieur ?" image="/users/Interieur.png" alt='image'/>

      </div>
    </>
  );
}
