import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PushPinIcon from "@mui/icons-material/PushPin";
import Router from "next/router";

export default function index() {
  return (
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
  );
}
