import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PushPinIcon from "@mui/icons-material/PushPin";
import Router from "next/router";
import CardUsers from "../../../components/cardUsers";
import robineterie from "../../../public/users/robineteries.jpg";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import BackBtn from "../../../components/BackBtn";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 2px",
    },
  }));

  const cart1 = [
    {
      name: "pommeau",
      price: 128,
    },
    {
      name: "bac a douche",
      price: 238,
    },
    {
      name: "Robineterie",
      price: 56,
    },
  ];

  return (
    <>
      <div className="flex justify-between mt-36 border-b-4 border-black ">
        <BackBtn content="Retour" url="/users" />
        <div className="shoping mx-6 cursor-pointer flex ">
          <IconButton
            className="flex items-center justify-center"
            aria-label="cart"
          >
            <p className="font-bold mr-2 mb">panier</p>
            <StyledBadge badgeContent={3} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
        <div className="push mx-6 cursor-pointer flex">
          <IconButton
            className="flex items-center justify-center"
            aria-label="cart"
          >
            <PushPinIcon onClick={() => Router.push("/")} />
            <p className="font-bold mr-2 mb">Mis de côté</p>
          </IconButton>
        </div>
      </div>
      <div className="flex mt-12 items-center justify-center flex-col gap-5 px-10 ">
        <ul className="gap-5 flex flex-col overflow-hidden mb-10 w-full">
          {cart1.map((cart) => {
            return (
              <>
                <CardUsers
                  src={robineterie}
                  typo1="Bac à douche en acrylique bordé blanc brillant mod. Flower 80X90X4 rectangulaire"
                  countPlus={
                    <>
                      <p
                        className="text-xl font-bold cursor-pointer"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </p>
                      {count}
                      <p
                        className="text-xl font-bold cursor-pointer"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </p>
                    </>
                  }
                  price={cart.price}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
