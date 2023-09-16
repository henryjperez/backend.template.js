import { config } from 'dotenv';
config();

export type Tenv = "PRODUCTION" | "DEVELOPMENT";

// Server
// @ts-ignore
export const env: Tenv = process.env.NODE_ENV || "DEVELOPMENT";
export const isDevMode = env !== "PRODUCTION";
export const perro = process.env.PERRO;
export const port = process.env.PORT || 9000;
export const api_key = process.env.API_KEY;
export const jwt_secret = process.env.JWT_SECRET;

// Postgres
export const postgres_db = process.env.POSTGRES_DB;
export const postgres_user = process.env.POSTGRES_USER;
export const postgres_password = process.env.POSTGRES_PASSWORD;
export const postgres_port = process.env.POSTGRES_PORT;
export const postgres_host = process.env.POSTGRES_HOST;
export const postgres_uri = process.env.POSTGRES_URI;

// AWS S3
export const awsBucketName = process.env.AWS_BUCKET_NAME;
export const awsBucketRegion = process.env.AWS_BUCKET_REGION;
export const awsPublicKey = process.env.AWS_PUBLIC_KEY;
export const awsSecretKey = process.env.AWS_SECRET_KEY;
