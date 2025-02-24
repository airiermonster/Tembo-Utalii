import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";

export const SignupLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, accept any email and password
    navigate("/language"); // This will redirect to language selection
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center">
      <Card className="max-w-md mx-auto w-full">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Welcome</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};