import multer from "multer"

const storage = multer.diskStorage({
   
    filename: function (req, file, cb) {
      cb(null, `${Date.now()} - ${file.originalname}`); // Ensure unique filenames
    }
  });

const upload = multer({storage})
export default upload