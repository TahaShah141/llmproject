'use client';

import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import type { CVFile } from '@/lib/types';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PDFPreviewDialogProps {
  cvFile: CVFile | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PDFPreviewDialog({
  cvFile,
  open,
  onOpenChange,
}: PDFPreviewDialogProps) {
  const [fileUrl, setFileUrl] = useState<string>('');
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (cvFile && open) {
      const url = URL.createObjectURL(cvFile.file);
      setFileUrl(url);

      // Cleanup
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [cvFile, open]);

  if (!cvFile) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[90vw] sm:max-w-none border-gray-800 bg-gray-950 p-0 flex flex-col"
      >
        <SheetHeader className="border-b border-gray-800 p-4 pb-3 shrink-0">
          <SheetTitle className="text-lg font-semibold text-white">
            {cvFile.name}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-hidden p-2">
          {fileUrl && (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}
            >
              <div className="h-full w-full rounded-lg border border-gray-800 bg-gray-900 overflow-hidden">
                <Viewer
                  fileUrl={fileUrl}
                  plugins={[defaultLayoutPluginInstance]}
                  theme={{
                    theme: 'dark',
                  }}
                />
              </div>
            </Worker>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
