import * as React from "react";

import { Calendar, Page } from "@/lib/main";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Page.Block width="3xl" gutters>
      <h2>Calendar</h2>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </Page.Block>
  );
}
