"use client";

import { useLanguage } from "@/contexts/ContextHooks";

const HeroText = () => {
  const { language } = useLanguage();

  return (
    <div className="z-50 tracking-[0.4rem] p-0 relative">
      <div className="main-heading text-4xl lg:text-7xl font-extrabold text-center font-(family-name:--font-geist) text-white">
        DAVID TUTA
      </div>
      <div className="text-[1rem] lg:text-4xl font-light text-center font-(family-name:--font-inter) text-yellow-500">
        {language === "ES" ? "portafolio creativo" : "creative portfolio"}
      </div>
    </div>
  );
};

export default HeroText;
