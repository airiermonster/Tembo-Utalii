import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Tembo Utalii
        </Link>
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <Link href="/admin">Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}