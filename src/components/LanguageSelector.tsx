
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GB, TZ, FR, DE, CN, SA } from 'country-flag-icons/react/3x2'

export const LanguageSelector = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleContinue = () => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
      navigate("/survey");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Choose Your Language</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            variant={selectedLanguage === "en" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("en")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>English</span>
            <GB className="w-8 h-8" />
          </Button>
          <Button
            variant={selectedLanguage === "sw" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("sw")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>Swahili</span>
            <TZ className="w-8 h-8" />
          </Button>
          <Button
            variant={selectedLanguage === "fr" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("fr")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>French</span>
            <FR className="w-8 h-8" />
          </Button>
          <Button
            variant={selectedLanguage === "de" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("de")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>German</span>
            <DE className="w-8 h-8" />
          </Button>
          <Button
            variant={selectedLanguage === "zh" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("zh")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>Chinese</span>
            <CN className="w-8 h-8" />
          </Button>
          <Button
            variant={selectedLanguage === "ar" ? "default" : "outline"}
            onClick={() => setSelectedLanguage("ar")}
            className="flex flex-col gap-2 h-auto py-4"
          >
            <span>Arabic</span>
            <SA className="w-8 h-8" />
          </Button>
        </div>
        <Button 
          onClick={handleContinue}
          className="w-full"
          disabled={!selectedLanguage}
        >
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};
