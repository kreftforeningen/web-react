import {
  Person,
  PersonItem,
  PersonItemContent,
  PersonItemDescription,
  PersonItemEmail,
  PersonItemImage,
  PersonItemName,
  PersonItemPhone,
  PersonItemTitle,
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
    <>
      <h2>Person</h2>
      <Person>
        {people.map((item) => (
          <PersonItem key={item.id}>
            <PersonItemImage
              src={item.image}
              alt={`${item.firstName} ${item.lastName}`}
              fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
            />
            <PersonItemContent>
              <PersonItemName>
                {item.firstName} {item.lastName}
              </PersonItemName>
              <PersonItemTitle>{item.title}</PersonItemTitle>
              <PersonItemEmail href={`mailto:${item.email}`}>
                {item.email}
              </PersonItemEmail>
              <PersonItemPhone href={`tel:${item.phone}`}>
                {item.phone}
              </PersonItemPhone>
              <PersonItemDescription>
                {item.description}
              </PersonItemDescription>
            </PersonItemContent>
          </PersonItem>
        ))}
      </Person>
    </>
  );
}

