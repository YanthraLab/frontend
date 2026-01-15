"use client";

import { Button } from "@/components/ui/button";
import { Users, Clock } from "lucide-react";

export const PopularPathsSection = () => {
  const courses = [
    {
      title: "Arduino Basics",
      level: "Beginner",
      duration: "4 weeks",
      students: "12.5K",
      image: "bg-emerald-100 dark:bg-emerald-900/20", // Placeholder color
      levelColor: "bg-cyan-500",
    },
    {
      title: "ESP32 Development",
      level: "Intermediate",
      duration: "6 weeks",
      students: "8.2K",
      image: "bg-amber-100 dark:bg-amber-900/20", // Placeholder color
      levelColor: "bg-blue-500",
    },
    {
      title: "Industrial IoT",
      level: "Advanced",
      duration: "8 weeks",
      students: "5.1K",
      image: "bg-purple-100 dark:bg-purple-900/20", // Placeholder color
      levelColor: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Popular Learning Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Start your journey with our most loved courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col shadow-sm dark:shadow-none"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${course.image} relative group`}>
                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${course.levelColor}`}>
                        {course.level}
                    </span>
                </div>
                <div className="absolute inset-0 bg-transparent dark:bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-700 font-medium">
                    Course Image
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm mb-6">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{course.students} students</span>
                    </div>
                </div>
                
                <div className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                        Enroll Now
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
