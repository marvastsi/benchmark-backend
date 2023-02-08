import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import moment from 'moment';
import AccountService from '../services/AccountService';

class AccountController {
    save(request: Request, response: Response) {
        try {
            const account = {
                ...request.body
            }
            const accountSaved = AccountService.save(account)

            console.log(`[${moment().format()}]: Saved Account: ${JSON.stringify(accountSaved)}`);
            
            return response.status(HttpStatus.ACCEPTED).json({accountId: accountSaved.id});
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
