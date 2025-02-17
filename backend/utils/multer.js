const multer = require('multer');
const path = require("path")
const crypto = require("crypto")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Define your upload folder
    },
    filename: function(req, file, cb) {
    crypto.randomBytes(12,function(err,bytes){
        const fn = bytes.toString("hex")+ path.extname(file.originalname)
    })
       cb(null, fn); // Define
    },
  });
  
  // Initialize upload object
exports.upload = multer({ storage: storage });