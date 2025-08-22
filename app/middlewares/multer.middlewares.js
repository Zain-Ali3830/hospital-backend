import multer from'multer';
import cloudinary from '../utils/cloudinary';

import { CloudinaryStorage } from 'multer-storage-cloudinary';

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'hospital-site',
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
})

export const upload = multer({ storage })