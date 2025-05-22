import multer from "multer";
const storage = multer.memoryStorage();

// For single file upload
export const singleUpload = multer({storage}).single("file");

// For multiple files with different field names
export const multipleUpload = multer({storage}).fields([
    { name: 'file', maxCount: 1 },
    { name: 'profilePhoto', maxCount: 1 }
]);