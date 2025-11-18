export interface CVFile {
  id: string;
  file: File;
  name: string;
  size: number;
  uploadedAt: Date;
}

export interface FileUploadError {
  message: string;
  type: 'size' | 'type' | 'duplicate';
}

export type FileValidationResult = {
  valid: true;
  file: File;
} | {
  valid: false;
  error: FileUploadError;
};
