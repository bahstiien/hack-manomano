import BackBtn from "../../../components/BackBtn";
import CardCreateProjet from "../../../components/cardCreateProjet";
import Router from "next/router";
import Layout from "../../../components/Layout";

export default function ProjetFutur() {
  return (
    <Layout>
      <div>
        <div className="flex ">
          <BackBtn content="Retour" url="/users/newProject" />
        </div>
        <h1 className="text-3xl font-bold text-center mt-6">
          Votre projet démarre...
        </h1>
        <div className="flex gap-5 justify-center items-center flex-col mt-10 md:flex-row md:gap-3 md:flex-wrap">
          <CardCreateProjet
            sx={{ width: 350, height: 150 }}
            content="Mon projet a deja commencé"
          />
          <CardCreateProjet
            sx={{ width: 350, height: 150 }}
            content="Le plutot possible"
          />
          <CardCreateProjet
            sx={{ width: 350, height: 150 }}
            content="Dans les semaines a venir"
          />
          <CardCreateProjet
            sx={{ width: 350, height: 150 }}
            content="Dans plus de 6 mois"
          />
        </div>
      </div>
    </Layout>
  );
}
