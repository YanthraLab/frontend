import React from 'react';
import { Clock, BarChart3, Star, Eye, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface TutorialCardProps {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    duration: string;
    modules: number;
    rating: number;
    views: number;
    tags: Array<{
        label: string;
        variant: 'video' | 'arduino' | 'quiz' | 'assignment' | 'sensors' | 'esp32';
    }>;
    icon?: React.ReactNode;
    onStartLearning?: () => void;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
    title,
    description,
    level,
    duration,
    modules,
    rating,
    views,
    tags,
    icon,
    onStartLearning,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50">
            {/* Header with Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {icon || (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeWidth="2" d="M12 6v6l4 2" />
                        </svg>
                    )}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                <TutorialBadge label={level.charAt(0).toUpperCase() + level.slice(1)} variant={level} />
                {tags.map((tag, index) => (
                    <TutorialBadge key={index} label={tag.label} variant={tag.variant} />
                ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{modules}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <span>{rating}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{views.toLocaleString()}</span>
                </div>
            </div>

            {/* CTA Button */}
            <Button
                onClick={onStartLearning}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
                Start Learning
                <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
        </div>
    );
};

export default TutorialCard;
