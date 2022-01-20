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
      <div className=" flex-col">
        <section className="text-gray-700 flex ">
          <div className="">
            <div className="text-center mb-20">
              <h3 className="text-8xl text-center text-one font-second mt-24 mb-24">
                Les questions de la communauté
              </h3>
            </div>
            <div className="flex flex-wrap justify-around ">
              {/* ------- QUESTION 1 */}
              <div className=" w-2/5 m-4 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
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
                          src={Random5}
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
              {/* ------- QUESTION 2 ------- */}

              <div className=" w-2/5 m-4 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
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
                    Question de Nadine de Reims{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Nous avons fait poser 2 cuisines il y a 7 ans et les sorties
                    de mitigeurs de l&#39;évier se sont percées il y a 4 ans
                    1/2. Pensant à un problème de qualité, je les ai remplacés
                    par des modêles de chez Leroy-Merlin et ça recommance, la
                    sortie se perce sur le dessus ! Qui a une idée ?
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

              {/* ------- QUESTION 3 ------- */}
              <div className=" w-2/5 m-4 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
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
                    Question de Davis de Bordeaux{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Bonjour à tous, Combien de plinthe me faut il pour 4.80m de
                    longuer, en sachant que je veux des plinthes blanches avec
                    crochet?
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

              {/* ------- QUESTION 4 ------- */}
              <div className=" w-2/5 m-4 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
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
                    Question de Marine de Brest{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Bonjour, je voudrais savoir si le carrelage grés cerame est
                    il aux normes alimentaire ?
                  </summary>

                  <span className="m-4">
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

              {/* ------- QUESTION 5 ------- */}
              <div className=" w-2/5 m-4 px-4 py-2 bg-gray-50 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center">
                    <Image
                      className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src={Random5}
                      alt="Profile picture"
                    />
                  </div>
                  <h2 className="font-bold ml-4">
                    {" "}
                    Question de Jerome de Strasbourg{" "}
                  </h2>
                </div>
                <details className="mb-4">
                  <summary className="font-semibold   rounded-md py-2 px-4">
                    Bonjour, Puis-je poser la commende du robinet à droite ou à
                    gauche ? Merci.
                  </summary>

                  <span className="m-4">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default faq;
