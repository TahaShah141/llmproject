'use client';

import { CVPreviewCard } from './cv-preview-card';
import type { CVFile } from '@/lib/types';
import { FileQuestion } from 'lucide-react';

interface CVListProps {
  cvFiles: CVFile[];
  onRemove: (id: string) => void;
  onPreview: (cvFile: CVFile) => void;
}

export function CVList({ cvFiles, onRemove, onPreview }: CVListProps) {
  if (cvFiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-800 bg-gray-900/30 py-16 text-center">
        <FileQuestion className="mb-4 h-16 w-16 text-gray-600" />
        <h3 className="mb-2 text-lg font-medium text-gray-400">
          No CVs uploaded yet
        </h3>
        <p className="text-sm text-gray-500">
          Upload PDF files to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cvFiles.map((cvFile) => (
        <CVPreviewCard
          key={cvFile.id}
          cvFile={cvFile}
          onRemove={onRemove}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}
