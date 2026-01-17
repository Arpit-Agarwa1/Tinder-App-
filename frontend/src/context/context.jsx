import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const tinderContext = createContext();

export default function TinderProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <tinderContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        {children}
      </tinderContext.Provider>
    </div>
  );
}
