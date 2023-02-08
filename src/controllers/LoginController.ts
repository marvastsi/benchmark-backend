import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import moment from 'moment';

import LoginService from '../services/LoginService';

class LoginController {
    authenticate(request: Request, response: Response) {
        try {
            const credentials = {
                ...request.body
            }
            const token = LoginService.login(credentials);
            console.log(`[${moment().format()}]: Login successful: ${credentials.username} `);
            return response.status(HttpStatus.OK).json(token);
        } catch (error) {
            console.log(`Login Error`)
            return response.status(HttpStatus.UNAUTHORIZED).send();
        }
    }
}

export default LoginController;
