import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function ContinueLearning() {
  const courses = [
    {
      title: "Introduction to Arduino",
      progress: 75,
      lessons: "6/8 lessons",
      color: "bg-cyan-500",
    },
    {
      title: "IoT Communication Protocols",
      progress: 45,
      lessons: "5/12 lessons",
      color: "bg-cyan-500",
    },
    {
      title: "Sensor Integration Basics",
      progress: 90,
      lessons: "9/10 lessons",
      color: "bg-cyan-500",
    },
  ]

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Continue Learning</CardTitle>
        <CardDescription className="text-slate-400">Pick up where you left off</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950/50 p-4 transition-colors hover:bg-slate-800"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-semibold text-white group-hover:text-cyan-400">{course.title}</h4>
                <p className="text-xs text-slate-400">{course.lessons}</p>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-400 group-hover:text-cyan-400">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{course.progress}% complete</span>
              </div>
              <Progress value={course.progress} className="h-2 bg-slate-800" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
