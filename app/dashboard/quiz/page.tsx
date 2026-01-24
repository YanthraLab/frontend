import { DashboardHeader } from "@/components/organisms/Dashboard/Header";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <DashboardHeader />
      <main className="container mx-auto space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Quizzes</h1>
        <p className="text-slate-600 dark:text-slate-400">Test your knowledge.</p>
      </main>
    </div>
  );
}
