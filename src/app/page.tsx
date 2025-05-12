// import homeImg from "@/assets/images/tut-desktop-webp.webp";

import HeroImg from "./_components/HeroImg";

export default function Home() {
  return (
    <div className="home w-screen h-screen absolute inset-0 overflow-hidden font-(family-name:--font-geist)">
      <div className="home-overlay absolute inset-0 bg-sky-500/80">
        <HeroImg />
      </div>
    </div>
  );
}
