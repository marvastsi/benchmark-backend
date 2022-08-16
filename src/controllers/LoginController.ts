import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import LoginInfo from '../models/LoginInfo';

import LoginService from '../services/LoginService';

class LoginController {
    authenticate(request: Request, response: Response) {
        try {
            const token = LoginService.login(request.body);
            return response.status(HttpStatus.OK).json(token);
        } catch (error) {
            return response.status(HttpStatus.UNAUTHORIZED).send();
        }
    }
}

export default LoginController;
