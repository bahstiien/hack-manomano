import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";

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

      <button className="border-2 border-gray-300 p-2 m-4">
        Lancez la recherche
      </button>
    </div>
  );
};

export default ServiceSearch;
