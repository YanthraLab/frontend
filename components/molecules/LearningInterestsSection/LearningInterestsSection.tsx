import React from 'react';
import { InterestTag } from '@/components/atoms/InterestTag';

interface LearningInterestsSectionProps {
    selectedInterests: string[];
    availableInterests: string[];
    onToggleInterest: (interest: string) => void;
}

const LearningInterestsSection: React.FC<LearningInterestsSectionProps> = ({
    selectedInterests,
    availableInterests,
    onToggleInterest,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="space-y-2 mb-6">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Learning Interests
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Select topics you&apos;re interested in learning
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {availableInterests.map((interest) => (
                    <InterestTag
                        key={interest}
                        label={interest}
                        selected={selectedInterests.includes(interest)}
                        onToggle={() => onToggleInterest(interest)}
                    />
                ))}
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''} selected
            </p>
        </div>
    );
};

export default LearningInterestsSection;
