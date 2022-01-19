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
        <div className="w-2/3 m-8 p-4 shadow-xl rounded-xl text-center bg-gray-50">
          <h1> Fiche Artisan</h1>
          <h2> Therese Tapalo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            consectetur nunc a sapien aliquet, et.
          </p>
          <div className="flex  justify-around items-center w-auto m-8">
            <div>
              <ServiceMaps />
            </div>
            <div>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-1/3 m-2 p-4 shadow-xl rounded-xl text-center bg-gray-50">
          <ServiceShowResult />
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="w-2/3 m-8 p-4 shadow-xl rounded-xl text-center bg-gray-50">
          <ServicePrice />
        </div>
        <div className="w-2/3 m-8 p-4 shadow-xl rounded-xl text-center bg-gray-50">
          <ServiceRating />
        </div>
      </div>
    </div>
  );
};

export default details;
