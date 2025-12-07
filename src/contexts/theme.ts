import { createContext } from "react";

import type { UserTheme, AppTheme } from "@/lib/theme";

type ThemeContextProperties = {
  setTheme: (theme: UserTheme) => void;
  userTheme: UserTheme;
  appTheme: AppTheme;
};

const ThemeContext = createContext<ThemeContextProperties | undefined>(
  undefined
);

export { ThemeContext };
