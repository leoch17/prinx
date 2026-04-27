"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const videoSlides = [
    { id: 1, src: "/videos/banner/banner.webm" },
    { id: 2, src: "/videos/banner/banner-2.webm" },
    { id: 3, src: "/videos/banner/banner-3.webm" },
    { id: 4, src: "/videos/banner/banner-4.webm" },
    { id: 5, src: "/videos/banner/banner-5.webm" },
  ];

  return (
    <div
      id="banner"
      className="w-full relative overflow-hidden bg-black max-w-[100vw]"
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        grabCursor={true} // Cambia el cursor para indicar que se puede arrastrar
        loop={true} // Permite scroll infinito, ideal para móvil
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // En móvil, los puntos se ven más elegantes si son dinámicos
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        /* Ajuste de altura: Aumentado de 35vh a 50vh en móvil para mejor visibilidad */
        className="mySwiper h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      >
        {videoSlides.map((video) => (
          <SwiperSlide key={video.id} className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline // Vital para que el video no se abra en pantalla completa en iPhone
              className="w-full h-full object-cover pointer-events-none" // pointer-events-none ayuda a que el gesto de "swipe" sea más suave
            >
              <source src={video.src} type="video/webm" />
              <source
                src={video.src.replace(".webm", ".mp4")}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos Globales Corregidos */}
      <style jsx global>{`
        /* Eliminar scroll lateral que rompe el header */
        #banner .swiper-container {
          max-width: 100vw !important;
        }

        /* Ocultar flechas en móvil para una interfaz limpia */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          /* Puntos de paginación más táctiles */
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
          }
        }

        /* Colores Dunlop */
        .swiper-button-next,
        .swiper-button-prev {
          color: #5cc600 !important;
          transform: scale(0.6);
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #5cc600 !important;
          opacity: 1 !important;
        }

        /* Ajuste de posición de paginación para que no tape contenido importante */
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
