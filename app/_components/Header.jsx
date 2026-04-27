"use client";

import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

{
  /* **************** headlessui *************** */
}
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

{
  /* **************** heroicons *************** */
}
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

{
  /* ******************************* */
}
import { ChevronDownIcon } from "@heroicons/react/20/solid";

{
  /* **************** Products *************** */
}
const products = [
  {
    name: "Amazonas",
    description: "Get a better understanding of your traffic",
    href: "#",
    // icon: ChartPieIcon,
    imageSrc: "/images/states/amazonas.png",
  },
  {
    name: "Anzoátegui",
    description: "Speak directly to your customers",
    href: "#",
    // icon: CursorArrowRaysIcon,
    imageSrc: "/images/states/anzoategui.png",
  },
  {
    name: "Apure",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    // icon: FingerPrintIcon,
    imageSrc: "/images/states/apure.png",
  },
  {
    name: "Aragua",
    description: "Connect with third-party tools",
    href: "#",
    // icon: SquaresPlusIcon,
    imageSrc: "/images/states/aragua.png",
  },
  {
    name: "Barinas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/barinas.png",
  },
  {
    name: "Bolívar",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/bolivar.png",
  },
  {
    name: "Carabobo",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/carabobo.png",
  },
  {
    name: "Cojedes",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/cojedes.png",
  },
  {
    name: "Delta Amacuro",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/delta-amacuro.png",
  },
  {
    name: "Distrito Capital",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/caracas.png",
  },
  {
    name: "Falcón",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/falcon.png",
  },
  {
    name: "Guárico",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/guarico.png",
  },
  {
    name: "Lara",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/lara.png",
  },
  {
    name: "Mérida",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/merida.png",
  },
  {
    name: "Miranda",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/miranda.png",
  },
  {
    name: "Monagas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/monagas.png",
  },
  {
    name: "Nueva Esparta",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/nueva-esparta.png",
  },
  {
    name: "Portuguesa",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/portuguesa.png",
  },
  {
    name: "Sucre",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/sucre.png",
  },
  {
    name: "Táchira",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/tachira.png",
  },
  {
    name: "Trujillo",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/trujillo.png",
  },
  {
    name: "Vargas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/vargas.png",
  },
  {
    name: "Yaracuy",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/yaracuy.png",
  },
  {
    name: "Zulia",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/images/states/zulia.png",
  },
];
{
  /* **************** Header Start *************** */
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/prinxtire.ve/",
    },
    { Icon: FaXTwitter, href: "https://x.com/PrinxChengshan" },
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/prinxtire.official/",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/@prinxtire-cn8jh",
    },
  ];

  return (
    <div className="bg-[#5CC600]">
      <header className="container mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-2 px-8 lg:px-10"
        >
          {/* ******************************* */}
          <div className="flex lg:flex-1">
            <Link href="/#" className="p-1.5 flex items-center">
              {/* LOGO */}
              <img
                src="/images/prinx-logo-white.jpg"
                alt="Prinx Logo"
                className="h-12 md:h-24 w-auto object-contain"
              />
            </Link>
          </div>
          {/* ******************************* */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2.5 inline-flex items-center justify-center text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          {/* ******************************* */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-lg font-medium leading-6 text-[#ffffff] hover:text-[#231815]"
            >
              Inicio
            </Link>
            <Link
              href="/trayectory"
              className="text-lg font-medium leading-6 text-[#ffffff] hover:text-[#231815]"
            >
              Historia
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium leading-6 text-[#ffffff] hover:text-[#231815]"
            >
              Productos
            </Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-medium leading-6 cursor-pointer text-[#ffffff] hover:text-[#231815]">
                Tiendas
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-[#ffffff]"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4 max-h-96 overflow-y-auto">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="size-8 rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          {/* ******************************* */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                className="bg-[#ffffff] text-[#5CC600] p-2 rounded-full text-sm/6 font-semibold mx-3 leading-6 hover:scale-105 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          {/* ******************************* */}
        </nav>
        {/* ******************************* */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#5CC600] px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/#" className="p-1.5 flex items-center">
                {/* LOGO */}
                <img
                  src="/images/prinx-logo-white.jpg"
                  alt="Prinx Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700 inline-flex items-center justify-center"
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#ffffff] hover:text-[#231815]"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/trayectory"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#ffffff] hover:text-[#231815]"
                  >
                    Historia
                  </Link>
                  <Link
                    href="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#ffffff] hover:text-[#231815]"
                  >
                    Productos
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#ffffff] hover:text-[#231815]">
                      Tiendas
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#ffffff] hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        {/* ******************************* */}
      </header>
    </div>
  );
};
{
  /* **************** Header End *************** */
}

export default Header;
