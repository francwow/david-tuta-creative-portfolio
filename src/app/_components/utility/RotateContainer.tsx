"use client";

import { useLanguage } from "@/contexts/ContextHooks";

type RotateContainerProps = {
  textES: string;
  textEN: string;
  styles: string;
};

const RotateContainer = ({ textES, textEN, styles }: RotateContainerProps) => {
  const { language } = useLanguage();

  return (
    <div className={`rotate-wrapper w-full h-full ${styles}`}>
      <div className="rotate-container relative flex justify-center items-end">
        <span className="rotate-item">
          {language === "ES" ? textES : textEN}
        </span>
        <span className="rotate-item absolute inset-0">
          {language === "ES" ? textES : textEN}
        </span>
      </div>
    </div>
  );
};

export default RotateContainer;
