import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PushPinIcon from "@mui/icons-material/PushPin";
import Router from "next/router";
import CardUsers from "../../../components/cardUsers";
import robineterie from "../../../public/users/robineteries.jpg";
import douche from "../../../public/users/douche.webp";

export default function index() {
  return (
    <>
      <div className="flex justify-between mt-36 border-b-4 border-black mx-4">
        <div className="shoping mx-6 cursor-pointer flex ">
          <ShoppingCartIcon onClick={() => Router.push("/")} />
          <p>panier</p>
        </div>
        <div className="push mx-6 cursor-pointer flex">
          <PushPinIcon onClick={() => Router.push("/")} />
          <p>Mis de côté</p>
        </div>
      </div>
      <div className="flex mt-12 items-center justify-center flex-col gap-5 px-10 ">
        <CardUsers
          src={robineterie}
          typo1="Bac à douche en acrylique bordé blanc brillant mod. Flower 80X90X4 rectangulaire"
          className="border-black border-2"
        />
        <CardUsers
          src={douche}
          typo1="Bac à douche en acrylique bordé blanc brillant mod. Flower 80X90X4 rectangulaire"
        />
        <CardUsers
          src={robineterie}
          typo1="Bac à douche en acrylique bordé blanc brillant mod. Flower 80X90X4 rectangulaire"
        />
      </div>
    </>
  );
}
