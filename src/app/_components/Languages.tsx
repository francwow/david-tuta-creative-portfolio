"use client";

import { useLanguage } from "@/contexts/ContextHooks";

const Languages = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="language-container relative flex flex-row justify-center items-center gap-1.5 font-(family-name:--font-geist) lg:text-2xl text-[0.8rem] cursor-pointer text-gray-200 lg:hover:text-yellow-500 font-bold w-full">
      <div
        className="language-item p-2"
        tabIndex={0}
        role="button"
        onClick={() => setLanguage("ES")}
      >
        ESP
      </div>
      <div className="p-2 font-light">/</div>
      <div
        className="language-item p-2"
        tabIndex={0}
        role="button"
        onClick={() => setLanguage("EN")}
      >
        ENG
      </div>
    </div>
  );
};

export default Languages;
