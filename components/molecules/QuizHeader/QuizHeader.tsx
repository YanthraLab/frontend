import React from 'react';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface QuizHeaderProps {
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    currentQuestion: number;
    totalQuestions: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
    title,
    description,
    level,
    currentQuestion,
    totalQuestions,
}) => {
    const percentComplete = Math.round((currentQuestion / totalQuestions) * 100);

    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            {/* Title and Badge */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {title}
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>
                <TutorialBadge
                    label={level.charAt(0).toUpperCase() + level.slice(1)}
                    variant={level}
                />
            </div>

            {/* Progress */}
            <div className="mt-6">
                <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium text-slate-900 dark:text-white">
                        Question {currentQuestion} of {totalQuestions}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                        {percentComplete}% complete
                    </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${percentComplete}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuizHeader;
