import React from 'react';
import { Lock, ChevronRight } from 'lucide-react';

interface PasswordSecuritySectionProps {
    onChangePassword?: () => void;
    onEnableTwoFactor?: () => void;
    onDeleteAccount?: () => void;
}

const PasswordSecuritySection: React.FC<PasswordSecuritySectionProps> = ({
    onChangePassword,
    onEnableTwoFactor,
    onDeleteAccount,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-6">
                <Lock className="size-5 text-slate-700 dark:text-slate-300 mt-0.5" />
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Password & Security
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Manage your password and security settings
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    onClick={onChangePassword}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left group"
                >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        Change Password
                    </span>
                    <ChevronRight className="size-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                </button>

                <button
                    onClick={onEnableTwoFactor}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left group"
                >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        Enable Two-Factor Authentication
                    </span>
                    <ChevronRight className="size-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                </button>

                <button
                    onClick={onDeleteAccount}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-left group"
                >
                    <span className="text-sm font-medium text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300">
                        Delete Account
                    </span>
                    <ChevronRight className="size-4 text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300" />
                </button>
            </div>
        </div>
    );
};

export default PasswordSecuritySection;
