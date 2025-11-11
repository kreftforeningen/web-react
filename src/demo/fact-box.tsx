import {
  Button,
  FactBox,
  FactBoxAction,
  FactBoxContent,
  FactBoxDescription,
  FactBoxTitle,
} from "@/lib/main";

export default function FactBoxDemo() {
  return (
    <>
      <h2>Fact Box</h2>
      <FactBox>
        <FactBoxContent>
          <FactBoxTitle>Fact About Cancer</FactBoxTitle>
          <FactBoxDescription>
            <p>
              Something you should know about cancer. Is that it is a disease
              that affects many people. It can be treated and cured with
              different methods.
            </p>
            <p>
              Do you think you have cancer? You probably don't. But you should
              still get checked out.
            </p>
            <p>
              If you do not have cancer, you are lucky. But you should still get
              checked out.
            </p>
          </FactBoxDescription>
          <FactBoxAction>
            <Button variant="outline">Learn More</Button>
          </FactBoxAction>
        </FactBoxContent>
      </FactBox>
    </>
  );
}
