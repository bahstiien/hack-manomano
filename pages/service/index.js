import React from "react";
import ServiceResult from "../../components/ServiceResult";
import ServiceSearch from "../../components/serviceSearch";
import guy1 from "../../public/worker/guy1.jpg";
import guy2 from "../../public/worker/guy2.jpg";
import pax3 from "../../public/worker/pax3.jpeg";
import pax4 from "../../public/worker/pax4.jpg";

const service = () => {
  return (
    <div>
      <h1> Service </h1>
      <ServiceSearch />

      <div className="flex">
        <ServiceResult
          img={guy1}
          name="Jean Michel Pommeau"
          city="Lyon 3e"
          description="Passionné de fuite d'eau depuis mon enfance j'en ai fait mon métier"
        />

        <ServiceResult
          img={pax4}
          name="Therese Tapalo"
          city="GIVORS"
          description="Pourquoi mettre une description ? Ce que je veux c'est réparer ta douche"
        />
      </div>
    </div>
  );
};

export default service;
<h1> Service </h1>;
