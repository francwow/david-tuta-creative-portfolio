"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Link from "next/link";

const HomeMenu = () => {
  const { language } = useLanguage();

  const menuItems = [
    {
      textES: "ACERCA.",
      textEN: "ABOUT.",
      href: "/about",
      position: "top-[4vw] left-[4vw]",
    },
    {
      textES: "FOTOGRAFÍA.",
      textEN: "PHOTOGRAPHY.",
      href: "/photography",
      position: "top-[4vw] right-[4vw]",
    },
    {
      textES: "DISEÑO.",
      textEN: "DESIGN.",
      href: "/design",
      position: "bottom-[4vw] left-[4vw]",
    },
    {
      textES: "CONTACTO.",
      textEN: "CONTACT.",
      href: "/contact",
      position: "bottom-[4vw] right-[4vw]",
    },
  ];

  return (
    <div className="absolute bottom-0 right-0 left-0 z-10 w-full flex justify-between items-start flex-row">
      {menuItems.map((item, index) => (
        <Link
          className={`text-gray-200 lg:hover:text-yellow-500 font-(family-name:--font-geist) lg:text-2xl text-[0.8rem] text-center p-2.5 font-bold w-full -tracking-normal ${item.position}`}
          href={item.href}
          key={index}
        >
          {language === "ES" ? item.textES : item.textEN}
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
