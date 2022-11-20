import JsonWebToken, { Algorithm } from 'jsonwebtoken';

class Jwt {
    private _KEY = String(process.env.KEY);
    private _ALGORITHM = String(process.env.ALGORITHM) as Algorithm;
    private _API_VERSION = String(process.env.API_VERSION);
    private _EXPIRATION = String(process.env.EXPIRATION);

    createAuthenticationToken(principal: any): String {
        const subject = `${this._API_VERSION}:${principal}`;
        const token = JsonWebToken.sign(
            { principal },
            this._KEY,
            {
                algorithm: this._ALGORITHM,
                expiresIn: this._EXPIRATION,
                subject
            });
        return token
    }
}

export default new Jwt();
