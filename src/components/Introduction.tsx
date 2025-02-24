
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, MessageSquare, BarChart3, Globe2, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: "Easy Feedback",
      description: "Share your Zanzibar experience in just a few clicks"
    },
    {
      icon: <Globe2 className="w-6 h-6 text-green-500" />,
      title: "Multiple Languages",
      description: "Available in 7 different languages for your convenience"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Rate Services",
      description: "Rate accommodations, activities, and tourist attractions"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: "Improve Tourism",
      description: "Help enhance Zanzibar's tourism services"
    }
  ];

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-up">
                Share Your <span className="text-blue-600">Zanzibar</span> Story
              </h1>
              <p className="text-xl text-gray-600 mb-8 fade-in max-w-xl">
                Help us enhance the tourism experience in Zanzibar by sharing your valuable feedback. Your voice shapes the future of our paradise island.
              </p>
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="group text-lg"
              >
                Start Survey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                <Palmtree className="w-full h-full p-12 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Share Your Experience?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
