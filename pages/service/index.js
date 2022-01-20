import React from "react";
import ServiceResult from "../../components/ServiceResult";
import ServiceResultNop from "../../components/ServiceResultNop";
import ServiceSearch from "../../components/serviceSearch";
import pax1 from "../../public/worker/pax1.jpg";
import pax2 from "../../public/worker/pax2.jpg";
import pax3 from "../../public/worker/pax3.jpg";
import pax4 from "../../public/worker/pax4.jpg";
import pax5 from "../../public/worker/pax5.jpg";
import pax6 from "../../public/worker/pax6.jpg";

const service = () => {
  return (
    <div>
      <h1 className="text-five"> Service </h1>
      <ServiceSearch />

      <div className="flex justify-around flex-wrap">
        <ServiceResult
          activity="Plomberie"
          img={pax1}
          note="4.1"
          nb="18"
          name="Jean Michel Pommeau"
          city="Lyon 3e"
          description="Passionné de fuite d'eau depuis mon enfance j'en ai fait mon métier"
          price={"15"}
        />
        <ServiceResultNop
          img={pax6}
          activity="Rénovation"
          note="4.7"
          nb="8"
          name="Therese Tapalo"
          city="GIVORS"
          description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
          price={"35"}
        />
        <ServiceResultNop
          img={pax2}
          activity="Rénovation"
          note="4.7"
          nb="8"
          name="Therese Tapalo"
          city="GIVORS"
          description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
          price={"35"}
        />
        <ServiceResult
          img={pax4}
          activity="Rénovation"
          note="4.7"
          nb="8"
          name="Therese Tapalo"
          city="GIVORS"
          description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
          price={"35"}
        />
        <ServiceResult
          img={pax3}
          activity="Rénovation"
          note="4.7"
          nb="8"
          name="Therese Tapalo"
          city="GIVORS"
          description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
          price={"35"}
        />
        <ServiceResult
          img={pax5}
          activity="Bricolage"
          note="3.7"
          nb="2"
          name="Francis De La Fuit'Do"
          city="LYON 12e"
          description="Je suis toujours sous l'eau mais j'aime mon travail et rendre service aux gens"
          price={"25"}
        />
      </div>
    </div>
  );
};

export default service;
<h1> Service </h1>;
