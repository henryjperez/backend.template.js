import { Pool } from "pg";
import { postgres_db, postgres_password, postgres_port, postgres_user, postgres_host, postgres_uri } from "@config";

const USER = encodeURIComponent(postgres_user);
const PASSWORD = encodeURIComponent(postgres_password);
const URI = postgres_uri ?? `postgres://${USER}:${PASSWORD}@${postgres_host}:${postgres_port}/${postgres_db}`;

export const pool = new Pool({ connectionString: URI });