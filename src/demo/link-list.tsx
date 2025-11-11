import {
  LinkList,
  LinkListDescription,
  LinkListItem,
  LinkListTitle,
} from "@/lib/main";

const linkItems = [
  {
    id: 1,
    title: "Project Kickoff",
    content: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    title: "Design Phase",
    content: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Development Start",
    content: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
];

export default function LinkListDemo() {
  return (
    <>
      <h2>Link List</h2>
      <LinkList>
        {linkItems.map((item) => (
          <LinkListItem key={item.id} href={item.url}>
            <LinkListTitle>{item.title}</LinkListTitle>
            <LinkListDescription>{item.content}</LinkListDescription>
          </LinkListItem>
        ))}
      </LinkList>
    </>
  );
}
