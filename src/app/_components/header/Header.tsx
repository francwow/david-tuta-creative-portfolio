"use client";

import Link from "next/link";
import Languages from "./Languages";
import HomeMenu from "../nav/HomeMenu";
import { usePathname } from "next/navigation";
import Burger from "../nav/Burger";
import { useNav } from "@/contexts/ContextHooks";
import { useEffect, useRef } from "react";

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
          ? "header w-full flex justify-between items-center bg-transparent z-[99]"
          : "header w-full flex justify-between items-center border-b-1 border-gray-200 bg-sky-950/95 z-[99]"
      }
    >
      <Languages />
      {pathname !== "/" ? (
        <Link
          className="p-2 lg:p-5 text-gray-200 lg:text-3xl font-bold block lg:block z-[99]"
          href={"/"}
          onClick={() => setNavActive(false)}
        >
          DAVID TUTA
        </Link>
      ) : null}
      <Burger setNavActive={setNavActive} navActive={navActive} />
      <div className="lg:block hidden">
        <HomeMenu setNavActive={setNavActive} />
      </div>
      <div
        className={
          navActive
            ? "nav-mobile lg:hidden active absolute inset-0 w-full h-screen flex flex-col items-center justify-center bg-sky-950"
            : "nav-mobile lg:hidden not-active absolute inset-0 w-full h-screen flex flex-col items-center justify-center bg-sky-950"
        }
      >
        {/* <Header /> */}
        <div className="relative w-full">
          <HomeMenu setNavActive={setNavActive} />
        </div>
        {/* <div className="relative w-full">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
