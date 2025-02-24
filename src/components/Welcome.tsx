
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Welcome = () => {
  return (
    <Card className="max-w-md mx-auto mt-8 fade-in">
      <CardHeader>
        <h1 className="text-3xl font-bold text-center mb-2">TEMBO UTALII</h1>
        <p className="text-gray-500 text-center">Let's get you rolling</p>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button size="lg" className="w-full">
          Start Survey
        </Button>
      </CardContent>
    </Card>
  );
};
