import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface TrendingCardProps {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    duration: string;
    studentsEnrolled: number;
    rating: number;
    isPopular?: boolean;
    onStartLearning?: () => void;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
    title,
    description,
    level,
    duration,
    studentsEnrolled,
    rating,
    isPopular = false,
    onStartLearning,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg dark:hover:shadow-slate-900/50 flex flex-col h-full">
            {/* Top Badge */}
            <div className="mb-4">
                {isPopular ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-orange-500 text-white">
                        POPULAR
                    </span>
                ) : (
                    <TutorialBadge
                        label={level.charAt(0).toUpperCase() + level.slice(1)}
                        variant={level}
                    />
                )}
            </div>

            {/* Title and Description */}
            <div className="mb-4 flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{studentsEnrolled}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <span>{rating}</span>
                </div>
            </div>

            {/* CTA Button */}
            <Button
                onClick={onStartLearning}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
                Start Learning
            </Button>
        </div>
    );
};

export default TrendingCard;
