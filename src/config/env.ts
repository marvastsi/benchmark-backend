import 'dotenv/config';

export = {
    SERVER_PORT: process.env.SERVER_PORT,
    BASE_URL: process.env.BASE_URL,
    MAX_SIZE: process.env.MAX_SIZE,
    API_VERSION: process.env.API_VERSION,
    SECRET: process.env.SECRET,
    ALGORITHM: process.env.ALGORITHM,
    EXPIRATION: process.env.EXPIRATION,
  };
