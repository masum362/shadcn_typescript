import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function App() {
  return (
    <div className="flex">
      <Avatar >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default App;
