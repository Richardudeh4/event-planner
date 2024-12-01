import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4" >
    <Button variant="primary" size="lg">Primary</Button>
    <Input/>
    <Button variant="secondary">Primary</Button>
    <Button variant="destructive">Primary</Button>
    <Button variant="ghost">Primary</Button>
    <Button variant="muted">Primary</Button>
    <Button variant="outline">Primary</Button>
    <Button variant="teritrary">Primary</Button>
    </div>
  );
}
