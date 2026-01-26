import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InterestTagProps {
    label: string;
    selected?: boolean;
    onToggle?: () => void;
    removable?: boolean;
}

const InterestTag: React.FC<InterestTagProps> = ({
    label,
    selected = false,
    onToggle,
    removable = true,
}) => {
    return (
        <button
            onClick={onToggle}
            className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                selected
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            )}
        >
            <span>{label}</span>
            {selected && removable && (
                <X className="size-3.5" />
            )}
        </button>
    );
};

export default InterestTag;
