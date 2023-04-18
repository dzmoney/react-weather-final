import { createContext, useState } from "react";

export const DegreeTypeContext = createContext();

export const DegreeTypeProvider = ({ children }) => {
  const [degreeType, setDegreeType] = useState("celsius");

  return (
    <DegreeTypeContext.Provider value={{ degreeType, setDegreeType }}>
      {children}
    </DegreeTypeContext.Provider>
  );
};
