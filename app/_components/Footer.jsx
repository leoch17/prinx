import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) se importa desde fa6

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/dunlop.ve/?ref=Danascakecreations",
    },
    { Icon: FaXTwitter, href: "https://twitter.com/dunloptyres_sa?lang=en" },
    { Icon: FaFacebookF, href: "https://www.facebook.com/JDunlopLatam/" },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCKgyD4rOEYFBk-ok2s__OBw",
    },
  ];

  return (
    <footer className="w-full bg-[#333333] py-6 md:py-8 px-4">
      {" "}
      {/* Reducido de py-10 a py-6 */}
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* SECCIÓN HORARIOS - Texto más pequeño */}
        <div className="mb-4">
          {" "}
          {/* Reducido margen de mb-8 a mb-4 */}
          <h3 className="text-black text-xl md:text-2xl font-bold">
            Hora de Atención:
          </h3>
          <p className="text-black text-base md:text-lg font-semibold">
            Lunes – Viernes, 8:00 a.m. – 6:00 p.m.
          </p>
        </div>

        {/* REDES SOCIALES - Iconos más compactos */}
        <div className="flex space-x-6 mb-2">
          {" "}
          {/* Reducido espacio y margen */}
          {socialLinks.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-black text-xl md:text-2xl hover:text-white transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* LOGOS PRINCIPALES - Tamaño reducido */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 -mb-2 -mt-2">
          <img
            src="/images/prinx-logo.webp"
            alt="Prinx"
            className="h-18 md:h-24 object-contain" // Reducido de h-10 a h-6
          />
        </div>

        {/* COPYRIGHT - Tipografía mínima */}
        <div className="border-t border-black/10 pt-4 w-full max-w-3xl">
          <p className="text-black text-xs md:text-sm font-bold uppercase tracking-tight opacity-90">
            © DUNLOP Venezuela. Todos los derechos reservados.
            <span className="block md:inline ml-0 md:ml-1 font-medium">
              Diseñado por Grupo La Mundial C.A.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
