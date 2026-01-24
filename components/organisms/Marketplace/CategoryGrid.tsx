import { Cpu, Zap, Wifi, Battery } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CategoryGrid() {
  const categories = [
    {
      title: "Microcontrollers",
      count: "45 items",
      icon: <Cpu className="h-6 w-6 text-cyan-400" />,
      color: "bg-cyan-950/30 border-cyan-900/50 hover:bg-cyan-900/30",
    },
    {
      title: "Sensors",
      count: "78 items",
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      color: "bg-purple-950/30 border-purple-900/50 hover:bg-purple-900/30",
    },
    {
      title: "Communication",
      count: "34 items",
      icon: <Wifi className="h-6 w-6 text-blue-400" />,
      color: "bg-blue-950/30 border-blue-900/50 hover:bg-blue-900/30",
    },
    {
      title: "Power & Battery",
      count: "29 items",
      icon: <Battery className="h-6 w-6 text-emerald-400" />,
      // Note: Image shows green icon but card is dark.
      color: "bg-emerald-950/30 border-emerald-900/50 hover:bg-emerald-900/30",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">Browse by Category</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Card key={index} className={`cursor-pointer border transition-colors ${category.color}`}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex flex-col gap-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/50 dark:bg-slate-950/50">
                    {category.icon}
                 </div>
                 <h3 className="font-semibold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="self-start rounded-full bg-white/50 dark:bg-slate-950/50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                {category.count}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
