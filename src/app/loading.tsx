import Image from "next/image";
import placeholder from "@/assets/images/placeholder.webp";
import HeroText from "./_components/HeroText";

export default function Loading() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute inset-0">
          <Image
            src={placeholder}
            alt="tuts"
            width={1900}
            height={1900}
            className="w-full h-full object-cover absolute inset-0"
            priority
            quality={75}
          />
        </div>
        <HeroText />
      </div>
      <div className="home-overlay absolute inset-0 bg-sky-800/80"></div>
    </>
  );
}
