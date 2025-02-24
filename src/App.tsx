import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Introduction } from "@/components/Introduction";
import { SignupLogin } from "@/components/auth/SignupLogin";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SurveyForm } from "@/components/Survey/SurveyForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/auth" element={<SignupLogin />} />
            <Route path="/language" element={<LanguageSelector />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
