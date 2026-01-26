"use client";

import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import FilterButtons from '@/components/molecules/FilterButtons/FilterButtons';
import TutorialCard, { TutorialCardProps } from '@/components/molecules/TutorialCard/TutorialCard';

interface TutorialsBrowserProps {
    tutorials: TutorialCardProps[];
}

const TutorialsBrowser: React.FC<TutorialsBrowserProps> = ({ tutorials }) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all-levels');

    const filters = [
        { id: 'all-levels', label: 'All Levels' },
        { id: 'all-categories', label: 'All Categories', count: 14 },
        { id: 'most-popular', label: 'Most Popular' },
    ];

    // Filter and search logic
    const filteredTutorials = useMemo(() => {
        let filtered = tutorials;

        // Apply search
        if (searchQuery) {
            filtered = filtered.filter((tutorial) =>
                tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply filters
        if (activeFilter === 'all-levels') {
            // Show all
        } else if (activeFilter === 'most-popular') {
            // Sort by views
            filtered = [...filtered].sort((a, b) => b.views - a.views);
        }

        return filtered;
    }, [tutorials, searchQuery, activeFilter]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Learning
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Browse Tutorials
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Explore 14 tutorials across all levels and categories
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        placeholder="Search tutorials..."
                    />
                    <FilterButtons
                        filters={filters}
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Showing {filteredTutorials.length} result{filteredTutorials.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Tutorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTutorials.map((tutorial) => (
                        <TutorialCard
                            key={tutorial.id}
                            {...tutorial}
                            onStartLearning={() => console.log('Start learning:', tutorial.id)}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredTutorials.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500 dark:text-slate-400">
                            No tutorials found matching your criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TutorialsBrowser;
