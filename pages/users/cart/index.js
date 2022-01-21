import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PushPinIcon from "@mui/icons-material/PushPin";
import Router from "next/router";
import CardUsers from "../../../components/cardUsers";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import BackBtn from "../../../components/BackBtn";
import { useState } from "react";
import CircularStatic from "../../../components/Loading";

export default function Index() {
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
      img: "/users/douche.webp",
      description: "Bac à douche en acrylique bordé blanc brillant mod",
    },
    {
      name: "bac a douche",
      price: 238,
      img: "/users/robineteries.jpg",
      description:
        "GROHE Grohtherm 800 Mitigeur thermostatique douche 1/2 avec ensemble de douche",
    },
    {
      name: "Robineterie",
      price: 13.91,
      img: "/users/sillicone.webp",
      description: "SILICONE CUISINES SALLES DE BAINS RATIO BL. 300 ml",
    },
  ];

  if (!cart1) {
    return <CircularStatic />;
  }

  return (
    <>
      <div className="flex mt-28">
        <div className="flex items-center">
          <BackBtn content="Retour" url="/users" />
          <div className="flex items-center ml-20">
            {!cart1 && <CircularStatic />}
            <IconButton
              aria-label="cart"
            >
              <p className="font-bold mr-2 mb">panier</p>
              <StyledBadge badgeContent={3} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
        <div className="flex ">
          {/* <IconButton
            className="flex items-center justify-center"
            aria-label="cart"
          >
            <PushPinIcon onClick={() => Router.push("/")} />
            <p className="font-bold mr-2 mb">Mis de côté</p>
          </IconButton> */}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 px-10 border-t-4 w-[90%] border-black mx-auto mt-0 ">
        <ul className="gap-5 flex flex-col overflow-hidden mt-10 lg:flex lg:flex-row">
          {cart1.map((cart) => {
            return (
              <>
                <CardUsers
                  src={cart.img}
                  typo1={cart.description}
                  price={`${cart.price}€`}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
