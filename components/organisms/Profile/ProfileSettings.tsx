"use client";

import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfilePhotoSection from '@/components/molecules/ProfilePhotoSection/ProfilePhotoSection';
import PersonalInfoSection from '@/components/molecules/PersonalInfoSection/PersonalInfoSection';
import LearningInterestsSection from '@/components/molecules/LearningInterestsSection/LearningInterestsSection';
import AccountInfoSection from '@/components/molecules/AccountInfoSection/AccountInfoSection';
import PasswordSecuritySection from '@/components/molecules/PasswordSecuritySection/PasswordSecuritySection';
import { useRouter } from 'next/navigation';

const availableInterests = [
    'Arduino',
    'Raspberry Pi',
    'ESP32',
    'IoT Security',
    'Smart Home',
    'Industrial IoT',
    'Sensors',
    'Cloud IoT',
    'Machine Learning',
    'Robotics',
    'Embedded Systems',
    'MQTT',
];

const ProfileSettings: React.FC = () => {
    const router = useRouter();
    const [profilePhoto] = useState<string>('');
    const [fullName, setFullName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [location, setLocation] = useState('San Francisco, CA');
    const [bio, setBio] = useState('');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([
        'Arduino',
        'Raspberry Pi',
        'IoT Security',
        'Smart Home',
    ]);

    const handleToggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    const handlePhotoChange = () => {
        // Implement photo upload logic
        console.log('Change photo clicked');
    };

    const handleSave = () => {
        // Implement save logic
        console.log('Settings saved');
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Profile Settings
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Manage your account information
                    </p>
                </div>

                {/* Profile Photo Section */}
                <div className="mb-6">
                    <ProfilePhotoSection
                        photoSrc={profilePhoto}
                        onPhotoChange={handlePhotoChange}
                    />
                </div>

                {/* Personal Information Section */}
                <div className="mb-6">
                    <PersonalInfoSection
                        fullName={fullName}
                        email={email}
                        location={location}
                        bio={bio}
                        onFullNameChange={setFullName}
                        onEmailChange={setEmail}
                        onLocationChange={setLocation}
                        onBioChange={setBio}
                    />
                </div>

                {/* Learning Interests Section */}
                <div className="mb-6">
                    <LearningInterestsSection
                        selectedInterests={selectedInterests}
                        availableInterests={availableInterests}
                        onToggleInterest={handleToggleInterest}
                    />
                </div>

                {/* Account Information Section */}
                <div className="mb-6">
                    <AccountInfoSection
                        memberSince="January 2025"
                        accountType="Premium"
                        emailVerified={true}
                    />
                </div>

                {/* Password & Security Section */}
                <div className="mb-6">
                    <PasswordSecuritySection
                        onChangePassword={() => console.log('Change password')}
                        onEnableTwoFactor={() => console.log('Enable 2FA')}
                        onDeleteAccount={() => console.log('Delete account')}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Button
                        onClick={handleSave}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        <Save className="size-4 mr-2" />
                        Save Changes
                    </Button>
                    <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="flex-1"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
