'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ListChecks } from 'lucide-react';
import type { CVFile } from '@/lib/types';

interface ShortlistButtonProps {
  cvFiles: CVFile[];
}

export function ShortlistButton({ cvFiles }: ShortlistButtonProps) {
  const handleShortlist = () => {
    if (cvFiles.length === 0) return;

    console.log('=== SHORTLISTED CVS ===');
    cvFiles.forEach((cvFile, index) => {
      console.log(`${index + 1}. ${cvFile.name}`);
    });
    console.log('======================');

    // Also show an alert for user feedback
    alert(
      `Shortlisted ${cvFiles.length} CV${cvFiles.length !== 1 ? 's' : ''}:\n\n${cvFiles.map((cv, i) => `${i + 1}. ${cv.name}`).join('\n')}\n\nCheck the console for details.`
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-black/95 p-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {cvFiles.length} CV{cvFiles.length !== 1 ? 's' : ''} uploaded
          </span>
          {cvFiles.length > 0 && (
            <Badge variant="secondary" className="bg-red-500/20 text-red-400">
              Ready to shortlist
            </Badge>
          )}
        </div>

        <Button
          size="lg"
          onClick={handleShortlist}
          disabled={cvFiles.length === 0}
          className="bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-500"
        >
          <ListChecks className="mr-2 h-5 w-5" />
          Shortlist Candidates
        </Button>
      </div>
    </div>
  );
}
