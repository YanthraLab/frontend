"use client";

import { Course } from '@/components/molecules'

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
      <div className="container mx-auto w-[75%] px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Popular Learning Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm">
            Start your journey with our most loved courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <Course
              key={i}
              title={course.title}
              level={course.level}
              duration={course.duration}
              students={course.students}
              image={course.image}
              levelColor={course.levelColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
