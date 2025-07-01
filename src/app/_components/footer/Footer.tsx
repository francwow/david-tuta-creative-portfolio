"use client";

import Link from "next/link";
import MoveUpContainer from "../utility/MoveUpContainer";
import RotateContainer from "../utility/RotateContainer";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Footer = () => {
  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current !== undefined) {
      const footerRect = footerRef.current?.getBoundingClientRect();
      const footerHeight = footerRect?.height;

      document.body.style.setProperty("--footer-h", `${footerHeight}`);
      console.log(footerHeight);
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className={
        pathname === "/"
          ? "footer w-full flex flex-row lg:flex-row justify-between items-end bg-transparent"
          : "footer w-full flex flex-row lg:flex-row justify-between items-end relative bg-[rgba(3,20,33,0.95)]"
      }
    >
      {/* Socials */}
      <div className="socials-container flex justify-between lg:justify-center items-start lg:w-fit">
        <div className="socials-item">
          <Link
            className="rotate-parent text-[1rem] lg:text-[1.2rem] text-gray-200 lg:hover:text-orange-500"
            href={"https://www.instagram.com/"}
            target="_blank"
          >
            <MoveUpContainer>
              <RotateContainer
                textES="Instagram"
                textEN="Instagram"
                styles="p-2 lg:p-5"
              />
            </MoveUpContainer>
          </Link>
        </div>
        <div className="socials-item">
          <Link
            className="rotate-parent text-[1rem] lg:text-[1.2rem] text-gray-200 lg:hover:text-orange-500"
            href={"https://www.youtube.com/"}
            target="_blank"
          >
            <MoveUpContainer>
              <RotateContainer
                textES="Youtube"
                textEN="Youtube"
                styles="p-2 lg:p-5"
              />
            </MoveUpContainer>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <MoveUpContainer>
        <div className="email lg:w-fit text-[0.8rem] lg:text-[1rem] text-orange-500 p-2 lg:p-5 flex flex-col">
          <span className="text-center">Copyright © 2025 dtuta.com</span>
        </div>
      </MoveUpContainer>
    </footer>
  );
};

export default Footer;
