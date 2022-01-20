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
import CircularStatic from "../../../components/Loading";

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
      img:"/users/douche.webp",
      description:"Bac à douche en acrylique bordé blanc brillant mod",
    },
    {
      name: "bac a douche",
      price: 238,
      img:"/users/robineteries.jpg",
      description:"Bac à douche",

    },
    {
      name: "Robineterie",
      price: 56,
      img:"/users/Exterieur.png",
      description:"Bac à douche en acrylique",

    },
  ];

  if (!cart1) {
    return <CircularStatic />
  }

  return (
    <>
      <div className="flex mt-36">
        <BackBtn content="Retour" url="/users" />
        <div className="mx-6 flex ">
        {!cart1 && <CircularStatic />}
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
        <div className="flex ml-10">
          <IconButton
            className="flex items-center justify-center"
            aria-label="cart"
          >
            <PushPinIcon onClick={() => Router.push("/")} />
            <p className="font-bold mr-2 mb">Mis de côté</p>
          </IconButton>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 px-10 border-t-4 w-[90%] border-black mx-auto ">
        <ul className="gap-5 flex flex-col overflow-hidden mt-10">
          {cart1.map((cart) => {
            return (
              <>
                <CardUsers
                  src={cart.img}
                  typo1={cart.description}
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
