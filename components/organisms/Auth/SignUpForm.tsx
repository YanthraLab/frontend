"use client"

import Link from "next/link"
import { Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const SignUpForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer" // Default role
  })
  const [loading, setLoading] = useState(false)

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setLoading(true)
    try {
        // Exclude confirmPassword from the payload
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...signupPayload } = formData;
        
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupPayload),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Registration failed")

      toast.success("Account created successfully! Please sign in.")
      router.push("/signin")
    } catch (error: any) {
      toast.error(error.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

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
        <CardTitle className="text-xl">Create Account</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Join Yanthra and start learning IoT
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
      <CardContent className="space-y-4">
      <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" 
                required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
                id="email" 
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" 
                required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password"  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
                id="password" 
                type="password"
                value={formData.password}
                onChange={handleChange} 
                placeholder="••••••••" 
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" 
                required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword"  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
                id="confirmPassword" 
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange} 
                placeholder="••••••••" 
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus-visible:ring-cyan-500" 
                required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-slate-400 dark:border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" required />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400"
            >
              I agree to the <Link href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline">Terms of Service</Link> and <Link href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline">Privacy Policy</Link>
            </label>
          </div>
        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-10" type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </CardContent>
      </form>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-cyan-600 dark:text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 font-medium">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export { SignUpForm }