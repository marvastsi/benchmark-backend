import bcrypt from 'bcryptjs';
import Credentials from "../models/Credentials";

import Jwt from '../auth/Jwt';
import Token from '../models/Token';

class LoginService {
    private _PASSWORD = String(process.env.DEFAULT_PASSWORD);
    /**
     * 
     * @param loginInfo Login information
     * @returns jwt token as String
     */
    login(loginInfo: Credentials): Token {
        const { username, password } = loginInfo;
        try {
            if (this.isBlank(username) ||
                !bcrypt.compareSync(password, this._PASSWORD)) {
                throw new Error("UNAUTHORIZED");
            }

            return {
                type: "Bearer",
                value: Jwt.createAuthenticationToken(username)
            };
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    private isBlank(value: String): Boolean {
        return !(value && value.trim())
    }
}

export default new LoginService();
