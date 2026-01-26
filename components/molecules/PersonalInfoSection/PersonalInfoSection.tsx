import React from 'react';
import { User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface PersonalInfoSectionProps {
    fullName: string;
    email: string;
    location: string;
    bio: string;
    onFullNameChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onLocationChange: (value: string) => void;
    onBioChange: (value: string) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
    fullName,
    email,
    location,
    bio,
    onFullNameChange,
    onEmailChange,
    onLocationChange,
    onBioChange,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-6">
                <User className="size-5 text-slate-700 dark:text-slate-300 mt-0.5" />
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Personal Information
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Update your personal details
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name
                    </label>
                    <Input
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => onFullNameChange(e.target.value)}
                        className="bg-slate-50 dark:bg-slate-800/50"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email Address
                    </label>
                    <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        className="bg-slate-50 dark:bg-slate-800/50"
                    />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Location
                </label>
                <Input
                    type="text"
                    placeholder="San Francisco, CA"
                    value={location}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="bg-slate-50 dark:bg-slate-800/50"
                />
            </div>

            <div className="mt-4 space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Bio
                </label>
                <Textarea
                    placeholder="Tell us about yourself..."
                    value={bio}
                    onChange={(e) => onBioChange(e.target.value)}
                    className="bg-slate-50 dark:bg-slate-800/50 min-h-[100px]"
                    maxLength={500}
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 text-right">
                    {bio.length}/500 characters
                </p>
            </div>
        </div>
    );
};

export default PersonalInfoSection;
