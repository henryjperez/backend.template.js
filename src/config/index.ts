import { config } from 'dotenv';
config();

export type Tenv = "PRODUCTION" | "DEVELOPMENT";

// Server
// @ts-ignore
export const env: Tenv = process.env.NODE_ENV || "DEVELOPMENT";
export const isDevMode = env !== "PRODUCTION";
export const perro = process.env.PERRO;
export const port = process.env.PORT || 9000;

// Postgres
export const postgres_db = process.env.POSTGRES_DB;
export const postgres_user = process.env.POSTGRES_USER;
export const postgres_password = process.env.POSTGRES_PASSWORD;
export const postgres_port = process.env.POSTGRES_PORT;
export const postgres_host = process.env.POSTGRES_HOST;