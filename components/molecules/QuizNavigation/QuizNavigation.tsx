import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface QuizNavigationProps {
    currentQuestion: number;
    totalQuestions: number;
    onPrevious: () => void;
    onNext: () => void;
    canGoPrevious: boolean;
    canGoNext: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
    currentQuestion,
    totalQuestions,
    onPrevious,
    onNext,
    canGoPrevious,
    canGoNext,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
                {/* Previous Button */}
                <Button
                    onClick={onPrevious}
                    disabled={!canGoPrevious}
                    variant="outline"
                    className="px-6"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                </Button>

                {/* Question Progress */}
                <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-white">
                        {currentQuestion}
                    </span>
                    {' '}of{' '}
                    <span className="font-medium text-slate-900 dark:text-white">
                        {totalQuestions}
                    </span>
                    {' '}answered
                </div>

                {/* Next Button */}
                <Button
                    onClick={onNext}
                    disabled={!canGoNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
            </div>
        </div>
    );
};

export default QuizNavigation;
