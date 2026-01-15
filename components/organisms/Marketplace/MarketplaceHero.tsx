import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MarketplaceHero() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">IoT Marketplace</h1>
        <p className="text-slate-400">Premium IoT hardware and components from trusted vendors in Sri Lanka</p>
      </div>
      
      <div className="flex w-full items-center space-x-2 rounded-lg border border-slate-800 bg-slate-900/50 p-2">
        <Search className="ml-2 h-5 w-5 text-slate-500" />
        <Input 
            className="border-0 bg-transparent text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0" 
            placeholder="Search for Arduino, Raspberry Pi, sensors..." 
        />
        <Button className="bg-cyan-500 text-white hover:bg-cyan-600">Browse All</Button>
      </div>
    </div>
  )
}
