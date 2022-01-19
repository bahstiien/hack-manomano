import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ServicePrice = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen  px-5 py-5">
        <div className="w-full mx-auto py-10  mb-10">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-one font-bold mb-5">
              Mes tarifs
            </h1>
            <h3 className="text-xl font-medium mb-10">
              De l'idée à l'agencement complet de votre prestation je vous
              assiste tout au long de votre projet
            </h3>
          </div>
          <div className="max-w-4xl mx-auto md:flex">
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  Conseil en agencement
                </h2>
                <h3 className="text-center font-bold text-4xl mb-5">
                  2 5 € / H{" "}
                </h3>
                <p className="text-center text-lg">
                  Je vous aide à l'agencement de votre projet{" "}
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-three hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  GESTION COMPLETE
                </h2>
                <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                  Sur devis
                </h3>

                <p className="text-center text-lg">
                  Je m'occupe entièrement de vos travaux, vous ne vous occupez
                  de rien :)
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-three hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  GESTION COMPLETE
                </h2>
                <h3 className="text-center font-bold text-4xl mb-5">
                  35 € / h
                </h3>
                <p className="text-center text-lg">
                  Je vous accompagne dans la réalisation de vos travaux.
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-three hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePrice;
