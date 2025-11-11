import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/lib/main";
import { ArrowLeftIcon } from "lucide-react";

export default function ButtonGroupDemo() {
  return (
    <>
      <h2>Button Group</h2>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroupSeparator />
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroupText>Button Group Text</ButtonGroupText>
      </ButtonGroup>
    </>
  );
}
