"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Link from "next/link";

const HomeMenu = () => {
  const { language } = useLanguage();

  const menuItems = [
    {
      textES: "Acerca",
      textEN: "About",
      href: "/about",
      position: "top-[4vw] left-[4vw]",
    },
    {
      textES: "Fotografía",
      textEN: "Photography",
      href: "/photography",
      position: "top-[4vw] right-[4vw]",
    },
    {
      textES: "Diseño",
      textEN: "Design",
      href: "/design",
      position: "bottom-[4vw] left-[4vw]",
    },
    {
      textES: "Contacto",
      textEN: "Contact",
      href: "/contact",
      position: "bottom-[4vw] right-[4vw]",
    },
  ];

  return (
    <div className="w-full h-full absolute inset-0 z-10">
      {menuItems.map((item, index) => (
        <Link
          className={`absolute text-white font-(family-name:--font-geist) text-[1.2rem] px-3 py-2 font-bold bg-sky-500/80 -tracking-normal ${item.position}`}
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
