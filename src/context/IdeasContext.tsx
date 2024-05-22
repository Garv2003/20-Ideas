import { createContext, useState } from "react";
import { IdeasSchema } from "../utils/schema";

type IdeasContextType = {
  ideas: IdeasSchema[];
  setIdeas: React.Dispatch<React.SetStateAction<IdeasSchema[]>>;
};

export const IdeasContext = createContext<IdeasContextType>({
  ideas: [],
  setIdeas: () => {},
});

export const IdeasProvider = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<IdeasSchema[]>(
    JSON.parse(localStorage.getItem("ideas") || "[]")
  );

  return (
    <IdeasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
};
