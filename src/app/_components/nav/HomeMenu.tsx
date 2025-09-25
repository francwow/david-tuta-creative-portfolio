import Link from "next/link";
import MoveUpContainer from "../utility/MoveUpContainer";
import RotateContainer from "../utility/RotateContainer";

type HomeMenuProps = {
  setNavActive: (navActive: boolean) => void;
};

const HomeMenu = ({ setNavActive }: HomeMenuProps) => {
  const menuItems = [
    {
      textES: "ACERCA",
      textEN: "ABOUT",
      href: "/about",
      position: "top-[4vw] left-[4vw]",
    },
    {
      textES: "TRABAJO",
      textEN: "WORK",
      href: "/work",
      position: "top-[4vw] right-[4vw]",
    },
    {
      textES: "CONTACTO",
      textEN: "CONTACT",
      href: "/contact",
      position: "bottom-[4vw] right-[4vw]",
    },
  ];

  return (
    <div className="home-menu z-10 lg:w-fit w-full flex justify-between items-start flex-col lg:flex-row">
      {menuItems.map((item, index) => (
        <Link
          className={`menu-link rotate-parent text-gray-200 lg:hover:text-orange-500 font-(family-name:--font-geist) lg:text-[1.2rem] text-3xl text-center  font-light lg:font-medium w-full -tracking-normal flex justify-center items-end gap-1.5`}
          href={item.href}
          key={index}
          onClick={() => {
            setTimeout(() => {
              setNavActive(false);
            }, 0);
          }}
        >
          <MoveUpContainer>
            <RotateContainer
              styles={"py-2.5 lg:py-6 px-5"}
              textES={item.textES}
              textEN={item.textEN}
            />
          </MoveUpContainer>
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
