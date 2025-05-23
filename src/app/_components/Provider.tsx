"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import {
  LanguageContext,
  MouseClickContext,
  NavContext,
  PointerContext,
} from "../../contexts/ContextHooks";
import {
  LanguageType,
  MouseClick,
  NavIndexType,
  PointerIn,
} from "../../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [index, setIndex] = useState<NavIndexType>(0);
  const [pointerIn, setPointerIn] = useState<PointerIn>(false);
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [mouseClick, setMouseClick] = useState<MouseClick>(false);

  useEffect(() => {
    console.log(
      "%c Developed by Francisco Osorio Silva - https://francwow.com/",
      "background: #000; color: #fff;"
    );
  }, []);

  return (
    <MouseClickContext.Provider value={{ mouseClick, setMouseClick }}>
      <NavContext.Provider value={{ index, setIndex }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <PointerContext.Provider value={{ pointerIn, setPointerIn }}>
            {props.children}
          </PointerContext.Provider>
        </LanguageContext.Provider>
      </NavContext.Provider>
    </MouseClickContext.Provider>
  );
};

export default Provider;
