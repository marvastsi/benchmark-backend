import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import path from 'path';

import errorHandler from '../middleware/ErrorHandler';
import RouterConfig from '../routes/Router';
import env from '../config/env';

const port = env.SERVER_PORT;
const baseUrl = env.BASE_URL;

class Server {
    public app: express.Application;
    httpServer: http.Server;
    routerConfig: RouterConfig;

    constructor() {
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.routerConfig = new RouterConfig();
        this.setupMiddlewares();
        this.setupRoutes();
        this.setupErrorHandler();
    }

    setupMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
        this.app.use(express.static(path.join(__dirname, '..', '..', 'public')));
    }

    setupRoutes() {
        this.app.use('/api', this.routerConfig.routes);
    }

    setupErrorHandler() {
        this.app.use((request: Request, response: Response, next: NextFunction) => {
            const error = new Error('Not found');
            return response.status(404).json({
                message: error.message
            });
        });

        this.app.use(errorHandler);
    }

    start() {
        try {
            this.httpServer.listen(port);
            console.log(`Server is running at ${baseUrl}:${port}`);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}

export default Server;