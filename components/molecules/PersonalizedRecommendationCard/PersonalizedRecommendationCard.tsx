import React from 'react';
import { Clock, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface PersonalizedRecommendationCardProps {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    category: string;
    duration: string;
    xp: number;
    matchPercentage: number;
    additionalInfo?: string;
    icon?: React.ReactNode;
    onStartLearning?: () => void;
}

const PersonalizedRecommendationCard: React.FC<PersonalizedRecommendationCardProps> = ({
    title,
    description,
    level,
    category,
    duration,
    xp,
    matchPercentage,
    additionalInfo,
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
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>
            </div>

            {/* Badges and Stats */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <TutorialBadge
                    label={level.charAt(0).toUpperCase() + level.slice(1)}
                    variant={level}
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">{category}</span>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{xp} XP</span>
                </div>
            </div>

            {/* Additional Info and Match Badge */}
            <div className="flex items-center justify-between mb-4">
                {additionalInfo && (
                    <span className="text-xs text-blue-600 dark:text-blue-400">
                        ✦ {additionalInfo}
                    </span>
                )}
                <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                    {matchPercentage}% Match
                </span>
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

export default PersonalizedRecommendationCard;
