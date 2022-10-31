import express, { Request, Response } from 'express';
import Multer from 'multer';
import env from '../config/env';

import UploadConfig from '../config/UploadConfig';
import FileHandlerController from '../controllers/FileHandlerController';
import LoginController from '../controllers/LoginController';
import AccountController from '../controllers/AccountController';

const maxSize = Number(env.MAX_SIZE || 5 * 1024 * 1024);

class RouterConfig {
    uploadConfig = new UploadConfig();
    uploadMiddleware: Multer.Multer;
    routes = express.Router();
    fileHandlerController = new FileHandlerController();
    mensagemController = new AccountController();
    loginController = new LoginController();

    constructor() {
        this.uploadMiddleware = Multer({
            storage: this.uploadConfig.storage(),
            limits: { fileSize: maxSize }
        });
        this.setupDefaultRoutes();
        this.setupFileRoutes();
        this.setupAccountRoutes();
        this.setupAuthRoutes();
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
        this.routes.post('/files/upload', this.uploadMiddleware.single('file'), this.fileHandlerController.uploadFile);
        this.routes.get('/files/download/:name', this.fileHandlerController.downloadFile);
        this.routes.get('/files/list', this.fileHandlerController.getListFiles);
    }

    setupAccountRoutes() {
        this.routes.post('/accounts', this.mensagemController.save);
        this.routes.get('/accounts', this.mensagemController.find);
    }

    setupAuthRoutes() {
        this.routes.post('/login', this.loginController.authenticate);
    }
}

export default RouterConfig;
