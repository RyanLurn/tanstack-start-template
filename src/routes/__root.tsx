import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { ThemeToggle } from "@/components/utilities/theme-toggle";
import { AppProviders } from "@/components/providers/app";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "TanStack Start Template",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppProviders>
          {children}
          <ThemeToggle className="fixed top-3 right-3 z-50" />
        </AppProviders>
        <TanStackDevtools
          plugins={[
            {
              render: <TanStackRouterDevtoolsPanel />,
              name: "Tanstack Router",
            },
          ]}
          config={{
            position: "bottom-right",
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
