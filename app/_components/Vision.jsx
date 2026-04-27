"use client";

import React from "react";
import Image from "next/image";

const Vision = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Mantenemos los aspect-ratio, pero nos aseguramos de que la imagen 
        siempre cubra el área total para eliminar franjas laterales.
      */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[2.4/1] lg:aspect-[25/10]">
        <Image
          src="/images/vision.webp"
          alt="Prinx - Innovación, Tecnología y Pasión"
          fill
          priority
          /* CAMBIO CLAVE: 
             'object-cover' estira la imagen para llenar el ancho y alto, 
             eliminando cualquier borde negro.
          */
          className="object-cover object-left"
          sizes="100vw"
        />
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
    </section>
  );
};

export default Vision;
