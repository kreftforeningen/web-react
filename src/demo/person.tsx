import {
  HGrid,
  Page,
  Person,
  PersonContent,
  PersonDescription,
  PersonEmail,
  PersonImage,
  PersonName,
  PersonPhone,
  PersonTitle,
} from "@/lib/main";

const people = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+47 98765432",
    title: "Software Engineer",
    image: "https://robohash.org/John?set=set4",
    description:
      "John Doe is a software engineer with a passion for building scalable and efficient systems.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "j.doe@example.com",
    phone: "+47 98765432",
    title: "Marketing Manager",
    image: "https://robohash.org/Jane?set=set4",
    description:
      "Jane Doe is a marketing manager who loves crafting memorable campaigns.",
  },
];

export default function PersonDemo() {
  return (
    <Page.Block width="xl" gutters>
      <h2>Person</h2>
      <HGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}>
        {people.map((item) => (
          <Person key={item.id}>
            <PersonImage
              src={item.image}
              alt={`${item.firstName} ${item.lastName}`}
              fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
            />
            <PersonContent>
              <PersonName>
                {item.firstName} {item.lastName}
              </PersonName>
              <PersonTitle>{item.title}</PersonTitle>
              <PersonEmail href={`mailto:${item.email}`}>
                {item.email}
              </PersonEmail>
              <PersonPhone href={`tel:${item.phone}`}>{item.phone}</PersonPhone>
              <PersonDescription>{item.description}</PersonDescription>
            </PersonContent>
          </Person>
        ))}
      </HGrid>
    </Page.Block>
  );
}
