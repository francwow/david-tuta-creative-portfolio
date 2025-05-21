"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Link from "next/link";

const HomeMenu = () => {
  const { language } = useLanguage();

  const menuItems = [
    {
      textES: "ACERCA",
      textEN: "ABOUT",
      href: "/about",
      position: "top-[4vw] left-[4vw]",
    },
    {
      textES: "FOTOGRAFÍA",
      textEN: "PHOTOGRAPHY",
      href: "/photography",
      position: "top-[4vw] right-[4vw]",
    },
    {
      textES: "DISEÑO",
      textEN: "DESIGN",
      href: "/design",
      position: "bottom-[4vw] left-[4vw]",
    },
    {
      textES: "CONTACTO",
      textEN: "CONTACT",
      href: "/contact",
      position: "bottom-[4vw] right-[4vw]",
    },
  ];

  return (
    <div className="home-menu absolute bottom-0 right-0 left-0 z-10 w-full flex justify-between items-start flex-row">
      {menuItems.map((item, index) => (
        <Link
          className={`menu-link text-gray-200 lg:hover:text-yellow-500 font-(family-name:--font-geist) lg:text-2xl text-[0.8rem] text-center !leading-[75%] font-bold w-full -tracking-normal ${item.position} flex justify-center items-end gap-1.5 py-2.5 lg:py-6 overflow-hidden`}
          href={item.href}
          key={index}
        >
          <div className="menu-item relative flex justify-center items-end gap-1.5">
            <span>{language === "ES" ? item.textES : item.textEN}</span>
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[7px] lg:h-[7px] w-[5px] h-[5px]"
              >
                <path
                  d="M8.37501 7.58333C7.45834 8.30555 6.29167 8.66667 4.875 8.66667C3.45833 8.66667 2.29167 8.30555 1.37501 7.58333C0.458342 6.83333 0 5.75 0 4.33333C0 2.91667 0.458342 1.84722 1.37501 1.125C2.29167 0.375001 3.45833 0 4.875 0C6.29167 0 7.45834 0.375001 8.37501 1.125C9.29168 1.84722 9.75 2.91667 9.75 4.33333C9.75 5.75 9.29168 6.83333 8.37501 7.58333Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
