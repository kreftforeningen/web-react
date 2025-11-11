import * as React from "react";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/lib/main";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <h2>Collapsible</h2>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="app-feature-list-compact"
      >
        <div className="app-collapsible-header">
          <h4 className="app-text-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronsUpDown />
              <span className="app-sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="app-code-chip">@radix-ui/primitives</div>
        <CollapsibleContent>
          <div className="app-code-chip">@radix-ui/colors</div>
          <div className="app-code-chip">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

