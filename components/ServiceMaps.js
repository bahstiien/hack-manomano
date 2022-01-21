import React from "react";
import Maps from "../public/maps.png";
import Image from "next/image";

const ServiceMaps = () => {
  return (
    <div>
      <h1 className="text-2xl text-one font-bold mb-5">Rayon d&#39;action</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34172.60115643604!2d4.7350794399372615!3d45.59009459374567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e4026331586d%3A0x408ab2ae4bb23f0!2s69700%20Givors!5e0!3m2!1sen!2sfr!4v1642609871251!5m2!1sen!2sfr"
        width="400px"
        height="350px"
        // allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
};

export default ServiceMaps;
