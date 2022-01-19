import React from "react";
import guy1 from "../public/worker/guy1.jpg";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ServiceResult = (props) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className=" bg-white rounded-lg  border h-full border-gray-200 shadow-xl">
          <div className="flex flex-col items-center pb-10">
            <div className="max-w-xs">
              <Image
                className="mb-3  rounded-xl shadow-lg"
                src={props.img}
                alt="Work guy"
              />
            </div>
            <h3 className="mb-1 mt-2 border-gray-500text-xl font-medium text-gray-900">
              {props.name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props.work}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <LocationOnIcon /> {props.city}
            </span>

            <p className="text-sm m-2 w-48 text-center italic">
              {props.description}
            </p>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Demandez un RDV
              </button>
              <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceResult;
