"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import MoveUpContainer from "../utility/MoveUpContainer";
import RotateContainer from "../utility/RotateContainer";

const Languages = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-container relative flex flex-row justify-center items-center gap-1.5 font-(family-name:--font-geist) lg:text-[1.2rem] text-[1rem] cursor-pointer text-gray-200 lg:hover:text-yellow-500 w-fit z-[99]">
      <div
        className={
          language === "ES"
            ? "language-item active rotate-parent"
            : "language-item rotate-parent"
        }
        tabIndex={0}
        role="button"
        onClick={() => setLanguage("ES")}
      >
        <MoveUpContainer>
          <RotateContainer styles="p-2 lg:p-5" textES="ES" textEN="ES" />
        </MoveUpContainer>
      </div>
      <div className="language-item px-0.5 lg:px-2 lg:py-5 py-2 font-light">
        <MoveUpContainer>
          <div>|</div>
        </MoveUpContainer>
      </div>
      <div
        className={
          language === "EN"
            ? "language-item active rotate-parent"
            : "language-item rotate-parent"
        }
        tabIndex={0}
        role="button"
        onClick={() => setLanguage("EN")}
      >
        <MoveUpContainer>
          <RotateContainer styles="p-2 lg:p-5" textES="EN" textEN="EN" />
        </MoveUpContainer>
      </div>
    </div>
  );
};

export default Languages;
