import { Alert, AlertDescription, AlertTitle } from "@/lib/main";
import { CircleAlert, CircleCheck } from "lucide-react";

export default function AlertDemo() {
  return (
    <>
      <h2>Alert</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CircleCheck />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}
