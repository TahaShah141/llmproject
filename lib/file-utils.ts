import type { FileValidationResult, CVFile } from './types';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const ALLOWED_TYPE = 'application/pdf';

/**
 * Validates a file for PDF type and size constraints
 */
export function validateFile(file: File): FileValidationResult {
  // Check file type
  if (file.type !== ALLOWED_TYPE) {
    return {
      valid: false,
      error: {
        message: 'Only PDF files are allowed',
        type: 'type',
      },
    };
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: {
        message: `File size must be less than ${formatFileSize(MAX_FILE_SIZE)}`,
        type: 'size',
      },
    };
  }

  return {
    valid: true,
    file,
  };
}

/**
 * Formats file size in bytes to human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Generates a unique ID for a file
 */
export function generateFileId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Creates a CVFile object from a File
 */
export function createCVFile(file: File): CVFile {
  return {
    id: generateFileId(),
    file,
    name: file.name,
    size: file.size,
    uploadedAt: new Date(),
  };
}

/**
 * Checks if a file with the same name already exists
 */
export function isDuplicateFile(file: File, existingFiles: CVFile[]): boolean {
  return existingFiles.some((cvFile) => cvFile.name === file.name);
}
