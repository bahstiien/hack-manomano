import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SmallLogo from "../public/smallLogo.jpeg";
import Image from "next/image";

const ServiceSearch = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" rounded-2xl w-2/3 flex justify-between ml-2 items-center">
          {/* -------- INPUT RECHERCHE */}
          <input
            type="text"
            className=" h-14 w-full p-6 rounded-2xl "
            placeholder="Trouvez un artisan au meilleur prix près de chez vous"
          />
          <div className="mx-2">
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* -------- INPUT RECHERCHE VILLE*/}
      <div className=" flex justify-center items-center m-4">
        <div className="border-2 h-12 w-96 p-6 mx-8  rounded-2xl flex justify-around bg-gray-50 items-center">
          <MyLocationIcon />
          <input type="text" placeholder="Votre ville" />
        </div>
        <button className="flew-row p-4  bg-six rounded-xl shadow-xl">
          <Image src={SmallLogo} width="20px" height="20px" alt="logo" />
          <span className="text-gray-100 m-2">Artisan labéllisé ManoMano</span>
        </button>
      </div>

      {/* <span> 0 </span>
      <input type="range" min="0" max="50" />
      <span> 50 km </span> */}
      <div className="flex justify-center">
        <button className="flew-row p-4 w-2/5 m-8 bg-four rounded-xl shadow-xl">
          Lancez la recherche
        </button>
      </div>
    </div>
  );
};

export default ServiceSearch;
