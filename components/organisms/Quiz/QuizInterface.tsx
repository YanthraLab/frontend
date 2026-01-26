"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import QuizStart from '@/components/molecules/QuizStart/QuizStart';
import QuizHeader from '@/components/molecules/QuizHeader/QuizHeader';
import QuizQuestion, { QuizOption } from '@/components/molecules/QuizQuestion/QuizQuestion';
import QuizNavigation from '@/components/molecules/QuizNavigation/QuizNavigation';
import QuizControls from '@/components/molecules/QuizControls/QuizControls';

export interface Question {
    id: string;
    question: string;
    options: QuizOption[];
    correctAnswer: string;
}

export interface QuizInterfaceProps {
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    questions: Question[];
    timeLimit: number; // in seconds
    onSubmit: (answers: Record<string, string>, timeElapsed: number) => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({
    title,
    description,
    level,
    questions,
    timeLimit,
    onSubmit,
}) => {
    const router = useRouter();
    const [hasStarted, setHasStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [timeRemaining, setTimeRemaining] = useState(timeLimit);

    const handleSubmit = useCallback(() => {
        const timeElapsed = timeLimit - timeRemaining;
        onSubmit(answers, timeElapsed);
    }, [timeLimit, timeRemaining, answers, onSubmit]);

    // Timer countdown
    useEffect(() => {
        // Only start timer if quiz has started
        if (!hasStarted) return;

        if (timeRemaining <= 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining, handleSubmit, hasStarted]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSelectOption = (optionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questions[currentQuestionIndex].id]: optionId,
        }));
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const handleExit = () => {
        router.back();
    };

    const handleStart = () => {
        setHasStarted(true);
    };

    // Show start screen if quiz hasn't started
    if (!hasStarted) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Back Button */}
                    <button
                        onClick={handleExit}
                        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back
                    </button>

                    {/* Quiz Start Screen */}
                    <QuizStart
                        title={title}
                        description={description}
                        level={level}
                        totalQuestions={questions.length}
                        timeLimit={timeLimit}
                        onStart={handleStart}
                    />
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answeredQuestions = Object.keys(answers).length;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={handleExit}
                        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Exit Quiz
                    </button>
                    
                    <QuizControls
                        timeRemaining={formatTime(timeRemaining)}
                        onSubmit={handleSubmit}
                    />
                </div>

                {/* Quiz Header */}
                <div className="mb-6">
                    <QuizHeader
                        title={title}
                        description={description}
                        level={level}
                        currentQuestion={currentQuestionIndex + 1}
                        totalQuestions={questions.length}
                    />
                </div>

                {/* Question */}
                <div className="mb-6">
                    <QuizQuestion
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        selectedOption={answers[currentQuestion.id]}
                        onSelectOption={handleSelectOption}
                    />
                </div>

                {/* Navigation */}
                <QuizNavigation
                    currentQuestion={answeredQuestions}
                    totalQuestions={questions.length}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    canGoPrevious={currentQuestionIndex > 0}
                    canGoNext={currentQuestionIndex < questions.length - 1}
                />
            </div>
        </div>
    );
};

export default QuizInterface;
