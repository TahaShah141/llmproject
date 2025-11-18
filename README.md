# Smart HR Assistant - AI-Powered CV Shortlisting

A modern, elegant web application for uploading, previewing, and shortlisting candidate CVs. Built with Next.js 16, React 19, and Tailwind CSS with a sleek black and red color scheme.

## Features

### Landing Page
- **Hero Section**: Eye-catching gradient design with compelling call-to-action
- **Features Section**: Highlights key benefits of the CV screening system
- **CTA Section**: Secondary conversion point with trust indicators
- **Responsive Design**: Looks great on all devices

### Upload & Preview
- **Drag & Drop Upload**: Intuitive file upload with visual feedback
- **Multiple File Support**: Upload up to 10 PDF files at once
- **File Validation**: 
  - PDF only
  - 10MB max file size
  - Duplicate detection
- **Beautiful CV Cards**: Grid layout with hover effects
- **Full PDF Preview**: Click any CV to view it in a modal with zoom and navigation controls
- **File Management**: Easy removal of individual files or clear all

### Shortlisting
- **Fixed Bottom Bar**: Always accessible shortlist button
- **File Counter**: Shows number of uploaded CVs
- **Console Logging**: Prints all CV filenames when shortlisting
- **User Feedback**: Alert dialog with shortlisted files

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **UI Components**: shadcn/ui (New York style)
- **Styling**: Tailwind CSS v4
- **PDF Viewer**: @react-pdf-viewer
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Landing page
├── globals.css         # Global styles + PDF viewer theme
└── upload/
    └── page.tsx        # Upload & preview page

components/
├── ui/                 # shadcn components (auto-generated)
├── landing/
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   └── cta-section.tsx
└── upload/
    ├── file-upload-zone.tsx
    ├── cv-preview-card.tsx
    ├── cv-list.tsx
    ├── shortlist-button.tsx
    └── pdf-preview-dialog.tsx

lib/
├── utils.ts            # Utility functions
├── types.ts            # TypeScript interfaces
└── file-utils.ts       # File validation & helpers
```

## Color Scheme

- **Primary**: Black (#000000)
- **Accent**: Red (#DC2626 - red-600)
- **Backgrounds**: Gray scale (gray-900, gray-950)
- **Text**: White with various opacities

## Key Features Implementation

### File Upload
- Drag-and-drop with visual feedback
- Multiple file selection
- Client-side validation
- Duplicate prevention

### CV Preview
- Full PDF rendering with controls
- Zoom, page navigation
- Dark theme optimized
- Responsive modal dialog

### State Management
- React useState for local state
- File objects stored in memory
- Efficient re-renders with useCallback

## Adding shadcn Components

To add new shadcn components:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add alert
```

## Notes

- PDF files are processed client-side only
- No backend integration (ready for future API integration)
- Console logging for shortlist feature (placeholder for API call)
- Max file size: 10MB per PDF
- Max files: 10 per session

## Future Enhancements

- Backend API integration
- AI-powered CV analysis
- Candidate ranking system
- Export shortlist to CSV/Excel
- Email notifications
- User authentication
- CV comparison view
- Advanced search & filters

## License

MIT
