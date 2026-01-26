import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface AssignmentListCardProps {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'completed' | 'overdue' | 'pending';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    deadline: string;
    points: number;
    progress?: number;
    onClick?: () => void;
}

const AssignmentListCard: React.FC<AssignmentListCardProps> = ({
    title,
    description,
    status,
    difficulty,
    deadline,
    points,
    progress,
    onClick,
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
        <Card 
            onClick={onClick}
            className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all cursor-pointer group"
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                            {description}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className={`border ${getStatusColor()}`}>
                                {status === 'in-progress' ? 'In Progress' : 
                                 status === 'completed' ? 'Completed' :
                                 status === 'overdue' ? 'Overdue' : 'Pending'}
                            </Badge>
                            <Badge className={`border ${getDifficultyColor()}`}>
                                {difficulty}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                                <Clock className="h-3.5 w-3.5" />
                                <span>Due: {deadline}</span>
                            </div>
                            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                {points} Points
                            </div>
                        </div>

                        {/* Progress bar (if applicable) */}
                        {progress !== undefined && (
                            <div className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">Progress</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{progress}%</span>
                                </div>
                                <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Arrow Icon */}
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                </div>
            </CardContent>
        </Card>
    );
};

export default AssignmentListCard;
