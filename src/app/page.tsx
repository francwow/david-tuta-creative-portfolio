import HeroImg from "./_components/HeroImg";
import HomeBG from "./_components/HomeBG";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 2000);
  });

  return (
    <div className="home w-screen h-screen absolute inset-0 overflow-hidden">
      <HomeBG />
      <div className="home-overlay absolute inset-0 bg-sky-800/80"></div>
      <HeroImg />
    </div>
  );
}
