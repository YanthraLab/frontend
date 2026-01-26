import React from 'react';
import { Bookmark, CheckCircle, Clock, Target } from 'lucide-react';

export interface BookmarkStatsProps {
    totalBookmarks: number;
    completed: number;
    inProgress: number;
    toStart: number;
}

const BookmarkStats: React.FC<BookmarkStatsProps> = ({
    totalBookmarks,
    completed,
    inProgress,
    toStart,
}) => {
    const stats = [
        {
            icon: <Bookmark className="w-5 h-5" />,
            label: 'Total Bookmarks',
            value: totalBookmarks,
            color: 'text-blue-600 dark:text-blue-400',
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            label: 'Completed',
            value: completed,
            color: 'text-green-600 dark:text-green-400',
        },
        {
            icon: <Clock className="w-5 h-5" />,
            label: 'In Progress',
            value: inProgress,
            color: 'text-orange-600 dark:text-orange-400',
        },
        {
            icon: <Target className="w-5 h-5" />,
            label: 'To Start',
            value: toStart,
            color: 'text-purple-600 dark:text-purple-400',
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className={`flex justify-center mb-2 ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookmarkStats;
