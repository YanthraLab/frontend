import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/molecules/ThemeSwitch/ThemeSwitch";
import { Cpu, Shield } from "lucide-react";
import Link from "next/link";

const NavigationBar = () => {
    return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Cpu className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                    Yanthra
                </span>
            </div>
            
            <div className="flex items-center gap-6">
                <Link href="/admin" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    <Shield className="w-4 h-4" />
                    Admin
                </Link>
                
                <Link href="/login" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Sign In
                </Link>
                
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Get Started
                </Button>
                
                <ThemeSwitch/>
            </div>
        </div>
    </nav>
    );
}
export { NavigationBar };