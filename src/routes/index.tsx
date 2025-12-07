import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-y-2">
      <h1>TanStack Start Template</h1>
      <Button>Click me</Button>
    </div>
  );
}
