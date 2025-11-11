import React from "react";

import { ScrollArea, Separator } from "@/lib/main";

const tags = Array.from({ length: 20 }).map(
  (_, index, array) => `v1.2.0-beta.${array.length - index}`
);

export default function ScrollAreaDemo() {
  return (
    <>
      <h2>Scroll Area</h2>
      <ScrollArea className="app-padding-md">
        <div className="app-padding-md">
          <h4 className="app-list-heading">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="app-text-sm">{tag}</div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
