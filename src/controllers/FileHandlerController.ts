import { Request, Response } from 'express';
import fs from 'fs';
import HttpStatus from 'http-status';
import path from 'path';
import env from '../config/env';
import FileInfo from '../models/FileInfo';

const baseUrl = `${env.BASE_URL}:${env.SERVER_PORT}/`;
const baseDir = path.resolve(__dirname, '..', '..', 'public', 'files');
class FileHandlerController {

    async uploadFile(request: Request, response: Response) {
        const filename = request.file?.filename;
        const fileInfo = {
            name: filename,
            url: baseUrl + filename,
        };
        try {
            return response.status(HttpStatus.CREATED).json({ fileInfo });
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    downloadFile(request: Request, response: Response) {
        const fileName = request.params.name;
        return response.download(`${baseDir}/${fileName}`, fileName, (err) => {
            if (err) {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    message: "Could not download the file. " + err,
                });
            }
        });
    }

    getListFiles(request: Request, response: Response) {
        fs.readdir(baseDir, (err, files) => {
            if (err) {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    message: `Unable to list files: ${err.message}`,
                });
            }
            let fileInfos: FileInfo[] = [];
            files.forEach((file) => {
                fileInfos.push({
                    name: file,
                    url: baseUrl + file,
                });
            });
            response.status(HttpStatus.OK).send(fileInfos);
        });
    }
}

export default FileHandlerController;
