import { Request, Response } from 'express';
import HttpStatus from 'http-status';

class AccountController {
    save(request: Request, response: Response) {
        try {
            const message = request.body;
            console.log(message);
            return response.status(HttpStatus.ACCEPTED).json("Account created");
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }

    find(request: Request, response: Response) {
        try {
            return response.status(HttpStatus.OK).send();
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default AccountController;
