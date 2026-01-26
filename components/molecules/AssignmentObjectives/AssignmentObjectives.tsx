import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface ObjectiveItem {
    id: string;
    text: string;
    completed?: boolean;
}

export interface AssignmentObjectivesProps {
    objectives: ObjectiveItem[];
}

const AssignmentObjectives: React.FC<AssignmentObjectivesProps> = ({ objectives }) => {
    return (
        <Card className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
            <CardHeader>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {objectives.map((objective) => (
                        <li key={objective.id} className="flex items-start gap-3">
                            {objective.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                            ) : (
                                <Circle className="h-5 w-5 text-slate-400 dark:text-slate-600 shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm leading-relaxed ${
                                objective.completed 
                                    ? 'text-slate-600 dark:text-slate-400 line-through' 
                                    : 'text-slate-700 dark:text-slate-300'
                            }`}>
                                {objective.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default AssignmentObjectives;
