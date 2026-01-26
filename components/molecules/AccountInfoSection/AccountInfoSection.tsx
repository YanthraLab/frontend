import React from 'react';
import { CreditCard, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AccountInfoSectionProps {
    memberSince: string;
    accountType: string;
    emailVerified: boolean;
}

const AccountInfoSection: React.FC<AccountInfoSectionProps> = ({
    memberSince,
    accountType,
    emailVerified,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-6">
                <CreditCard className="size-5 text-slate-700 dark:text-slate-300 mt-0.5" />
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Account Information
                    </h3>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                        Member Since
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {memberSince}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                        Account Type
                    </span>
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">
                        {accountType}
                    </Badge>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                        Email Verified
                    </span>
                    {emailVerified ? (
                        <Badge className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1">
                            <CheckCircle className="size-3" />
                            Verified
                        </Badge>
                    ) : (
                        <Badge variant="destructive">
                            Not Verified
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountInfoSection;
