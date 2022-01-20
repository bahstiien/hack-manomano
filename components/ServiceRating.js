import React, { useRef, useState } from "react";
import rating1 from "../public/worker/rating1.jpg";
import rating2 from "../public/worker/rating2.jpg";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper";

export default function App() {
  return (
    <div className="w-3/4">
      <div>
        <h1 className="text-5xl font-second text-one font-bold mb-5">
          Ils m&#39;ont fait confiance
        </h1>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          //   scrollbar={{
          //     hide: true,
          //   }}
          className="h-auto"
        >
          <SwiperSlide>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src={rating1}
                      alt="Profile picture"
                    />
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Jacques.</span>
                  <span className="ml-2 text-green-600 text-xs">
                    {" "}
                    Acheteur validé
                  </span>
                </p>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <div className="flex items-center mt-4 text-gray-600">
                  <div className="flex items-center">
                    <span className="text-sm">Qualité de la prestation</span>
                    <div className="flex items-center ml-2">
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-sm">
                      {" "}
                      Experience de Mano Mano communauté
                    </span>
                    <div className="flex items-center ml-2">
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-bold">
                    {" "}
                    Excellente prestation de Thérese pour ma salle de bain
                  </span>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <div className="flex items-center">
                    <span>Ce commentaire est utile ?</span>
                    <button className="flex items-center ml-6">
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                      </svg>
                      <span className="ml-2">5</span>
                    </button>
                    <button className="flex items-center ml-4">
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                      </svg>
                      <span className="ml-2">0</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-start mt-8">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src={rating2}
                      alt="Profile picture"
                    />
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Cécile</span>
                  <span className="ml-2 text-green-600 text-xs">
                    Acheteur validé
                  </span>
                </p>
                <div className="flex items-center mt-1">
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <div className="flex items-center mt-4 text-gray-600">
                  <div className="flex items-center">
                    <span className="text-sm">Qualité de la prestation</span>
                    <div className="flex items-center ml-2">
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-sm">
                      {" "}
                      Experience de Mano Mano communauté
                    </span>
                    <div className="flex items-center ml-2">
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        className="w-3 h-3 fill-current text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-bold">
                    {" "}
                    Thérèse est de très bon conseil
                  </span>
                  <p className="mt-1">
                    Thérese a été de très bons conseils pour la rénovation de ma
                    cuisine. Je la recommande vivement :)
                  </p>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                    <div className="flex items-center">
                      <span>Ce commentaire est utile ?</span>
                      <button className="flex items-center ml-6">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                        </svg>
                        <span className="ml-2">8</span>
                      </button>
                      <button className="flex items-center ml-4">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                        </svg>
                        <span className="ml-2">0</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
