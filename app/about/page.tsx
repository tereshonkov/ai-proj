export default async function About() {
  console.log("About page rendered");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
