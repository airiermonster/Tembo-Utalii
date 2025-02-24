
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Palmtree } from 'lucide-react';

export const SignupLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/language");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center p-4 mt-20">
      <div className="mb-8 text-center">
        <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
          <Palmtree className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Tembo Utalii</h1>
      </div>

      <Card className="w-full max-w-md">
        {/* Rest of the card content remains the same */}
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* OAuth Buttons */}
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              onClick={() => {}}
            >
              <FaGoogle className="w-5 h-5 text-red-500" />
              Continue with Google
            </Button>
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              onClick={() => {}}
            >
              <FaFacebook className="w-5 h-5 text-blue-600" />
              Continue with Facebook
            </Button>
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              onClick={() => {}}
            >
              <FaTwitter className="w-5 h-5 text-blue-400" />
              Continue with Twitter
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="text-center">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
