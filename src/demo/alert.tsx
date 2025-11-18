import { Alert, AlertDescription, AlertTitle, Page, VStack } from "@/lib/main";
import { CircleAlert, CircleCheck } from "lucide-react";

export default function AlertDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Alert</h2>
      <VStack>
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
      </VStack>
    </Page.Block>
  );
}
