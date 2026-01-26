import React from 'react';
import { cn } from '@/lib/utils';

export interface QuizOption {
    id: string;
    text: string;
}

export interface QuizQuestionProps {
    question: string;
    options: QuizOption[];
    selectedOption?: string;
    onSelectOption: (optionId: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
    question,
    options,
    selectedOption,
    onSelectOption,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
            {/* Question */}
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onSelectOption(option.id)}
                        className={cn(
                            'w-full text-left px-6 py-4 rounded-xl border-2 transition-all',
                            selectedOption === option.id
                                ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/20'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700'
                        )}
                    >
                        <div className="flex items-center gap-3">
                            {/* Radio Circle */}
                            <div
                                className={cn(
                                    'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                                    selectedOption === option.id
                                        ? 'border-blue-600'
                                        : 'border-slate-300 dark:border-slate-700'
                                )}
                            >
                                {selectedOption === option.id && (
                                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                                )}
                            </div>
                            
                            {/* Option Text */}
                            <span
                                className={cn(
                                    'text-base font-medium',
                                    selectedOption === option.id
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-slate-700 dark:text-slate-300'
                                )}
                            >
                                {option.text}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
