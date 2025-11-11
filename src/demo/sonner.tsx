import { Button, Toaster } from "@/lib/main";
import { toast } from "sonner";

export default function SonnerDemo() {
  return (
    <>
      <h2>Sonner</h2>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
