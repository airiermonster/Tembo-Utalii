
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="w-full px-4 md:container md:mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">TEMBO UTALII</h1>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};
