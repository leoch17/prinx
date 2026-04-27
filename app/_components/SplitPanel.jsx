"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SplitPanel = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectamos si es mobile para desactivar las animaciones de flex
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const panelAnimation = {
    collapsed: { flex: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    expanded: { flex: 2, transition: { duration: 0.4, ease: "easeInOut" } },
    otherExpanded: {
      flex: 0.6,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    // En mobile quitamos h-screen para que el contenido largo no se corte
    <section className="relative w-full h-auto md:h-screen bg-black text-white overflow-hidden">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* PANEL IZQUIERDO: CERTIFICACIONES */}
        <motion.div
          key="left-panel"
          initial="collapsed"
          animate={
            isMobile
              ? { flex: "none" } // Desactivamos animaciones en mobile
              : expandedPanel === "left"
                ? "expanded"
                : expandedPanel === "right"
                  ? "otherExpanded"
                  : "collapsed"
          }
          variants={panelAnimation}
          className="relative w-full md:h-full flex flex-col justify-center items-center bg-black z-10 py-16 md:py-0"
          onMouseEnter={() => !isMobile && setExpandedPanel("left")}
          onMouseLeave={() => !isMobile && setExpandedPanel(null)}
        >
          <div className="w-full max-w-2xl px-6 md:px-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 md:mb-2 md:mt-8 tracking-tight">
              Certificaciones Internacionales
            </h2>

            <div className="text-sm md:text-base font-light leading-relaxed space-y-4 md:overflow-y-auto md:max-h-[40vh] pr-2">
              <p>
                <strong>E-Mark:</strong> Certificación europea requerida para la
                Unión Europea.
              </p>
              <p>
                <strong>CCC:</strong> Certificación obligatoria para el mercado
                chino.
              </p>
              <p>
                <strong>USA DOT:</strong> Cumplimiento con el Departamento de
                Transporte de EE. UU.
              </p>
              <p>
                <strong>INMETRO:</strong> Certificación de seguridad para
                Brasil.
              </p>
              <p>
                <strong>ISO TS 16949:</strong> Estándar internacional de calidad
                automotriz.
              </p>
              <p>
                <strong>GSO:</strong> Normalización para los Estados Árabes del
                Golfo.
              </p>
              <p className="pt-4 border-t border-white/20 text-white/70 italic">
                Garantizamos estándares globales de calidad y seguridad.
              </p>
            </div>

            <div className="mt-8 md:mt-10 md:mb-8 w-full max-w-[400px] md:max-w-[400px] self-center md:self-center">
              <Image
                src="/images/splitpanel/certificate.webp"
                alt="Certificados"
                width={600}
                height={300}
                className="w-full h-auto object-contain opacity-90"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* PANEL DERECHO: VIDEO */}
        <motion.div
          key="right-panel"
          initial="collapsed"
          animate={
            isMobile
              ? { flex: "none", height: "400px" } // Altura fija para el video en mobile
              : expandedPanel === "right"
                ? "expanded"
                : expandedPanel === "left"
                  ? "otherExpanded"
                  : "collapsed"
          }
          variants={panelAnimation}
          className="relative w-full md:h-full overflow-hidden bg-black"
          onMouseEnter={() => !isMobile && setExpandedPanel("right")}
          onMouseLeave={() => !isMobile && setExpandedPanel(null)}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="./videos/splitpanel/split-panel.webm" />
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitPanel;
