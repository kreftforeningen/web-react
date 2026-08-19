"use client";

import { createContext, useContext } from "react";

type Direction = "ltr" | "rtl";

type DirectionProviderProps = {
  direction: Direction;
  children: React.ReactNode;
};

const DirectionContext = createContext<Direction | null>(null);

function DirectionProvider({ direction, children }: DirectionProviderProps) {
  return (
    <DirectionContext.Provider value={direction}>
      <div dir={direction} data-slot="direction-provider">
        {children}
      </div>
    </DirectionContext.Provider>
  );
}

function useDirection(): Direction {
  const context = useContext(DirectionContext);
  if (context === null) {
    throw new Error("useDirection must be used within a DirectionProvider");
  }
  return context;
}

export { DirectionProvider, useDirection };
