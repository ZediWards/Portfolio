import { lora } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className={`${lora.className} text-5xl`}>Heading 1</h1>
        <p>Hello there!</p>
      </div>
    </main>
  );
}
