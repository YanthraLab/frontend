import React from 'react';
import { cn } from '@/lib/utils';

interface FilterButtonsProps {
    filters: Array<{
        id: string;
        label: string;
        count?: number;
    }>;
    activeFilter: string;
    onFilterChange: (filterId: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
    filters,
    activeFilter,
    onFilterChange,
}) => {
    return (
        <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        activeFilter === filter.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    )}
                >
                    {filter.label}
                    {filter.count !== undefined && (
                        <span className={cn(
                            'ml-2',
                            activeFilter === filter.id
                                ? 'text-blue-100'
                                : 'text-slate-500 dark:text-slate-500'
                        )}>
                            ({filter.count})
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
