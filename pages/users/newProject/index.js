import CardCreateProjet from "../../../components/cardCreateProjet";
import BackBtn from "../../../components/BackBtn";
import Router from "next/router";

export default function index() {
  return (
    <div>
      <div className="flex ">
        <BackBtn content="Retour" url="/users/createProject" />
      </div>
      <div className="flex gap-5 justify-center items-center flex-col mt-10 md:flex-row md:gap-3 md:flex-wrap">
        <CardCreateProjet
          className=" shadow-2xl"
          sx={{ width: 350, height: 150 }}
          onClick={() => Router.push("newProject/ProjetFutur")}
          content="Logement entier"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Garage"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Salon"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Cuisine"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Chambre"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Salle de bain"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Toilette"
        />
        <CardCreateProjet
          onClick={() => Router.push("newProject/ProjetFutur")}
          sx={{ width: 350, height: 150 }}
          content="Autres ..."
        />
      </div>
    </div>
  );
}
