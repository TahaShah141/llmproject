'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import type { CVFile } from '@/lib/types';
import { formatFileSize } from '@/lib/file-utils';

interface CVPreviewCardProps {
  cvFile: CVFile;
  onRemove: (id: string) => void;
  onPreview: (cvFile: CVFile) => void;
}

export function CVPreviewCard({
  cvFile,
  onRemove,
  onPreview,
}: CVPreviewCardProps) {
  return (
    <Card className="group relative overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-red-500/50 hover:bg-gray-900">
      <CardContent className="p-4">
        {/* Remove button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(cvFile.id);
          }}
        >
          <X className="h-4 w-4 text-gray-400 hover:text-red-500" />
        </Button>

        {/* File icon and preview trigger */}
        <button
          onClick={() => onPreview(cvFile)}
          className="w-full text-left"
        >
          <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-gray-750">
            <FileText className="h-16 w-16 text-red-500" />
          </div>

          {/* File info */}
          <div className="space-y-1">
            <h3 className="truncate text-sm font-medium text-white">
              {cvFile.name}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{formatFileSize(cvFile.size)}</span>
              <span>
                {new Date(cvFile.uploadedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </button>
      </CardContent>
    </Card>
  );
}
