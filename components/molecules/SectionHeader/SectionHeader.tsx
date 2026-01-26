import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    badge?: {
        label: string;
        variant?: 'default' | 'hot';
    };
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    icon,
    title,
    description,
    badge,
    className,
}) => {
    return (
        <div className={cn('flex items-start gap-3', className)}>
            {icon && (
                <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mt-1">
                    {icon}
                </div>
            )}
            <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {title}
                    </h2>
                    {badge && (
                        <span
                            className={cn(
                                'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold',
                                badge.variant === 'hot'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-blue-600 text-white'
                            )}
                        >
                            {badge.label}
                        </span>
                    )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionHeader;
