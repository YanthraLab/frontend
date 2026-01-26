import React from 'react';
import { Clock, Star, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface BookmarkCardProps {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    category: string;
    subcategory: string;
    duration: string;
    rating?: number;
    matchPercentage?: number;
    bookmarkedDate: string;
    status?: 'not-started' | 'in-progress' | 'completed';
    icon?: React.ReactNode;
    onContinue?: () => void;
    onRemove?: () => void;
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({
    title,
    description,
    level,
    category,
    subcategory,
    duration,
    rating,
    matchPercentage,
    bookmarkedDate,
    status = 'not-started',
    icon,
    onContinue,
    onRemove,
}) => {
    const getStatusButton = () => {
        if (status === 'completed') {
            return (
                <Button
                    onClick={onContinue}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                >
                    Continue
                </Button>
            );
        }
        return (
            <Button
                onClick={onContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
                {status === 'in-progress' ? 'Continue' : 'Start'}
            </Button>
        );
    };

    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div className="flex items-start gap-4">
                {/* Icon */}
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

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Title and Description */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {description}
                    </p>

                    {/* Badges and Stats */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <TutorialBadge
                            label={level.charAt(0).toUpperCase() + level.slice(1)}
                            variant={level}
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                            {category}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                            {subcategory}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{duration}</span>
                        </div>
                        {rating && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                                <span>{rating}</span>
                            </div>
                        )}
                        {matchPercentage && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                                {matchPercentage}% Match
                            </span>
                        )}
                        {status === 'in-progress' && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
                                In Progress
                            </span>
                        )}
                    </div>

                    {/* Bookmarked Date */}
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                        Bookmarked on {bookmarkedDate}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                    {getStatusButton()}
                    <button
                        onClick={onRemove}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                        aria-label="Remove bookmark"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookmarkCard;
