import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="mb-2 flex items-center gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Default styles</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        {/* //----------------------------------------------------------------------------------------------- */}
        <Card className="max-w-[700px] grow">
          <div className="max-w-[450px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/kanban-desktop.png"
                height={1912}
                width={935}
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>

          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Default styles</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
