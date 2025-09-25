"use client";

import { useReducer } from "react";
import "./main-grid.css";
import { useMediaQuery } from "usehooks-ts";
import GridItemDeskTop from "../GridItem/GridItemDeskTop";
import GridItemMobile from "../GridItem/GridItemMobile";
import PagesContainer from "../PagesContainer/PagesContainer";

export const ACTIONS = {
  HOVER_GRID: "hover_grid",
  CLICK_GRID: "click_grid",
  CLICK_MENU: "click_menu",
  NAVIGATE: "navigate",
  ACTIVE_ITEM: "active_item",
};

const initialState = {
  grid: {
    columns: "6fr 6fr",
    rows: "6fr 6fr",
  },
  navigation: "home",
  itemActive: null,
};

type ActionType = { type: string; payload: string | number };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, { type, payload }: ActionType) => {
  switch (type) {
    case ACTIONS.HOVER_GRID:
      if (payload === 0) {
        return {
          ...state,
          grid: { columns: "7fr 5fr", rows: "7fr 5fr" },
        };
      }
      if (payload === 1) {
        return {
          ...state,
          grid: { columns: "5fr 7fr", rows: "7fr 5fr" },
        };
      }
      if (payload === 2) {
        return {
          ...state,
          grid: { columns: "7fr 5fr", rows: "5fr 7fr" },
        };
      }
      if (payload === 3) {
        return {
          ...state,
          grid: { columns: "5fr 7fr", rows: "5fr 7fr" },
        };
      }

    case ACTIONS.CLICK_GRID:
      if (payload === 0) {
        return {
          ...state,
          grid: { columns: "12fr 0fr", rows: "12fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 1) {
        return {
          ...state,
          grid: { columns: "0fr 12fr", rows: "12fr 0fr" },
          itemActive: payload,
        };
      }
      if (payload === 2) {
        return {
          ...state,
          grid: { columns: "12fr 0fr", rows: "0fr 12fr" },
          itemActive: payload,
        };
      }
      if (payload === 3) {
        return {
          ...state,
          grid: { columns: "0fr 12fr", rows: "0fr 12fr" },
          itemActive: payload,
        };
      }
      return state;

    case ACTIONS.CLICK_MENU:
      return initialState;

    case ACTIONS.NAVIGATE:
      return {
        ...state,
        navigation: payload,
      };
  }
};

const MainGrid = () => {
  const [{ grid, navigation, itemActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const deskTop = useMediaQuery("(min-width: 991px)");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: grid.columns,
    gridTemplateRows: grid.rows,
    gap: `${navigation === "home" ? "5px" : "0px"}`,
    transition: "0.3s ease all",
    zIndex: "9",
  };

  return (
    <div className="grid-wrapper">
      {navigation === "pages" ? (
        <PagesContainer itemActive={itemActive} dispatch={dispatch} />
      ) : null}
      {deskTop ? (
        <div className="grid-container">
          <div className="grid" style={gridStyle}>
            {Array.from({ length: 4 }).map((_, i) => (
              <GridItemDeskTop
                key={i}
                dispatch={dispatch}
                id={i}
                navigation={navigation}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid-container">
          <div className="grid" style={gridStyle}>
            {Array.from({ length: 4 }).map((_, i) => (
              <GridItemMobile
                key={i}
                dispatch={dispatch}
                id={i}
                navigation={navigation}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGrid;
