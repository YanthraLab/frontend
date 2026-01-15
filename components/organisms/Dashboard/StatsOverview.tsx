import { Zap, Book, Award, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-amber-900/20 border-amber-900/50">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-amber-500">XP Points</p>
            <p className="text-2xl font-bold text-white">2,450</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-900/50 text-amber-500">
            <Zap className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-sky-900/20 border-sky-900/50">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-sky-500">Courses Completed</p>
            <p className="text-2xl font-bold text-white">8</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-900/50 text-sky-500">
            <Book className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-purple-900/20 border-purple-900/50">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-purple-500">Achievements</p>
            <p className="text-2xl font-bold text-white">12</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-500">
            <Award className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-900/20 border-emerald-900/50">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-emerald-500">Current Streak</p>
            <p className="text-2xl font-bold text-white">7 days</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-500">
            <Target className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
