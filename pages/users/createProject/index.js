import { height } from "@mui/system";
import CardCreateProjet from "../../../components/cardCreateProjet";

export default function index() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">
        Votre projet sera …
      </h1>
      <div className="flex gap-5 justify-center items-center flex-col mt-10 md:flex-row md:gap-2 md:flex-wrap">
        <CardCreateProjet className=" shadow-2xl" sx={{width :350, height:150}} content="Logement entier"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Garage" />
        <CardCreateProjet sx={{width :350, height:150}} content="Salon"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Cuisine"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Chambre"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Salle de bain"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Toilette"/>
        <CardCreateProjet sx={{width :350, height:150}} content="Autres ..."/>

      </div>
    </div>
  );
}
