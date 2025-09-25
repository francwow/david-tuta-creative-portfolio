import HeroText from "./_components/home/HeroText";
import HomeImg from "./_components/home/HomeImg";
import ColorOverlay from "./_components/utility/ColorOverlay";
import PageTransition from "./_components/utility/PageTransition";

export default function Loading() {
  return (
    <>
      <PageTransition />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="block lg:hidden absolute inset-0">
          <HomeImg device="mobile" />
        </div>
        <div className="hidden lg:block absolute inset-0">
          <HomeImg device="desktop" />
        </div>
        <HeroText />
      </div>
      <ColorOverlay bgColor="bg-[rgba(3,20,33,0.8)]" />
    </>
  );
}
