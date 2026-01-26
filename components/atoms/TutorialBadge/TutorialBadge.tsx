import React from 'react';
import { cn } from '@/lib/utils';

interface TutorialBadgeProps {
    label: string;
    variant?: 'beginner' | 'intermediate' | 'advanced' | 'video' | 'arduino' | 'quiz' | 'assignment' | 'sensors' | 'esp32';
    className?: string;
}

const TutorialBadge: React.FC<TutorialBadgeProps> = ({
    label,
    variant = 'beginner',
    className,
}) => {
    const variantStyles = {
        beginner: 'bg-blue-600 text-white',
        intermediate: 'bg-yellow-500 text-slate-900',
        advanced: 'bg-red-600 text-white',
        video: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        arduino: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        quiz: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        assignment: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
        sensors: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        esp32: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium',
                variantStyles[variant],
                className
            )}
        >
            {label}
        </span>
    );
};

export default TutorialBadge;
