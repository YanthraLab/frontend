import React, { useState, useRef } from 'react';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface AssignmentUploadProps {
    onUpload?: (files: FileList) => void;
    acceptedFormats?: string;
    maxSize?: number; // in MB
}

const AssignmentUpload: React.FC<AssignmentUploadProps> = ({
    onUpload,
    acceptedFormats = '.ino,.cpp,.c,.pdf,.zip',
    maxSize = 10,
}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
        }
    };

    const handleFiles = (files: File[]) => {
        const validFiles = files.filter(file => file.size <= maxSize * 1024 * 1024);
        setUploadedFiles(prev => [...prev, ...validFiles]);
        
        if (onUpload && validFiles.length > 0) {
            const fileList = new DataTransfer();
            validFiles.forEach(file => fileList.items.add(file));
            onUpload(fileList.files);
        }
    };

    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return (
        <Card className="bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
            <CardHeader>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Upload Your Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Upload Area */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                        border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
                        ${isDragging 
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
                        }
                    `}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Upload className="h-10 w-10 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Drop files here or click to browse
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                        Supports: {acceptedFormats} (Max {maxSize}MB)
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept={acceptedFormats}
                        onChange={handleFileInput}
                        className="hidden"
                    />
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Uploaded Files:</p>
                        {uploadedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <File className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            {formatFileSize(file.size)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile(index);
                                        }}
                                        className="h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900/30"
                                    >
                                        <X className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Submit Button */}
                <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={uploadedFiles.length === 0}
                >
                    Submit Assignment
                </Button>
            </CardContent>
        </Card>
    );
};

export default AssignmentUpload;
