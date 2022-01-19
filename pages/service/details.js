import React from "react";
import pax4 from "../../public/worker/pax4.jpg";
import Image from "next/image";
import ServiceShowResult from "../../components/ServiceShowResult";
import ServiceRating from "../../components/ServiceRating";
import ServiceMaps from "../../components/ServiceMaps";
import ServicePrice from "../../components/ServicePrice";

const details = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div className="w-2/3 m-8 p-4 flex-wrap shadow-xl rounded-xl text-center bg-gray-50">
          <div className="mb-12">
            <h1> Fiche Artisan</h1>
            <h2> Therese Tapalo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              consectetur nunc a sapien aliquet, et.
            </p>
          </div>
          <div className="flex  justify-around items-center w-auto m-8">
            <div className=" w-1/3 m-2 p-4 shadow-xl rounded-xl text-center bg-gray-50">
              <ServiceShowResult />
            </div>

            <div>
              <ServiceMaps />
            </div>
          </div>

          <div className="justify-center bg-gray-50 mt-24">
            <ServicePrice />
          </div>
          <div className="justify-center bg-gray-50">
            <ServiceRating />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col"></div>
    </div>
  );
};

export default details;
