"use client";

import { useLanguage } from "@/contexts/ContextHooks";

const HeroText = () => {
  const { language } = useLanguage();

  return (
    <div className="z-50 text-white tracking-[0.4rem] p-0">
      <div className="text-5xl lg:text-8xl font-extrabold text-center">
        DAVID TUTA
      </div>
      <div className="text-2xl lg:text-5xl font-extrabold text-center font-(family-name:--font-inter)">
        {language === "ES" ? "portafolio creativo" : "creative portfolio"}
      </div>
    </div>
  );
};

export default HeroText;
