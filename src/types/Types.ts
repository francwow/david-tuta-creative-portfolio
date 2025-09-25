export type NavType = boolean;

export type PointerIn = boolean;

export type MouseClick = boolean;

export type LanguageType = "ES" | "EN";

export type NavContextType = {
  navActive: NavType;
  setNavActive: (navActive: NavType) => void;
};

export type PointerContextType = {
  pointerIn: PointerIn;
  setPointerIn: (pointerIn: PointerIn) => void;
};

export type MouseClickContextType = {
  mouseClick: MouseClick;
  setMouseClick: (mouseClick: MouseClick) => void;
};

export type LanguageContextType = {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
};
