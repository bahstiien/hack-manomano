import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { InputRounded } from "@mui/icons-material";

const ServiceSearch = () => {
  return (
    <div>
      <div className="border-2 rounded-xl w-1/3 flex justify-between ml-2 items-center">
        {/* -------- INPUT RECHERCHE */}
        <input
          type="text"
          className=" h-12 w-full p-6 "
          placeholder="Trouvez un artisan au meilleur prix près de chez vous"
        />
        <div className="mx-2">
          <SearchIcon />
        </div>
      </div>

      {/* -------- INPUT RECHERCHE VILLE*/}
      <div className="m-4">
        <button className="flew-row border-2 p-2 h-12 border-gray-300">
          <span> Me Geolocaliser </span>
          <MyLocationIcon />
        </button>

        <span> OU </span>
        <input
          type="text"
          className=" h-12 w-96 p-6 border-gray-300 border-2"
          placeholder="Votre ville"
        />
      </div>

      <span> 0 </span>
      <input type="range" min="0" max="50" />
      <span> 50 km </span>
      <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-three rounded-lg hover:bg-four focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Lancez la recherche
      </button>
    </div>
  );
};

export default ServiceSearch;
