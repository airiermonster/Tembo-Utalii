
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/patterns/palm.svg')] bg-repeat" />
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
