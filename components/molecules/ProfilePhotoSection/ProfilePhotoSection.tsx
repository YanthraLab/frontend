import React from 'react';
import ProfilePhoto from '@/components/atoms/ProfilePhoto';
import { Camera } from 'lucide-react';

interface ProfilePhotoSectionProps {
    photoSrc?: string;
    onPhotoChange?: () => void;
}

const ProfilePhotoSection: React.FC<ProfilePhotoSectionProps> = ({
    photoSrc,
    onPhotoChange,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Profile Photo
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Upload a profile picture
                </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
                <ProfilePhoto
                    src={photoSrc}
                    size={80}
                />
                <button
                    onClick={onPhotoChange}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <Camera className="size-4" />
                    Change Photo
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    JPG, PNG or GIF. Max 2MB.
                </p>
            </div>
        </div>
    );
};

export default ProfilePhotoSection;
