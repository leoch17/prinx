"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const History = () => {
  const sections = [
    {
      id: 1,
      title: "CHINA",
      image: "/images/trayectory/history-2.webp",
      text1:
        "La historia de la empresa se remonta a 1976. En 1981, Prinx Chengshan construyó su primera línea de producción de neumáticos radiales y siguió aumentando su sólida reputación en la industria de los neumáticos. En 2005, la Compañía estableció una empresa conjunta con un importante fabricante de neumáticos de EE. UU., lo que permitió a Prinx Chengshan expandir aún más el desarrollo de sus productos de neumáticos para pasajeros, camiones y autobuses, así como neumáticos agrícolas e industriales. En 2014, la empresa tomó una nueva dirección, puso fin a la empresa conjunta y estableció Prinx Chengshan (Shandong) Tire Company, marcando oficialmente el comienzo de una nueva era de productos y tecnología. El 25 de marzo de 2020, el primer neumático TBR de la marca Prinx de la compañía salió con éxito de su nueva línea de producción, seguido rápidamente por un neumático para el segmento PLT. La instalación utiliza maquinaria procedente de los principales proveedores de equipos del mundo y Prinx Chengshan está integrando la fabricación inteligente en los procesos de producción y almacenamiento.",
      text2:
        "En la actualidad, Prinx Chengshan Holding Limited vende sus neumáticos en más de 130 países y regiones de seis continentes. Como empresa global de neumáticos, Prinx Chengshan innova continuamente en nuevas tecnologías, confiando en la fuerza de la investigación y el desarrollo para promover el avance y la optimización de sus productos. TBC Corporation se enorgullece de ser el distribuidor exclusivo de productos de calidad de Prinx Tires en Norteamérica y actualmente ofrece neumáticos PLT y TBR.",
    },
    {
      id: 2,
      title: "VENEZUELA",
      image: "/images/trayectory/history.webp",
      text1:
        "Prinx Tires abre sus puertas al mundo a comienzos de esta década, contando con todas las certificaciones de comercialización internacional, establece una de sus fábricas en Tailandia solo para producción internacional. Logrando posición en los principales mercados del mundo comenzando con Europa y EE.UU. con una producción de neumáticos de calidad Premium exporta a todo el mundo, logrando llegar a Venezuela con tan solo 3 años de diferencia a sus mercados más importantes antes mencionados.",
      text2:
        "Gracias a Cauchos la Mundial, establece la alianza definitiva para el mercado nacional y estar en toda Venezuela por su experiencia y estructuras en el proceso de distribucion de neumáticos.",
    },
    {
      id: 3,
      title: "CAUCHOS LA MUNDIAL",
      image: "/images/trayectory/history-4.webp",
      text1:
        "Cauchos La Mundial gracias a sus relacion de casi 20 años con el gigante fabricante de neumáticos PRINX CHENGSHAN comienzan operaciones y colocan sus productos en toda la red de distribucion de sus aliados en toda Venezuela, respaldando su calidad y precios en toda la región, logrando el posicionamiento de la marca Premium PRINX, comenzando con la linea de todo terreno con llantas de la mejor calidad.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Título Superior */}
        <div className="py-16 text-center bg-white">
          <p className="text-xs tracking-[0.4em] text-black italic uppercase font-light mb-2">
            Historia
          </p>
          <h2 className="text-5xl font-light text-black italic tracking-tighter">
            PRINX TIRES
          </h2>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="relative">
            {/* Imagen Estática (Sticky) */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${section.image})` }}
              >
                <div className="flex h-full items-center justify-center bg-black/30 px-6">
                  <h2 className="text-3xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.2em] drop-shadow-2xl text-center">
                    {section.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Bloque de Texto con Línea Horizontal entre párrafos */}
            <div className="relative z-20 bg-white px-8 py-24 md:px-20 lg:px-64 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
              <div className="max-w-4xl mx-auto">
                {/* Primer Párrafo con Letra Capital */}
                <div className="text-justify mb-10">
                  <p
                    className="text-md md:text-lg leading-relaxed text-black 
                    first-letter:text-7xl 
                    first-letter:font-bold 
                    first-letter:text-[#5CC600] 
                    first-letter:mr-4 
                    first-letter:float-left 
                    first-letter:leading-[0.8] 
                    first-letter:mt-3"
                  >
                    {section.text1}
                  </p>
                </div>

                {/* Línea Divisoria Horizontal */}
                <div className="w-full h-[1px] bg-black my-10" />

                {/* Segundo Párrafo */}
                <div className="text-justify">
                  <p className="text-md md:text-lg leading-relaxed text-black">
                    {section.text2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default History;
