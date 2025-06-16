"use client";

import HomeImg from "./HomeImg";
import ColorOverlay from "../utility/ColorOverlay";
import { usePathname } from "next/navigation";

const HeroImg = () => {
  const pathname = usePathname();

  return (
    <div
      className={
        pathname === "/"
          ? "hero-img home-img absolute inset-0 w-full h-full flex flex-col justify-center items-center"
          : "hero-img pages-img absolute inset-0 w-full h-full flex flex-col justify-center items-center"
      }
    >
      <div className="block lg:hidden absolute inset-0 overflow-hidden">
        <HomeImg device="mobile" />
      </div>
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <HomeImg device="desktop" />
      </div>
      <ColorOverlay bgColor="bg-sky-950/80" />
    </div>
  );
};

export default HeroImg;
