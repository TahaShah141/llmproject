'use client';

import { useCallback, useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
}

export function FileUploadZone({
  onFilesSelected,
  accept = '.pdf',
  maxFiles = 10,
}: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const pdfFiles = files.filter((file) => file.type === 'application/pdf');

      if (pdfFiles.length > 0) {
        onFilesSelected(pdfFiles.slice(0, maxFiles));
      }
    },
    [onFilesSelected, maxFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        onFilesSelected(Array.from(files).slice(0, maxFiles));
      }
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    },
    [onFilesSelected, maxFiles]
  );

  return (
    <Card
      className={`border-2 border-dashed transition-all ${
        isDragging
          ? 'border-red-500 bg-red-500/5'
          : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="flex flex-col items-center justify-center p-12 text-center">
        <div
          className={`mb-4 rounded-full p-4 transition-colors ${
            isDragging
              ? 'bg-red-500/20 text-red-500'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          {isDragging ? (
            <FileText className="h-12 w-12" />
          ) : (
            <Upload className="h-12 w-12" />
          )}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-white">
          {isDragging ? 'Drop your CVs here' : 'Upload CV Files'}
        </h3>

        <p className="mb-6 text-sm text-gray-400">
          Drag and drop PDF files here, or click to browse
        </p>

        <label htmlFor="file-upload">
          <div className="cursor-pointer rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700">
            Browse Files
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept={accept}
            multiple
            onChange={handleFileInput}
          />
        </label>

        <p className="mt-4 text-xs text-gray-500">
          PDF only • Max {maxFiles} files • Up to 10MB each
        </p>
      </CardContent>
    </Card>
  );
}
