"use client";

import Link from "next/link";
import Languages from "./Languages";
import HomeMenu from "../nav/HomeMenu";
import { usePathname } from "next/navigation";
import Burger from "../nav/Burger";
import { useNav } from "@/contexts/ContextHooks";
import { useEffect, useRef } from "react";
import Footer from "../footer/Footer";

const Header = () => {
  const pathname = usePathname();
  const { navActive, setNavActive } = useNav();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current !== undefined) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headerHeight = headerRect?.height;

      document.body.style.setProperty("--header-h", `${headerHeight}`);
      console.log(headerHeight);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className={
        pathname === "/"
          ? "header w-full flex justify-between items-center bg-transparent z-[99] py-3"
          : "header w-full flex justify-between items-center bg-[rgba(3,20,33,0.95)] z-[99] py-3"
      }
    >
      <Languages />
      {pathname !== "/" ? (
        <div className="z-[99]">
          <Link
            className="p-2 lg:p-5 block lg:block"
            href={"/"}
            onClick={() => {
              setTimeout(() => {
                setNavActive(false);
              }, 0);
            }}
          >
            <div className="flex-col justify-center items-center hidden lg:flex">
              <span className="text-gray-200 lg:text-3xl font-bold tracking-[0.4rem]">
                DAVID TUTA
              </span>
              <span className="text-orange-500 font-light tracking-[0.13rem] lg:tracking-[0.3rem] text-[0.9rem] text-center">
                portafolio creativo
              </span>
            </div>
            <div className="block lg:hidden">
              {/* <span className="text-[1.2rem] font-bold tracking-[0.2rem] text-yellow-500">
                DavidTuta
              </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house text-orange-500"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
          </Link>
        </div>
      ) : null}
      <Burger setNavActive={setNavActive} navActive={navActive} />
      <div className="lg:block hidden">
        <HomeMenu setNavActive={setNavActive} />
      </div>
      <div
        className={
          navActive
            ? "nav-mobile lg:hidden active absolute inset-0 w-full h-screen flex flex-col items-center justify-center bg-[rgba(3,20,33)]"
            : "nav-mobile lg:hidden not-active absolute inset-0 w-full h-screen flex flex-col items-center justify-center bg-[rgba(3,20,33)]"
        }
      >
        {/* <Header /> */}
        <div className="relative w-full">
          <HomeMenu setNavActive={setNavActive} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
