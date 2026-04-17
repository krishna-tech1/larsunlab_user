import multer from 'multer';

// Use memory storage for buffer handling before Cloudinary
const storage = multer.memoryStorage();

const resumeUpload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow PDFs, Docs, and images for resumes
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/rtf',
      'text/plain',
      'image/jpeg',
      'image/png'
    ];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Please upload PDF, DOC, or TXT.'), false);
    }
  },
});

export default resumeUpload;
