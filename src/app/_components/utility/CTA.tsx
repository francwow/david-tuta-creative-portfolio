import { useLanguage } from "@/contexts/ContextHooks";
import Link from "next/link";
import MoveUpContainer from "./MoveUpContainer";

const CTA = ({ textEN, textES }: { textEN: string; textES: string }) => {
  const { language } = useLanguage();

  return (
    <MoveUpContainer>
      <div className="cta-container">
        <Link
          href="/contact"
          className="cta flex items-center gap-2 justify-center text-[1.2rem] lg:text-[1.5rem] font-bold font-(family-name:--font-geist) text-orange-500 cursor-pointer tracking-wider p-1 border-b-2 lg:border-b-0"
        >
          <p className="cta-text leading-none">
            {language === "EN" ? textEN : textES}
          </p>
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
        </Link>
      </div>
    </MoveUpContainer>
  );
};

export default CTA;
