import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import { Beer } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div>
        <ModeToggle></ModeToggle>
      </div>
      <div>
        <p className="font-headings text-9xl">Nine x-tra large (9xl)</p>
        <p className="font-headings text-8xl">Eight x-tra large (8xl)</p>
        <p className="font-headings text-7xl">Seven x-tra large (7xl)</p>
        <p className="font-headings text-6xl">Six x-tra large (6xl)</p>
        <h1 className="font-headings text-5xl">Heading 1 (5xl)</h1>
        <h2 className="font-headings text-4xl">Heading 2 (4xl)</h2>
        <h3 className="font-headings text-3xl">Heading 3 (3xl)</h3>
        <h4 className="font-headings text-2xl">Heading 4 (2xl)</h4>
        <h5 className="font-headings text-xl">Heading 5 (xl)</h5>
        <h6 className="font-headings text-lg">Heading 6 (lg)</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* no need to declare font-body class since is is declared on body tag */}
        <p className="text-sm">Small font size (sm)</p>
        <p className="text-xs">Extra small font size (xs)</p>
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Button variant="default" size="sm">
            Click me
          </Button>
          <Button variant="default">Click me</Button>
          <Button variant="default" size="lg">
            Click me
          </Button>
          <Button variant="default" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <Button variant="secondary" size="sm">
            Click me
          </Button>
          <Button variant="secondary">Click me</Button>
          <Button variant="secondary" size="lg">
            Click me
          </Button>
          <Button variant="secondary" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <Button variant="outline" size="sm">
            Click me
          </Button>
          <Button variant="outline">Click me</Button>
          <Button variant="outline" size="lg">
            Click me
          </Button>
          <Button variant="outline" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Click me
          </Button>
          <Button variant="ghost">Click me</Button>
          <Button variant="ghost" size="lg">
            Click me
          </Button>
          <Button variant="ghost" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <Button variant="destructive" size="sm">
            Click me
          </Button>
          <Button variant="destructive">Click me</Button>
          <Button variant="destructive" size="lg">
            Click me
          </Button>
          <Button variant="destructive" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <Button variant="link" size="sm">
            Click me
          </Button>
          <Button variant="link">Click me</Button>
          <Button variant="link" size="lg">
            Click me
          </Button>
          <Button variant="link" size="icon">
            <Beer className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/*same styles as the destructive button. varient styles get added to base button styles in component file*/}
        <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Click me
        </Button>
        {/*size variants*/}
      </div>
    </main>
  );
}
