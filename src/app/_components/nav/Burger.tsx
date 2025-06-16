type BurgerProps = {
  setNavActive: (navActive: boolean) => void;
  navActive: boolean;
};

const Burger = ({ setNavActive, navActive }: BurgerProps) => {
  return (
    <div
      onClick={() => setNavActive(!navActive)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setNavActive(!navActive);
        }
      }}
      role="button"
      tabIndex={0}
      className="burger p-2 lg:p-5 lg:hidden gap-1.5 flex flex-col justify-center items-center h-full z-[99]"
    >
      <div className="burger-line w-[30px] h-[1px] bg-white"></div>
      <div className="burger-line w-[30px] h-[1px] bg-white"></div>
    </div>
  );
};

export default Burger;
