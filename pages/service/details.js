import React from "react";
import pax4 from "../../public/worker/pax4.jpg";
import Image from "next/image";
import ServiceShowResult from "../../components/ServiceShowResult";
import ServiceRating from "../../components/ServiceRating";
import ServiceMaps from "../../components/ServiceMaps";
import ServicePrice from "../../components/ServicePrice";
import ServiceCalendar from "../../components/ServiceCalendar";

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
            <div className=" w-2/3 m-2 p-4 shadow-xl rounded-xl text-center bg-gray-50">
              <ServiceShowResult />
            </div>

            <div className="text-one">
              <ul>
                <li className="text-one text-lg m-4">Travaux de rénovation</li>
                <li className="text-one text-lg m-4">Conseils en décoration</li>
                <li className="text-one text-lg m-4">Accompagnement</li>
                <li className="text-one text-lg m-4">Travaux de rénovation</li>
              </ul>
            </div>
          </div>

          <div className="justify-center bg-gray-50 mt-24">
            <ServicePrice />
          </div>
          <div className="bg-gray-50">
            <ServiceRating />
          </div>

          <div className="bg-gray-50 flex justify-around mt-12">
            <ServiceCalendar />
            <ServiceMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
