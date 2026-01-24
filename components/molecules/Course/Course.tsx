import { Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface CourseProps {
  title: string;
  level: string;
  duration: string;
  students: string;
  image: string;
  levelColor: string;
  picture: string;
}

const Course = ({
  title,
  level,
  duration,
  students,
  image,
  levelColor,
  picture,
}: CourseProps) => {
  const [ImageError, setImageError] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col shadow-sm dark:shadow-none">
      {/* Image Placeholder */}
      <div className={`h-48 w-full ${image} relative group`}>
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`px-3 py-1 text-xs font-medium text-white rounded-full ${levelColor}`}
          >
            {level}
          </span>
        </div>
        <div className="absolute inset-0 bg-transparent dark:bg-slate-900/10 group-hover:bg-transparent transition-colors" />
        {!ImageError ? (
          <Image
            src={`/${picture}`}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-700 font-medium">
            Course Image
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm mb-6">
          <div className="flex items-center gap-1.5 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Users className="w-3.5 h-3.5" />
            <span>{students} students</span>
          </div>
        </div>

        <div className="mt-auto">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export { Course };
