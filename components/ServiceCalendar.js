import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ServiceCalendar = () => {
  return (
    <div>
      <h1 className="text-5xl font-second text-one font-bold mb-5">
        Echangeons sur votre projet
      </h1>
      <div className="h-screen bg-gray-50 p-6">
        <div className="flex flex-col bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
          <div className="flex-row flex">
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
          <div className="flex flex-col justify-center items-center">
            <p className="hover:bg-three hover:text-five w-1/4 h-10 flex justify-center items-center rounded-2xl text-xl m-2 cursor-pointer">
              11: 00
            </p>
            <p className="hover:bg-three hover:text-five w-1/4 h-10 flex justify-center items-center rounded-2xl text-xl m-2 cursor-pointer">
              11: 30{" "}
            </p>
            <p className="hover:bg-three hover:text-five w-1/4 h-10 flex justify-center items-center rounded-2xl text-xl m-2 cursor-pointer">
              18: 15{" "}
            </p>
            <p className="hover:bg-three hover:text-five w-1/4 h-10 flex justify-center items-center rounded-2xl text-xl m-2 cursor-pointer">
              19: 00{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="flew-row p-4 w-2/5 m-8 text-white font-second text-3xl bg-four rounded-xl shadow-xl">
              Confirmez ce RDV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCalendar;
