"use client";

import React, { useState } from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "HH2",
    image: "/images/products/banner-prinx-HH2.webp",
    modalImg: "/images/products/hh2/hh2-modal.webp",
    sizes: ["215/55R17", "225/55R17", "225/55R18", "215/50R17", "235/50R18"],
    description: "Más Información",
    brandColor: "#5CC600",
  },
  {
    id: 2,
    name: "HT2",
    image: "/images/products/banner-prinx-HT2.webp",
    modalImg: "/images/products/ht2/ht2-modal.webp",
    sizes: [
      "265/75R16",
      "265/70R17",
      "235/65R17",
      "265/65R17",
      "245/60R18",
      "265/60R18",
      "275/55R20",
    ],
    description: "Más Información",
    brandColor: "#5CC600",
  },
  {
    id: 3,
    name: "HA2",
    image: "/images/products/banner-prinx-HA2.webp",
    modalImg: "/images/products/ha2/ha2-modal.webp",
    sizes: [
      "265/75R16",
      "265/70R16",
      "265/70R17",
      "275/60R20",
      "275/55R20",
      "LT235/80R17",
      "LT265/60R20",
      "LT275/65R20",
      "LT285/75R16",
    ],
    description: "Más Información",
    brandColor: "#5CC600",
  },
  {
    id: 4,
    name: "HR1",
    image: "/images/products/banner-prinx-HR1.webp",
    modalImg: "/images/products/hr1/hr1-modal.webp",
    sizes: ["35x12.50R20LT", "35X12.50R18LT"],
    description: "Más Información",
    brandColor: "#5CC600",
  },
];

// Componente de la Modal
const ProductModal = ({ product, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-lg bg-white shadow-2xl custom-scrollbar"
      >
        {/* Header de la Modal */}
        <div
          className="flex items-center justify-between p-4"
          style={{ backgroundColor: product.brandColor || "#5CC600" }}
        >
          <h2 className="text-xl font-bold text-white tracking-widest">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:rotate-90 transition-transform cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cuerpo: Imagen del Producto */}
        <div className="p-2">
          {product.modalImg && (
            <img
              src={product.modalImg}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          )}
        </div>

        {/* Footer: Lista de Medidas */}
        <div className="bg-white pb-8 pt-2">
          <div className="flex flex-col items-center">
            <ul className="w-full max-w-[85%] border-t border-gray-100">
              {product.sizes?.map((size, index) => (
                <li
                  key={index}
                  className={`py-3 text-center text-lg font-bold transition-colors ${
                    index % 2 === 0
                      ? "bg-[#5CC600] text-white"
                      : "bg-[#444444] text-white"
                  }`}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <>
      <Header />

      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        {/* Slider de Fondo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={products[currentIndex].id}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${products[currentIndex].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Textos Principales */}
        <div className="relative z-10 flex h-full flex-col justify-center px-10 md:px-20">
          <motion.div
            key={`text-${products[currentIndex].id}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold tracking-tighter md:text-[12rem]">
              {products[currentIndex].name}
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 flex items-center cursor-pointer gap-2 border-b-2 border-white pb-1 text-lg font-light transition-all hover:gap-4"
            >
              {products[currentIndex].description}
              <span>→</span>
            </button>
          </motion.div>
        </div>

        {/* Navegación Inferior */}
        <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4 md:left-20">
          <button
            onClick={prevSlide}
            className="group flex h-14 w-14 items-center cursor-pointer justify-center border border-white/50 transition-colors hover:bg-white hover:text-black"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="group flex h-14 w-14 items-center cursor-pointer justify-center border border-white/50 transition-colors hover:bg-white hover:text-black"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="ml-4 flex gap-2">
            {products.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Componente Modal Dinámico */}
      <AnimatePresence>
        {isModalOpen && (
          <ProductModal
            product={products[currentIndex]}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Products;
