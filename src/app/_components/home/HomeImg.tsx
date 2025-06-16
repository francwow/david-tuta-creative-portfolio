import Image from "next/image";
import placeholder from "@/assets/images/placeholder.webp";
import placeholdermd from "@/assets/images/placeholder-md.webp";

type HomeImgProps = {
  device: "mobile" | "desktop";
};

const HomeImg = ({ device }: HomeImgProps) => {
  return device === "desktop" ? (
    <Image
      src={placeholder}
      alt="tuts"
      width={1900}
      height={1900}
      className="w-full h-full object-cover absolute inset-0"
      priority
      quality={80}
    />
  ) : (
    <Image
      src={placeholdermd}
      alt="tuts"
      width={900}
      height={900}
      className="w-full h-full object-cover absolute inset-0"
      priority
      quality={100}
    />
  );
};

export default HomeImg;
