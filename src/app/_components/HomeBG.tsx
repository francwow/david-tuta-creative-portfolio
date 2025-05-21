import Image from "next/image";
import placeholder from "@/assets/images/placeholder.webp";

const HomeBG = () => {
  return (
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
  );
};

export default HomeBG;
