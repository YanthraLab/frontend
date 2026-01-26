"use client";

import React from 'react';
import { ArrowLeft, User, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader';
import PersonalizedRecommendationCard, { PersonalizedRecommendationCardProps } from '@/components/molecules/PersonalizedRecommendationCard/PersonalizedRecommendationCard';
import TrendingCard, { TrendingCardProps } from '@/components/molecules/TrendingCard/TrendingCard';

interface RecommendationsViewProps {
    personalizedRecommendations: PersonalizedRecommendationCardProps[];
    trendingTutorials: TrendingCardProps[];
}

const RecommendationsView: React.FC<RecommendationsViewProps> = ({
    personalizedRecommendations,
    trendingTutorials,
}) => {
    const router = useRouter();

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
                        Recommended for You
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Personalized tutorial recommendations based on your learning journey
                    </p>
                </div>

                {/* Personalized for You Section */}
                <div className="mb-12">
                    <SectionHeader
                        icon={<User className="w-5 h-5" />}
                        title="Personalized for You"
                        description="Based on your progress, interests, and learning patterns"
                        badge={{ label: 'AI Powered', variant: 'default' }}
                        className="mb-6"
                    />
                    <div className="space-y-4">
                        {personalizedRecommendations.map((recommendation) => (
                            <PersonalizedRecommendationCard
                                key={recommendation.id}
                                {...recommendation}
                                onStartLearning={() => console.log('Start learning:', recommendation.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Trending Now Section */}
                <div>
                    <SectionHeader
                        icon={<TrendingUp className="w-5 h-5" />}
                        title="Trending Now"
                        description="Most popular tutorials this week among learners like you"
                        badge={{ label: 'HOT 🔥', variant: 'hot' }}
                        className="mb-6"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {trendingTutorials.map((tutorial) => (
                            <TrendingCard
                                key={tutorial.id}
                                {...tutorial}
                                onStartLearning={() => console.log('Start learning:', tutorial.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationsView;
