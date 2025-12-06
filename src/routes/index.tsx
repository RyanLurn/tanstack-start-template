import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <h1>TanStack Start Template</h1>
    </div>
  );
}
