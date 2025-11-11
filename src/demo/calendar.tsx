import * as React from "react";

import { Calendar } from "@/lib/main";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <h2>Calendar</h2>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </>
  );
}
