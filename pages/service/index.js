import React from "react";
import { useState } from "react";
import ServiceResult from "../../components/ServiceResult";
import ServiceResultNop from "../../components/ServiceResultNop";
import ServiceSearch from "../../components/serviceSearch";
import pax1 from "../../public/worker/pax1.jpg";
import pax2 from "../../public/worker/pax2.jpg";
import pax3 from "../../public/worker/pax3.jpg";
import pax4 from "../../public/worker/pax4.jpg";
import pax5 from "../../public/worker/pax5.jpg";
import pax6 from "../../public/worker/pax6.jpg";
import Link from "next/link";
import Layout from "../../components/Layout";

const Service = () => {
  const [isActiveBtn, setActiveBtn] = useState("true");
  const handleToggle = () => {
    setActiveBtn(!isActiveBtn);
  };
  return (
    <Layout>
      <div className="mb-24">
        <h1 className="text-five"> Service </h1>
        <ServiceSearch />
        <div className="flex justify-center">
          <button
            className="flew-row p-4 w-2/5 m-8 bg-four rounded-xl shadow-xl"
            onClick={handleToggle}
          >
            Lancez la recherche
          </button>
        </div>
        <div
          className={isActiveBtn ? "hidden" : "flex justify-around flex-wrap"}
        >
          <ServiceResult
            activity="Plomberie"
            img={pax1}
            note="4.1"
            nb="18"
            name="Jean Michel Pommeau"
            city="Lyon 3e"
            description="Passionné de fuite d'eau depuis mon enfance j'en ai fait mon métier"
            price={"45"}
          />
          <ServiceResultNop
            img={pax6}
            activity="Bricolage - Plomberie"
            note="2.9"
            nb="2"
            name="Véronique Sartre"
            city="VILLEURBANNE"
            description="Je m'occupe de petites taches de réparation sur la plomberie"
            price={"35"}
          />
          <ServiceResultNop
            img={pax2}
            activity="Rénovation - plomberie"
            note="4.5"
            nb="3"
            name="Auguste Reverdin"
            city="VAUX EN VELIN"
            description="Plombier depuis 15 ans je suis en mesure de vous aider dans la réalisation de vos projets"
            price={"40"}
          />

          <ServiceResult
            img={pax4}
            activity="Rénovation"
            note="4.7"
            nb="8"
            name="Therese Tapalo"
            city="GIVORS"
            description="Je suis passionnée de rénovation, je suis architecte d'intérieur, disponible et à votre écoute"
            price={"65"}
          />

          <ServiceResult
            img={pax3}
            activity="Plomberie"
            note="3.9"
            nb="4"
            name="Michel Lazard"
            city="GIVORS"
            description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
            price={"90"}
          />
          <ServiceResultNop
            img={pax5}
            activity="Bricolage"
            note="2.7"
            nb="2"
            name="Francis De La Fuit'Do"
            city="LYON 12e"
            description="Je suis toujours sous l'eau mais j'aime mon travail et rendre service aux gens"
            price={"15"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Service;
