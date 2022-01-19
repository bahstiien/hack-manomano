// import React from "react";
// import guy1 from "../public/worker/guy1.jpg";
// import pax4 from "../public/worker/pax4.jpg";
// import Image from "next/image";
// import SmallLogo from "../public/smallLogo.jpeg";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// const test = (props) => {
//   return (
//     <div className="flex flex-col justify-center h-screen">
//       <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
//         <div className="w-full md:w-1/3 bg-white grid place-items-center">
//           <Image src={props.img} alt="tailwind logo" className="rounded-xl" />
//         </div>
//         <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
//           <div className="flex justify-between item-center">
//             <p className="text-gray-500 font-medium hidden md:block">
//               {props.activity}
//             </p>
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-yellow-500"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               <p className="text-gray-600 font-bold text-sm ml-1">
//                 {props.note}
//                 <span className="text-gray-500 font-normal">
//                   ({props.nb} commentaires)
//                 </span>
//               </p>
//             </div>
//             <div className="bg-four px-3 py-1 flex items-center justify-center rounded-full text-xs font-medium text-gray-800 hidden md:block ">
//               <span>Approuvé</span>
//               <Image
//                 src={SmallLogo}
//                 width="20px"
//                 height="20px"
//                 classNameName="rounded-xl"
//                 alt="profil"
//               />
//             </div>
//           </div>
//           <h3 className="font-black text-gray-800 md:text-3xl text-xl">
//             {props.name}
//           </h3>
//           <div className="ml-8">
//             <LocationOnIcon /> {props.city}
//           </div>
//           <p className="md:text-lg text-gray-500 text-base">
//             {props.description}
//           </p>
//           <p className="text-xl font-black text-gray-800">
//             Prestation à partir de {props.price}€
//             <span className="font-normal text-gray-600 text-base">/h</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default test;
