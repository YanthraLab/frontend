import { Target, Lock, Heart } from "lucide-react" // Heart as placeholder for Strawberry
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecommendedCourses() {
  const recommendations = [
    {
        title: "Advanced Arduino Programming",
        category: "Intermediate",
        icon: <Target className="h-8 w-8 text-pink-500" />,
        color: "text-pink-500"
    },
    {
        title: "IoT Security Fundamentals",
        category: "Beginner",
        icon: <Lock className="h-8 w-8 text-amber-500" />,
        color: "text-amber-500"
    },
    {
        title: "Raspberry Pi Projects",
        category: "Advanced",
        icon: <Heart className="h-8 w-8 text-rose-500" />, // Using Heart as "Strawberry" like icon is not in standard set, maybe generic
        color: "text-rose-500"
    }
  ]

  return (
    <div className="space-y-4">
        <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Recommended for You</h3>
                <p className="text-sm text-slate-400">Based on your learning path</p>
            </div>
            <Button variant="outline" className="text-cyan-500 border-slate-700 hover:bg-slate-800">View All</Button>
        </div>
     
      <div className="grid gap-4 md:grid-cols-3">
        {recommendations.map((item, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className={`p-0 ${item.color}`}>
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <Badge variant="secondary" className="bg-slate-800 text-slate-400 hover:bg-slate-700">
                    {item.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
