import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ServicePrice = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen  px-5 py-5">
        <div className="w-full mx-auto py-10  mb-10">
          <div className="max-w-4xl mx-auto md:flex">
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-second text-3xl font-bold uppercase mb-4">
                  Conseil en agencement
                </h2>
                <h3 className="text-center font-bold text-six text-3xl mb-5">
                  65€ / H{" "}
                </h3>
                <p className="text-center text-lg">
                  Je vous aide à l&#39;agencement de votre projet{" "}
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-four hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-second text-3xl font-bold uppercase mb-4">
                  GESTION COMPLETE
                </h2>
                <h3 className="text-center font-bold text-six text-5xl mb-5">
                  Sur devis
                </h3>

                <p className="text-center text-lg">
                  Je m&#39;occupe entièrement de vos travaux
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-four hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-second text-3xl font-bold uppercase mb-4">
                  AIDE AUX TRAVAUX
                </h2>
                <h3 className="text-center font-bold text-six text-3xl mb-5">
                  80€ / H
                </h3>
                <p className="text-center text-lg">
                  Je vous accompagne dans la réalisation de vos travaux.
                </p>
              </div>
              <div className="w-full">
                <button className="font-bold bg-four hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
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
