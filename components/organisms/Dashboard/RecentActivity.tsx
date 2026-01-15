import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      title: "Completed: Sensor Integration Quiz",
      time: "2 hours ago",
    },
    {
      title: "Started: ESP32 Development",
      time: "5 hours ago",
    },
    {
      title: "Achievement Unlocked: First Project",
      time: "1 day ago",
    },
  ]

  return (
    <Card className="h-full bg-slate-900 border-slate-800">
       <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-8 pl-2 before:absolute before:left-2 before:top-2 before:h-[85%] before:w-[1px] before:bg-slate-800">
          {activities.map((activity, index) => (
            <div key={index} className="relative pl-6">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-cyan-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">{activity.title}</p>
                <p className="text-xs text-slate-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
