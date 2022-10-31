import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import AccountService from '../services/AccountService';

class AccountController {
    save(request: Request, response: Response) {
        try {
            const account = {
                ...request.body
            }
            console.log(account);
            const accountId = AccountService.save(account)
            return response.status(HttpStatus.ACCEPTED).json({accountId});
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }

    find(request: Request, response: Response) {
        try {
            return response.status(HttpStatus.OK).send([]);
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default AccountController;
