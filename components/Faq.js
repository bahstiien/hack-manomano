import React from "react";
import Random1 from "../public/worker/random1.jpeg";
import Random2 from "../public/worker/random2.jpeg";
import Random3 from "../public/worker/random3.jpeg";
import Random4 from "../public/worker/random4.jpeg";
import Random5 from "../public/worker/random5.jpeg";

import Image from "next/image";

const faq = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700 flex flex-wrap ">
          <div className="container px-5 m-8 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Les questions de la communauté
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Vous avez une question ? Vous n&#39;êtes pas seul, partagez vos
                questions et vos réponses avec la communauté
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full m-4 lg:w-1/2 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center">
                    <Image
                      className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src={Random2}
                      alt="Profile picture"
                    />
                  </div>
                  <h2 className="font-bold ml-4">
                    {" "}
                    Question de Xavier de Nantes{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Bonjour à tous, Je souhaite réaliser une dalle béton
                    J&#39;ai besoind de 2 M3. Combien faut-il acheter de sac de
                    béton de 30 kg ? Un béton premier prix fait-il l&#39;affaire
                    ? Merci pour votre aide
                  </summary>

                  <span className="m-4">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center">
                        <Image
                          className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                          src={Random4}
                          alt="Profile picture"
                        />
                      </div>
                      <h2 className="font-bold ml-4">
                        {" "}
                        Réponse de Micheline de Clermont Ferrand{" "}
                      </h2>
                    </div>
                    <p className="mt-2">
                      Vue la quantité je préconise de prendre du melange en vrac
                      (big bag) et du ciment séparément. En effet le dosage à
                      250kgs/m3 me parait bien. Il faut donc 500kgs de ciment
                      soit 15 sacs de 35kgs et 2 big bags de mélange
                      sable/gravier
                    </p>
                    <div className="flex flex-col ">
                      <h2 className="font-bold mt-12">Votre réponse</h2>
                      <input
                        type="text"
                        placeholder="Votre répone"
                        className="m-2 bg-gray-50"
                      />{" "}
                      <button className=" items-center w-1/4 px-4 py-2 text-white font-semibold bg-four rounded">
                        Partage
                      </button>
                    </div>
                  </span>
                </details>
              </div>

              <div className="w-1/3 m-4 lg:w-1/2 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center">
                    <Image
                      className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src={Random1}
                      alt="Profile picture"
                    />
                  </div>
                  <h2 className="font-bold ml-4">
                    {" "}
                    Question de Nadine de Reims{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Bonjour, Pour un sèche serviette mixte 750W Recto-D digital,
                    en mode électrique faut-il tout de même le remplir en eau?
                    Le chauffage dans mon appartement est tout électrique, je
                    n&#39;ai pas de chaudière. Vous remerciant par avance.
                    cordialement
                  </summary>

                  <span className="m-4">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center">
                        <Image
                          className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                          src={Random3}
                          alt="Profile picture"
                        />
                      </div>
                      <h2 className="font-bold ml-4">
                        {" "}
                        Réponse de Micheline de Clermont Ferrand{" "}
                      </h2>
                    </div>
                    <p className="mt-2">
                      il eut été plus simple en étant tout élec de choisir un
                      sèche serviette élec seulement
                    </p>
                    <div className="flex flex-col ">
                      <h2 className="font-bold mt-12">Votre réponse</h2>
                      <input
                        type="text"
                        placeholder="Votre répone"
                        className="m-2 bg-gray-50"
                      />{" "}
                      <button className=" items-center w-1/4 px-4 py-2 text-white font-semibold bg-four rounded">
                        Partage
                      </button>
                    </div>
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default faq;
