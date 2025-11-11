import { Button, Spinner } from "@/lib/main";

export default function SpinnerDemo() {
  return (
    <>
      <h2>Spinner</h2>
      <div className="app-centered-column-lg">
        <Button disabled size="sm">
          <Spinner />
          Loading...
        </Button>
        <Spinner />
        <Spinner />
        <Spinner />
      </div>
    </>
  );
}
