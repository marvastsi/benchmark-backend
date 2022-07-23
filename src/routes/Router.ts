import express, { Request, Response } from 'express';
import Multer from 'multer';
import env from '../config/env';

import UploadConfig from '../config/UploadConfig';
import FileHandlerController from '../controllers/FileHandlerController';
import MessageController from '../controllers/MessageController';

const maxSize = Number(env.MAX_SIZE || 2 * 1024 * 1024);

class RouterConfig {
    uploadConfig = new UploadConfig();
    uploadMiddleware: Multer.Multer;
    routes = express.Router();
    fileHandlerController = new FileHandlerController();
    mensagemController = new MessageController();

    constructor() {
        this.uploadMiddleware = Multer({
            storage: this.uploadConfig.storage(),
            limits: { fileSize: maxSize }
        });
        this.setupDefaultRoutes();
        this.setupFileRoutes();
        this.setupMessageRoutes();
    }

    setupDefaultRoutes() {
        this.routes.get("/", (request: Request, response: Response) => {
            response.json({
                info: "NodeJS, Express",
                apiDocs: "http://localhost:3000/api/swagger-ui.html"
            });
        });
    }

    setupFileRoutes() {
        this.routes.post('/file/upload', this.uploadMiddleware.single('file'), this.fileHandlerController.uploadFile);
        this.routes.get('/file/download/:name', this.fileHandlerController.downloadFile);
        this.routes.get('/file/listFiles', this.fileHandlerController.getListFiles);
    }

    setupMessageRoutes() {
        this.routes.post('/message/save', this.mensagemController.save);
        this.routes.get('/message/find', this.mensagemController.find);
    }
}


export default RouterConfig;
