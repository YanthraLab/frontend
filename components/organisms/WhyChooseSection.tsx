"use client";

import { BookOpen, ShoppingCart, Zap, Award } from "lucide-react";

export const WhyChooseSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Structured Learning Paths",
            description: "Progressive levels from beginner to expert with hands-on tutorials",
            color: "text-blue-500 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-500/10"
        },
        {
            icon: ShoppingCart,
            title: "Hardware Marketplace",
            description: "Access curated IoT components and development boards",
            color: "text-cyan-500 dark:text-cyan-400",
            bg: "bg-cyan-50 dark:bg-cyan-500/10"
        },
        {
            icon: Zap,
            title: "Innovation Hub",
            description: "Share projects, read blogs, and connect with the community",
            color: "text-indigo-500 dark:text-indigo-400",
            bg: "bg-indigo-50 dark:bg-indigo-500/10"
        },
        {
            icon: Award,
            title: "Gamified Learning",
            description: "Earn XP, unlock achievements, and track your progress",
            color: "text-sky-500 dark:text-sky-400",
            bg: "bg-sky-50 dark:bg-sky-500/10"
        }
    ];

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-[#0B1120]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose Yanthra?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to become an IoT expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
                <div key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 group shadow-sm dark:shadow-none">
                    <div className={`w-12 h-12 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
