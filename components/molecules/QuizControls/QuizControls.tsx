import React from 'react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface QuizControlsProps {
    timeRemaining: string;
    onSubmit: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
    timeRemaining,
    onSubmit,
}) => {
    return (
        <div className="flex items-center gap-4">
            {/* Timer */}
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">{timeRemaining}</span>
            </div>

            {/* Submit Button */}
            <Button
                onClick={onSubmit}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6"
            >
                Submit
            </Button>
        </div>
    );
};

export default QuizControls;
