"use client";

import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AssignmentDetailInfo from '@/components/molecules/AssignmentDetailInfo/AssignmentDetailInfo';
import AssignmentObjectives, { ObjectiveItem } from '@/components/molecules/AssignmentObjectives/AssignmentObjectives';
import CodeDisplay from '@/components/molecules/CodeDisplay/CodeDisplay';
import AssignmentUpload from '@/components/molecules/AssignmentUpload/AssignmentUpload';
import RelatedResources, { Resource } from '@/components/molecules/RelatedResources/RelatedResources';

export interface AssignmentDetailProps {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'completed' | 'overdue' | 'pending';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    deadline: string;
    points: number;
    estimatedTime?: string;
    objectives: ObjectiveItem[];
    displayTitle?: string;
    displayDescription?: string;
    codeSnippets?: Array<{
        title: string;
        code: string;
        language?: string;
    }>;
    challenges?: string[];
    relatedResources: Resource[];
    onBack?: () => void;
}

const AssignmentDetail: React.FC<AssignmentDetailProps> = ({
    title,
    description,
    status,
    difficulty,
    deadline,
    points,
    estimatedTime,
    objectives,
    displayTitle,
    displayDescription,
    codeSnippets = [],
    challenges = [],
    relatedResources,
    onBack,
}) => {
    const getStatusColor = () => {
        switch (status) {
            case 'in-progress':
                return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800';
            case 'completed':
                return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
            case 'overdue':
                return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800';
            case 'pending':
                return 'bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700';
        }
    };

    const getDifficultyColor = () => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
            case 'Medium':
                return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800';
            case 'Hard':
                return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <Button
                variant="ghost"
                onClick={onBack}
                className="gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Assignments
            </Button>

            {/* Header */}
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            {title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className={`border ${getStatusColor()}`}>
                                {status === 'in-progress' ? 'In Progress' : 
                                 status === 'completed' ? 'Completed' :
                                 status === 'overdue' ? 'Overdue' : 'Pending'}
                            </Badge>
                            <Badge className={`border ${getDifficultyColor()}`}>
                                {difficulty}
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Learning Objectives */}
                    <AssignmentObjectives objectives={objectives} />

                    {/* Display Title (if provided) */}
                    {displayTitle && displayDescription && (
                        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {displayTitle}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {displayDescription}
                            </p>
                        </div>
                    )}

                    {/* Code Snippets */}
                    {codeSnippets.map((snippet, index) => (
                        <CodeDisplay
                            key={index}
                            title={snippet.title}
                            code={snippet.code}
                            language={snippet.language}
                        />
                    ))}

                    {/* Challenge Questions */}
                    {challenges.length > 0 && (
                        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                            <div className="flex items-start gap-3 mb-4">
                                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Challenge Questions
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {challenges.map((challenge, index) => (
                                    <div
                                        key={index}
                                        className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg"
                                    >
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            <span className="text-amber-600 dark:text-amber-400 font-bold">
                                                Q{index + 1}:
                                            </span>{' '}
                                            {challenge}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Assignment Details */}
                    <AssignmentDetailInfo
                        deadline={deadline}
                        points={points}
                        difficulty={difficulty}
                        status={status}
                        estimatedTime={estimatedTime}
                    />

                    {/* Upload Section */}
                    <AssignmentUpload />

                    {/* Related Resources */}
                    <RelatedResources
                        resources={relatedResources}
                        onResourceClick={(resource) => {
                            if (resource.url) {
                                window.open(resource.url, '_blank');
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetail;
