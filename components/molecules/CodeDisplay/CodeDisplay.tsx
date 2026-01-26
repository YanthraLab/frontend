import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface CodeDisplayProps {
    title: string;
    code: string;
    language?: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ title, code }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-slate-900 dark:text-white">{title}</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="gap-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                <span className="text-xs">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                <span className="text-xs">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <pre className="bg-slate-950 dark:bg-slate-900 border border-slate-800 dark:border-slate-700 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-slate-100 dark:text-slate-300 font-mono">
                            {code}
                        </code>
                    </pre>
                </div>
            </CardContent>
        </Card>
    );
};

export default CodeDisplay;
