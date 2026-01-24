"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation"

interface SignInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignInForm = () => {
  const router = useRouter();
  const [signInData, setSignInData] = useState<SignInData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Sending to backend:", signInData);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(signInData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");
      router.push("/dashboard")
      console.log("Login successful", data);
      toast.success("Login successful");
      // Redirect or update auth state here
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <Card className="w-full max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M7 12h.01" />
              <path d="M7 17h.01" />
              <path d="M12 7h.01" />
              <path d="M12 12h.01" />
              <path d="M12 17h.01" />
              <path d="M17 7h.01" />
              <path d="M17 12h.01" />
              <path d="M17 17h.01" />
            </svg>
            <span className="text-2xl font-bold">Yanthra</span>
          </div>
        </div>
        <CardTitle className="text-xl">Welcome Back</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Sign in to continue your IoT learning journey
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={signInData.email}
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={signInData.password}
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={signInData.rememberMe}
                onCheckedChange={(checked) =>
                  setSignInData({ ...signInData, rememberMe: !!checked })
                }
                className="border-slate-600 data-[state=checked]:bg-cyan-500"
              />

              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400"
              >
                Remember me
              </label>
            </div>
            <Link
              href="#"
              className="text-sm font-medium text-cyan-600 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-10"
            type="submit"
          >
            Sign In
          </Button>
        </CardContent>
      </form>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 font-medium"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
export { SignInForm };
