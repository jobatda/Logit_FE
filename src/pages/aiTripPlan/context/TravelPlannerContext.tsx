// src/context/TravelPlannerContext.tsx
import styled from "styled-components";
import React, { createContext, useContext, useState } from "react";

interface TravelData {
  region: string | null;
  duration: string | null;
  themes: string[];
}

interface TravelPlannerContextType {
  data: TravelData;
  setRegion: (region: string) => void;
  setDuration: (duration: string) => void;
  setThemes: (themes: string[]) => void;
}

const defaultData: TravelData = {
  region: null,
  duration: null,
  themes: [],
};

const TravelPlannerContext = createContext<TravelPlannerContextType | undefined>(undefined);

export function TravelPlannerProvider({ children }) {
  const [data, setData] = useState<TravelData>(defaultData);

  const setRegion = (region: string) => setData((prev) => ({ ...prev, region }));
  const setDuration = (duration: string) => setData((prev) => ({ ...prev, duration }));
  const setThemes = (themes: string[]) => setData((prev) => ({ ...prev, themes }));

  return (
    <TravelPlannerContext.Provider value={{ data, setRegion, setDuration, setThemes }}>
      {children}
    </TravelPlannerContext.Provider>
  );
}

export function useTravelPlanner() {
  const context = useContext(TravelPlannerContext);
  // if (!context) {
  //   throw new Error("useTravelPlanner must be used within a TravelPlannerProvider");
  // }
  return context;
}
