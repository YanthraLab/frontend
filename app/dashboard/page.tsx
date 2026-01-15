import { DashboardHeader } from "@/components/organisms/Dashboard/Header"
import { StatsOverview } from "@/components/organisms/Dashboard/StatsOverview"
import { ContinueLearning } from "@/components/organisms/Dashboard/ContinueLearning"
import { RecentActivity } from "@/components/organisms/Dashboard/RecentActivity"
import { RecommendedCourses } from "@/components/organisms/Dashboard/RecommendedCourses"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />
      <main className="container mx-auto space-y-8 p-4 md:p-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            Welcome back, Nimal! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-slate-400">Continue your IoT learning journey</p>
        </div>

        <StatsOverview />

        <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
                <ContinueLearning />
            </div>
            <div className="md:col-span-1">
                <RecentActivity />
            </div>
        </div>

        <RecommendedCourses />
      </main>
    </div>
  )
}
