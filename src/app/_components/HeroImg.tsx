import Image from "next/image";
import placeholder from "@/assets/images/placeholder.webp";
import HomeMenu from "./HomeMenu";
import HeroText from "./HeroText";
import Languages from "./Languages";

const HeroImg = () => {
  return (
    <div className="hero-img w-full h-full absolute inset-0 flex flex-col justify-center items-center overflow-hidden">
      <HomeMenu />
      <HeroText />
      <Image
        src={placeholder}
        alt="tuts"
        width={1900}
        height={1900}
        className="w-full h-full object-cover absolute inset-0"
        priority
        quality={75}
      />
      <div className="absolute top-0 left-0 right-0 w-full">
        <Languages />
      </div>
    </div>
  );
};

export default HeroImg;
