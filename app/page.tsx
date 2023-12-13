import HeaderNav from "@/components/header-nav";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col border-2 border-solid border-neutral-400 p-24">
      <HeaderNav />
    </div>
  );
}
