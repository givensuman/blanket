import { useContext, createContext } from "react";
import type { ReactNode } from "react";

import icons from "../assets/icons";
import sounds from "../assets/sounds";
import type { Icons, Sounds } from "../types";

const AssetsContext =
  createContext<{
    icons: Icons;
    sounds: Sounds;
  } | null>(null);

export interface Props {
  children?: ReactNode;
}

export const AssetsProvider = ({ children }: Props) => {
  return (
    <AssetsContext.Provider
      value={{
        icons: icons,
        sounds: sounds,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default function useAssets() {
  const ctx = useContext(AssetsContext);

  if (!ctx) {
    throw new Error("AssetsContext not found. Are you using <AssetsProvider>?");
  } else {
    return ctx;
  }
}
