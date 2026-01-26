"use client";

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AssignmentListCard, { AssignmentListCardProps } from '@/components/molecules/AssignmentListCard/AssignmentListCard';

export interface AssignmentsListProps {
    assignments: AssignmentListCardProps[];
    onAssignmentClick?: (assignment: AssignmentListCardProps) => void;
}

const AssignmentsList: React.FC<AssignmentsListProps> = ({ assignments, onAssignmentClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<'all' | 'in-progress' | 'completed' | 'pending' | 'overdue'>('all');

    const filteredAssignments = assignments.filter(assignment => {
        const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            assignment.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterStatus === 'all' || assignment.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const stats = {
        total: assignments.length,
        inProgress: assignments.filter(a => a.status === 'in-progress').length,
        completed: assignments.filter(a => a.status === 'completed').length,
        pending: assignments.filter(a => a.status === 'pending').length,
        overdue: assignments.filter(a => a.status === 'overdue').length,
    };

    return (
        <div className="space-y-6">
            {/* Header Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Total</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">In Progress</p>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{stats.inProgress}</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Completed</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">{stats.completed}</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Pending</p>
                    <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{stats.pending}</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">Overdue</p>
                    <p className="text-2xl font-bold text-red-700 dark:text-red-400">{stats.overdue}</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search assignments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white dark:bg-slate-900/80 border-slate-300 dark:border-slate-700"
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <Button
                        variant={filterStatus === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterStatus('all')}
                        className={filterStatus === 'all' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 dark:border-slate-700'}
                    >
                        All
                    </Button>
                    <Button
                        variant={filterStatus === 'in-progress' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterStatus('in-progress')}
                        className={filterStatus === 'in-progress' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 dark:border-slate-700'}
                    >
                        In Progress
                    </Button>
                    <Button
                        variant={filterStatus === 'pending' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterStatus('pending')}
                        className={filterStatus === 'pending' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 dark:border-slate-700'}
                    >
                        Pending
                    </Button>
                    <Button
                        variant={filterStatus === 'completed' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterStatus('completed')}
                        className={filterStatus === 'completed' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 dark:border-slate-700'}
                    >
                        Completed
                    </Button>
                    <Button
                        variant={filterStatus === 'overdue' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterStatus('overdue')}
                        className={filterStatus === 'overdue' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 dark:border-slate-700'}
                    >
                        Overdue
                    </Button>
                </div>
            </div>

            {/* Assignments List */}
            <div className="space-y-4">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map((assignment) => (
                        <AssignmentListCard
                            key={assignment.id}
                            {...assignment}
                            onClick={() => onAssignmentClick?.(assignment)}
                        />
                    ))
                ) : (
                    <div className="text-center py-12">
                        <Filter className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                        <p className="text-slate-600 dark:text-slate-400">No assignments found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AssignmentsList;
