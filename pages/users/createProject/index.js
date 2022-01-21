import CardCreateProjet from "../../../components/cardCreateProjet";
import BackBtn from "../../../components/BackBtn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BtnUsers from "../../../components/Btn";
import Router from "next/router";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex ">
          <BackBtn content="Retour" url="/users" />
        </div>
        <div className="mr-20">
          <BtnUsers
            icon={<ShoppingCartIcon />}
            className="cursor-pointer"
            onClick={() => Router.push("/users/cart")}
            content="Mon Panier"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-center mt-6">
          Votre projet sera …
        </h1>

        <div className="flex flex-col justify-center items-center mt-12 gap-5 mb-20 overflow-hidden lg:flex-row ">
          <CardCreateProjet
            sx={{ maxWidth: 450, height: 450 }}
            onClick={() => Router.push("/users/newProject")}
            content="Un nouveau projet ?"
            image="/users/nouvelle.png"
            alt="image"
          />
          <CardCreateProjet
            sx={{ width: 450, height: 450 }}
            content="A l'exterieur ?"
            image="/users/Exterieur.png"
            alt="image"
          />
          <CardCreateProjet
            sx={{ width: 450, height: 450 }}
            content="A l'interieur ?"
            image="/users/Interieur.png"
            alt="image"
          />
        </div>
        
      </div>
    </>
  );
}
