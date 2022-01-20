import React from "react";

import ServiceShowResult from "../../components/ServiceShowResult";
import ServiceRating from "../../components/ServiceRating";
import ServicePrice from "../../components/ServicePrice";
import ServiceCalendar from "../../components/ServiceCalendar";
import Layout from "../../components/Layout";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConstructionIcon from "@mui/icons-material/Construction";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HelpIcon from "@mui/icons-material/Help";

const details = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-around mb-24">
          <div className="w-full  flex-wrap shadow-xl rounded-xl text-center bg-gray-50 md:w-2/3 m-8 p-4 ">
            <div className="mb-12">
              <h2 className="text-7xl font-bold font-second text-one mt-8">
                La gestion complète de votre projet
              </h2>
              <p className="text-3xl text-one font-second italic mt-2">
                Avec Thérèse Tapalo
              </p>

              <div className="mt-8">
                <LocationOnIcon />
                <span className="font-second text-2xl">
                  LYON 3e - Je me déplace dans un rayon de 50km autour de Lyon
                </span>
              </div>
            </div>
            <div className="flex flex-col  justify-around items-center w-auto sm:flex-row m-8">
              <div className="w-10/12 shadow-xl rounded-xl text-center bg-gray-50 md:w-2/5">
                <ServiceShowResult />
              </div>

              <div className="text-one font-second mt-12  sm:w-1/3 ">
                <ul>
                  <li className="text-one text-4xl m-4">
                    <ConstructionIcon />
                    <span className="ml-2">Travaux de rénovation</span>
                  </li>
                  <li className="text-one text-4xl m-4">
                    <LightbulbIcon />
                    <span className="ml-2"> Conseils en décoration</span>
                  </li>
                  <li className="text-one text-4xl m-4">
                    <HelpIcon />
                    <span className="ml-2">Accompagnement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex justify-center flex-col bg-gray-50 mt-24 sm:flex-row">
              <div>
                <ServiceCalendar />
              </div>
              <div>
                <ServicePrice />
              </div>
            </div>
            <div className="bg-gray-50 h-auto flex justify-center">
              <ServiceRating />
            </div>

            <div className="bg-gray-50 flex justify-around mt-8"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default details;
