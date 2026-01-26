"use client";

import React, { useState, useMemo } from 'react';
import { ArrowLeft, Bookmark } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BookmarkFilters from '@/components/molecules/BookmarkFilters/BookmarkFilters';
import BookmarkCard, { BookmarkCardProps } from '@/components/molecules/BookmarkCard/BookmarkCard';
import BookmarkStats from '@/components/molecules/BookmarkStats/BookmarkStats';

interface BookmarksViewProps {
    bookmarks: BookmarkCardProps[];
}

const BookmarksView: React.FC<BookmarksViewProps> = ({ bookmarks }) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All Levels');
    const [selectedType, setSelectedType] = useState('All Types');
    const [activeTab, setActiveTab] = useState<'saved' | 'tutorials'>('saved');

    // Calculate stats
    const stats = useMemo(() => {
        const total = bookmarks.length;
        const completed = bookmarks.filter(b => b.status === 'completed').length;
        const inProgress = bookmarks.filter(b => b.status === 'in-progress').length;
        const toStart = bookmarks.filter(b => b.status === 'not-started').length;

        return { total, completed, inProgress, toStart };
    }, [bookmarks]);

    // Filter bookmarks
    const filteredBookmarks = useMemo(() => {
        let filtered = bookmarks;

        // Apply search
        if (searchQuery) {
            filtered = filtered.filter((bookmark) =>
                bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                bookmark.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply level filter
        if (selectedLevel !== 'All Levels') {
            filtered = filtered.filter((bookmark) =>
                bookmark.level.toLowerCase() === selectedLevel.toLowerCase()
            );
        }

        // Apply type filter
        if (selectedType !== 'All Types') {
            filtered = filtered.filter((bookmark) =>
                bookmark.category.toLowerCase() === selectedType.toLowerCase() ||
                bookmark.subcategory.toLowerCase() === selectedType.toLowerCase()
            );
        }

        return filtered;
    }, [bookmarks, searchQuery, selectedLevel, selectedType]);

    const handleRemoveBookmark = (id: string) => {
        console.log('Remove bookmark:', id);
        // Implement remove logic
    };

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
                    
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                My Bookmarks
                                <Bookmark className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                            </h1>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                {stats.total} Saved Tutorial{stats.total !== 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 ${
                            activeTab === 'saved'
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                    <button
                        onClick={() => setActiveTab('tutorials')}
                        className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 ${
                            activeTab === 'tutorials'
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        Tutorials
                    </button>
                </div>

                {/* Filters */}
                <div className="mb-6">
                    <BookmarkFilters
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        selectedLevel={selectedLevel}
                        onLevelChange={setSelectedLevel}
                        selectedType={selectedType}
                        onTypeChange={setSelectedType}
                    />
                </div>

                {/* Bookmarks List */}
                <div className="space-y-4 mb-8">
                    {filteredBookmarks.length > 0 ? (
                        filteredBookmarks.map((bookmark) => (
                            <BookmarkCard
                                key={bookmark.id}
                                {...bookmark}
                                onContinue={() => console.log('Continue:', bookmark.id)}
                                onRemove={() => handleRemoveBookmark(bookmark.id)}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl">
                            <p className="text-slate-500 dark:text-slate-400">
                                No bookmarks found matching your criteria.
                            </p>
                        </div>
                    )}
                </div>

                {/* Stats Footer */}
                <BookmarkStats
                    totalBookmarks={stats.total}
                    completed={stats.completed}
                    inProgress={stats.inProgress}
                    toStart={stats.toStart}
                />
            </div>
        </div>
    );
};

export default BookmarksView;
