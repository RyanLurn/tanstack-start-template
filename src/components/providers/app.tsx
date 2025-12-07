import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme";

function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export { AppProviders };
