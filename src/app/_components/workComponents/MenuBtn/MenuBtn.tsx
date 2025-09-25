import { Dispatch } from "react";
import "./menu-btn.css";
import { ACTIONS } from "../MainGrid/MainGrid";
import { useLanguage } from "@/contexts/ContextHooks";

type MenuBtnProps = {
  dispatch: Dispatch<{ type: string; payload: string }>;
};

const MenuBtn = ({ dispatch }: MenuBtnProps) => {
  const { language } = useLanguage();

  return (
    <div
      onClick={() => {
        dispatch({ type: ACTIONS.CLICK_MENU, payload: "click-menu" });
      }}
      className="menu-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right-icon lucide-arrow-right lg:w-[30px] lg:h-[30px]"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      <p className="cta-text leading-none">
        {language === "EN" ? "back to menu" : "volver al menú"}
      </p>
    </div>
  );
};

export default MenuBtn;
