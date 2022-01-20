import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ArtisanCalendar() {
  return (
    <div>
      <div className="h-screen p-6">
        <div className="flex flex-col shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
          <div className="flex-row flex  justify-between">
            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Lundi{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    24{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Mar{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    25{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Mer{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    26
                  </p>
                </div>
              </div>
            </div>

            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Jeu{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    27{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex group bg-four shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-100 text-sm"> Ven </p>
                  <p className="text-gray-100  mt-3 font-bold"> 28 </p>
                </div>
              </div>
            </div>

            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Sam{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    29{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex group hover:bg-three hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                    {" "}
                    Dim{" "}
                  </p>
                  <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                    {" "}
                    30{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start mt-8">
            <div className=" w-3/4 h-10 flex rounded-2xl text-md m-2 cursor-pointer">
              <p>
                <span className="p-2 border-one border-2 rounded-2xl m-2">
                  08: 00 <ArrowForwardIcon /> 11: 00
                </span>
                Aménagement de la cuisine de Paul - Secteur LYON 3 - DOSSIER
                #271091
              </p>
            </div>
            <div className=" w-3/4 h-10 flex justify-start rounded-2xl text-md m-2 cursor-pointer">
              <p>
                <span className="p-2 border-one border-2 rounded-2xl m-2">
                  13: 30 <ArrowForwardIcon /> 15: 00
                </span>
                Suivi des travaux - Cuisine de Bruno - Secteur LYON 9 - DOSSIER
                #060161
              </p>
            </div>

            <div className=" w-3/4 h-10 flex justify-start rounded-2xl text-md m-2 cursor-pointer">
              <p>
                <span className="p-2 border-one border-2 rounded-2xl m-2">
                  15: 15 <ArrowForwardIcon /> 18: 00
                </span>
                Réparation fuite WC - FRANCIS CASSOULET - Secteur LYON 2 -
                DOSSIER #349557
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="flew-row p-4 w-2/5 m-8 text-white font-second text-3xl bg-four rounded-xl shadow-xl">
              Modifiez vos disponibilités{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
