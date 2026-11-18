import Counter from "@/components/CounterForTest";

export default function Contacts() {
  console.log("Contacts page rendered");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Contacts Page</h1>
      <p>This is the contacts page.</p>
      <Counter />
    </div>
  );
}
