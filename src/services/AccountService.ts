import Account from '../models/Account';
import { v4 as uuidv4 } from 'uuid';

class AccountService {
   
    save(account: Account): String {
        try {
            let savedAccount = {
                id: uuidv4(),
                firstaName: account.firstaName,
                lastName: account.lastName,
                email: account.email,
                phoneNumber: account.phoneNumber,
                phoneCountryCode: account.phoneCountryCode,
                active: account.active,
                notification: account.notification,
                username: account.username,
                password: account.password,
            };
            console.log(`Saved Account: ${savedAccount}`)
            return savedAccount.id;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}

export default new AccountService();