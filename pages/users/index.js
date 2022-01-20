import Router from "next/router";
import BtnUsers from "../../components/Btn";
import CardCreateProjet from "../../components/cardCreateProjet";
import InputAutoComplete from "../../components/inputAutoComplete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";

export default function MyProject() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-12">
        <div className="mb-10">
          <BtnUsers
            icon={<AddIcon />}
            className="cursor-pointer"
            onClick={() => Router.push("users/createProject")}
            content="Créer un projet"
          />
        </div>
        <div className="mb-10">
          <BtnUsers
            icon={<ShoppingCartIcon />}
            className="cursor-pointer"
            onClick={() => Router.push("users/cart")}
            content="Mon Panier"
          />
        </div>
        <InputAutoComplete />
      </div>
      <div className="flex flex-col justify-center items-center mt-12 gap-5 mb-20 overflow-hidden ">
        <CardCreateProjet
          content="Un nouveau projet ?"
          image="/users/nouvelle.png"
          alt="image"
        />
        <CardCreateProjet
          content="A l'exterieur ?"
          image="/users/Exterieur.png"
          alt="image"
        />
        <CardCreateProjet
          content="A l'interieur ?"
          image="/users/Interieur.png"
          alt="image"
        />
      </div>
    </>
  );
}
