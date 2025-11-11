import {
  Timeline,
  TimelineItem,
  TimelineItemDescription,
  TimelineItemTitle,
} from "@/lib/main";

const events = [
  {
    title: "Kickoff Meeting",
    description: "Initial meeting with stakeholders to align on goals.",
  },
  {
    title: "Design Phase",
    description: "Create wireframes and prototypes for the new feature.",
  },
  {
    title: "Development",
    description: "Implement the feature and validate with QA.",
  },
];

export default function TimelineDemo() {
  return (
    <>
      <h2>Timeline</h2>
      <Timeline>
        {events.map((event, index) => (
          <TimelineItem key={event.title} isLast={index === events.length - 1}>
            <TimelineItemTitle>{event.title}</TimelineItemTitle>
            <TimelineItemDescription>{event.description}</TimelineItemDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}

