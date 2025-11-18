'use client';

import { useState, useCallback } from 'react';
import { FileUploadZone } from '@/components/upload/file-upload-zone';
import { CVList } from '@/components/upload/cv-list';
import { ShortlistButton } from '@/components/upload/shortlist-button';
import { PDFPreviewDialog } from '@/components/upload/pdf-preview-dialog';
import type { CVFile } from '@/lib/types';
import {
  validateFile,
  createCVFile,
  isDuplicateFile,
} from '@/lib/file-utils';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UploadPage() {
  const [cvFiles, setCvFiles] = useState<CVFile[]>([]);
  const [selectedCV, setSelectedCV] = useState<CVFile | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const router = useRouter();

  const handleFilesSelected = useCallback(
    (files: File[]) => {
      const newCVFiles: CVFile[] = [];
      const errors: string[] = [];

      files.forEach((file) => {
        // Validate file
        const validation = validateFile(file);
        if (!validation.valid) {
          errors.push(`${file.name}: ${validation.error.message}`);
          return;
        }

        // Check for duplicates
        if (isDuplicateFile(file, cvFiles)) {
          errors.push(`${file.name}: File already uploaded`);
          return;
        }

        newCVFiles.push(createCVFile(file));
      });

      // Add new files to state
      if (newCVFiles.length > 0) {
        setCvFiles((prev) => [...prev, ...newCVFiles]);
      }

      // Show errors if any
      if (errors.length > 0) {
        alert(
          `Some files could not be uploaded:\n\n${errors.join('\n')}`
        );
      }
    },
    [cvFiles]
  );

  const handleRemove = useCallback((id: string) => {
    setCvFiles((prev) => prev.filter((cv) => cv.id !== id));
  }, []);

  const handlePreview = useCallback((cvFile: CVFile) => {
    setSelectedCV(cvFile);
    setPreviewOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Upload CVs
                </h1>
                <p className="text-sm text-gray-400">
                  Upload and preview candidate resumes
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8 pb-32">
        <div className="space-y-8">
          {/* Upload Zone */}
          <FileUploadZone onFilesSelected={handleFilesSelected} />

          {/* CV List */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Uploaded CVs ({cvFiles.length})
              </h2>
              {cvFiles.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCvFiles([])}
                  className="text-red-500 hover:bg-red-500/10 hover:text-red-400"
                >
                  Clear All
                </Button>
              )}
            </div>
            <CVList
              cvFiles={cvFiles}
              onRemove={handleRemove}
              onPreview={handlePreview}
            />
          </div>
        </div>
      </main>

      {/* Shortlist Button - Fixed at bottom */}
      <ShortlistButton cvFiles={cvFiles} />

      {/* PDF Preview Dialog */}
      <PDFPreviewDialog
        cvFile={selectedCV}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </div>
  );
}
