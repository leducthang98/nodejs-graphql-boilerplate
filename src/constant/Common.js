export const CONFIG = {
    PORT: 4000,
    PG_HOST: process.env.POSTGRES_HOST,
    PG_PORT: process.env.POSTGRES_PORT,
    PG_USER: process.env.POSTGRES_USERNAME,
    PG_PASS: process.env.POSTGRES_PASSWORD,
    PG_DB: process.env.POSTGRES_DB,
    PG_SCHEMA: process.env.POSTGRES_SCHEMA
};
export const JWT_SECRET = 'leducthang98';