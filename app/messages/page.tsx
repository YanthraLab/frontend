import { DashboardHeader } from "@/components/organisms/Dashboard/Header";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />
      <main className="container mx-auto space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-white">Messages</h1>
        <p className="text-slate-400">Your inbox.</p>
      </main>
    </div>
  );
}
