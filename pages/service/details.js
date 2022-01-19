import React from "react";
import pax4 from "../../public/worker/pax4.jpg";
import Image from "next/image";
import ServiceShowResult from "../../components/ServiceShowResult";
import ServiceRating from "../../components/ServiceRating";
import ServiceMaps from "../../components/ServiceMaps";

const details = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h1> Fiche Artisan</h1>
          <h2> Therese Tapalo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            consectetur nunc a sapien aliquet, et.
          </p>
          <div className="shadow-xl w-auto m-8">
            <h3 className="text-lg"> J'interviens dans un rayon de 50km </h3>
            <ServiceMaps />
          </div>
        </div>
        <div className=" w-1/3 m-2 p-4">
          <ServiceShowResult />
        </div>
      </div>
      <div className="m-10 p-4 rounded-xl shadow-xl bg-slate-100">
        <ServiceRating />
      </div>
    </div>
  );
};

export default details;
