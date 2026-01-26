import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export interface BookmarkFiltersProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    selectedLevel: string;
    onLevelChange: (level: string) => void;
    selectedType: string;
    onTypeChange: (type: string) => void;
}

const BookmarkFilters: React.FC<BookmarkFiltersProps> = ({
    searchQuery,
    onSearchChange,
    selectedLevel,
    onLevelChange,
    selectedType,
    onTypeChange,
}) => {
    const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
    const types = ['All Types', 'Video', 'Quiz', 'Assignment', 'Sensors'];

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search bookmarks..."
                    className="pl-10 bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                />
            </div>

            {/* Level Filter */}
            <select
                value={selectedLevel}
                onChange={(e) => onLevelChange(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
            >
                {levels.map((level) => (
                    <option key={level} value={level}>
                        {level}
                    </option>
                ))}
            </select>

            {/* Type Filter */}
            <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
            >
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BookmarkFilters;
