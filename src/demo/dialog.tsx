import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Page,
} from "@/lib/main";

export default function DialogDemo() {
  return (
    <Page.Block width="xl" gutters>
      <h2>Dialog</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Click to show dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Page.Block>
  );
}
