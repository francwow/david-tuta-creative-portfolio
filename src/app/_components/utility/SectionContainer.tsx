"use client";

import { useLenis } from "@/hooks/useLenis";
import { PropsWithChildren } from "react";

const SectionContainer = ({ children }: PropsWithChildren) => {
  useLenis();

  return (
    <div className="section-container relative flex flex-col justify-center items-center min-h-screen bg-white text-black">
      {children}
    </div>
  );
};

export default SectionContainer;
