"use client";
import { createContext, useState, useEffect } from "react";
import { IdeasSchema } from "@/utils/schema";

type IdeasContextType = {
  ideas: IdeasSchema[];
  setIdeas: React.Dispatch<React.SetStateAction<IdeasSchema[]>>;
};

export const IdeasContext = createContext<IdeasContextType>({
  ideas: [],
  setIdeas: () => {},
});

export const IdeasProvider = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<IdeasSchema[]>([]);

  async function fetchIdeas() {
    const allIdeas = await fetch("/api/ideas");
    const ideas = await allIdeas.json();
    setIdeas(ideas);
  }

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <IdeasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
};
