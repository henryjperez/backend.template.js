import { config } from 'dotenv';
config();

export type Tenv = "PRODUCTION" |"DEVELOPMENT" | string;


export const env: Tenv = process.env.NODE_ENV || "DEVELOPMENT";
export const isDevMode = env === "DEVELOPMENT";
export const perro = process.env.PERRO;
export const port = process.env.PORT || 9000;