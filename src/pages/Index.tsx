
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Introduction } from "@/components/Introduction";
import { SignupLogin } from "@/components/auth/SignupLogin";

type Step = "intro" | "auth" | "language";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("intro");

  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return <Introduction onGetStarted={() => setCurrentStep("auth")} />;
      case "auth":
        return <SignupLogin />;
      case "language":
        return (
          <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center">
            <div className="w-full max-w-md md:max-w-2xl mx-auto">
              <LanguageSelector />
            </div>
          </div>
        );
      default:
        return <Introduction onGetStarted={() => setCurrentStep("auth")} />;
    }
  };

  return (
    <Layout>
      {renderStep()}
    </Layout>
  );
};

export default Index;
