import {
  Infographic,
  InfographicItem,
  InfographicItemDescription,
  InfographicItemIcon,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemTitleText,
} from "@/lib/main";
import { ServerIcon } from "lucide-react";

const infographicItems = [
  {
    id: 1,
    titleNumber: "3 %",
    titleText: "Project Kickoff",
    description: "Initial meeting with the team and stakeholders.",
  },
  {
    id: 2,
    titleNumber: "2",
    titleText: "Design Phase",
    description: "UI/UX design and prototyping.",
  },
  {
    id: 3,
    titleNumber: "4",
    titleText: "Development Start",
    description: "Begin coding the main features.",
  },
];

export default function InfographicDemo() {
  return (
    <>
      <h2>Infographic</h2>
      <Infographic>
        {infographicItems.map((item) => (
          <InfographicItem key={item.id} color="blue">
            <InfographicItemIcon>
              <ServerIcon strokeWidth={1} />
            </InfographicItemIcon>
            <InfographicItemTitle>
              <InfographicItemTitleNumber>
                {item.titleNumber}
              </InfographicItemTitleNumber>
              <InfographicItemTitleText>
                {item.titleText}
              </InfographicItemTitleText>
            </InfographicItemTitle>
            <InfographicItemDescription>
              {item.description}
            </InfographicItemDescription>
          </InfographicItem>
        ))}
      </Infographic>
    </>
  );
}

