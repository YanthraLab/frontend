import React from 'react';
import { Clock, FileQuestion, Award, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TutorialBadge from '@/components/atoms/TutorialBadge/TutorialBadge';

export interface QuizStartProps {
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    totalQuestions: number;
    timeLimit: number; // in seconds
    onStart: () => void;
}

const QuizStart: React.FC<QuizStartProps> = ({
    title,
    description,
    level,
    totalQuestions,
    timeLimit,
    onStart,
}) => {
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        return `${mins} minute${mins !== 1 ? 's' : ''}`;
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <TutorialBadge
                            label={level.charAt(0).toUpperCase() + level.slice(1)}
                            variant={level}
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        {title}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>

                {/* Quiz Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex justify-center mb-2">
                            <FileQuestion className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {totalQuestions}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            Questions
                        </div>
                    </div>

                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex justify-center mb-2">
                            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {formatTime(timeLimit)}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            Time Limit
                        </div>
                    </div>

                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="flex justify-center mb-2">
                            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            100
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            Max Points
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Instructions:
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                            <span>Read each question carefully before selecting your answer</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                            <span>You can navigate between questions using Previous/Next buttons</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                            <span>The timer will start immediately when you begin the quiz</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                            <span>Submit your quiz before time runs out to save your answers</span>
                        </li>
                    </ul>
                </div>

                {/* Start Button */}
                <Button
                    onClick={onStart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                >
                    <Play className="w-5 h-5 mr-2" />
                    Start Quiz
                </Button>
            </div>
        </div>
    );
};

export default QuizStart;
