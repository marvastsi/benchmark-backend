import moment from 'moment';
import multer from 'multer';
import path from 'path';

class UploadConfig {
    storage() {
        return multer.diskStorage({
            destination: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
            filename: (request, file, callback) => {
                const ext = path.extname(file.originalname);
                const name = path.basename(file.originalname, ext);
                const timestamp = moment().format("yyyyMMDD_HHmmss");
                callback(null, `${name}_${timestamp}${ext}`);
            }
        });
    }
}

export default UploadConfig;
