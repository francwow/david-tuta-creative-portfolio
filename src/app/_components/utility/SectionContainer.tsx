"use client";

import { useLenis } from "@/hooks/useLenis";
import { PropsWithChildren } from "react";

const SectionContainer = ({ children }: PropsWithChildren) => {
  useLenis();

  return (
    <div className="section-container relative min-h-screen bg-[rgb(1,19,17)] text-gray-200">
      {children}
    </div>
  );
};

export default SectionContainer;
