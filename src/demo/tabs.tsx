import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/main";

export default function TabsDemo() {
  return (
    <>
      <h2>Tabs</h2>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="delete">Delete</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="delete">Delete your account here.</TabsContent>
      </Tabs>
    </>
  );
}
