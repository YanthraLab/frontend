import React from 'react';
import { ExternalLink, BookOpen, Video, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Resource {
    id: string;
    title: string;
    type: 'tutorial' | 'video' | 'documentation' | 'article';
    url?: string;
    duration?: string;
}

export interface RelatedResourcesProps {
    resources: Resource[];
    onResourceClick?: (resource: Resource) => void;
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ resources, onResourceClick }) => {
    const getResourceIcon = (type: Resource['type']) => {
        switch (type) {
            case 'tutorial':
                return <BookOpen className="h-4 w-4" />;
            case 'video':
                return <Video className="h-4 w-4" />;
            case 'documentation':
                return <FileText className="h-4 w-4" />;
            case 'article':
                return <FileText className="h-4 w-4" />;
        }
    };

    const getResourceBadgeColor = (type: Resource['type']) => {
        switch (type) {
            case 'tutorial':
                return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800';
            case 'video':
                return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800';
            case 'documentation':
                return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
            case 'article':
                return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800';
        }
    };

    const formatResourceType = (type: Resource['type']) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    return (
        <Card className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
            <CardHeader>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Related Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {resources.map((resource) => (
                        <div
                            key={resource.id}
                            onClick={() => onResourceClick?.(resource)}
                            className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer group"
                        >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {getResourceIcon(resource.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {resource.title}
                                    </h4>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge className={`border text-xs ${getResourceBadgeColor(resource.type)}`}>
                                            {formatResourceType(resource.type)}
                                        </Badge>
                                        {resource.duration && (
                                            <span className="text-xs text-slate-600 dark:text-slate-400">
                                                {resource.duration}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 transition-colors" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RelatedResources;
