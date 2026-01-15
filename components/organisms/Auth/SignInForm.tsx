"use client"

import Link from "next/link"
import { Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SignInForm() {
  return (
    <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 text-cyan-400">
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
        <CardDescription className="text-slate-400">
          Sign in to continue your IoT learning journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input id="email" placeholder="you@example.com" className="pl-9 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password"  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input id="password" type="password" placeholder="••••••••" className="pl-9 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-400"
            >
              Remember me
            </label>
          </div>
          <Link href="#" className="text-sm font-medium text-cyan-500 hover:text-cyan-400">
            Forgot password?
          </Link>
        </div>
        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-10">
          Sign In
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-cyan-500 hover:text-cyan-400 font-medium">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
