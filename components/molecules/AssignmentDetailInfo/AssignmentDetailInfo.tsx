import React from 'react';
import { Calendar, Award, BarChart3, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface AssignmentDetailInfoProps {
    deadline: string;
    points: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    status: 'in-progress' | 'completed' | 'overdue' | 'pending';
    estimatedTime?: string;
}

const AssignmentDetailInfo: React.FC<AssignmentDetailInfoProps> = ({
    deadline,
    points,
    difficulty,
    status,
    estimatedTime,
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

    const formatStatus = () => {
        switch (status) {
            case 'in-progress':
                return 'In Progress';
            case 'completed':
                return 'Completed';
            case 'overdue':
                return 'Overdue';
            case 'pending':
                return 'Pending';
        }
    };

    return (
        <Card className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
            <CardHeader>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Assignment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Deadline */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Deadline</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{deadline}</p>
                    </div>
                </div>

                {/* Points */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Points</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{points} XP</p>
                    </div>
                </div>

                {/* Difficulty */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                        <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Difficulty</p>
                        <Badge className={`border ${getDifficultyColor()}`}>
                            {difficulty}
                        </Badge>
                    </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Status</p>
                        <Badge className={`border ${getStatusColor()}`}>
                            {formatStatus()}
                        </Badge>
                    </div>
                </div>

                {/* Estimated Time (Optional) */}
                {estimatedTime && (
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                            <Clock className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Estimated Time</p>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{estimatedTime}</p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AssignmentDetailInfo;
