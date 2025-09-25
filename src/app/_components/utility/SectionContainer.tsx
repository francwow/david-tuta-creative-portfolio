"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const SectionContainer = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <div
      className={
        pathname === "/contact"
          ? "section-container contact-container relative h-screen bg-[rgb(1,19,17)] text-gray-200"
          : "section-container relative min-h-screen bg-[rgb(1,19,17)] text-gray-200"
      }
    >
      {children}
    </div>
  );
};

export default SectionContainer;
