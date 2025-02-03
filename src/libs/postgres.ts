import { Client, Pool } from "pg";
import { postgres_host, postgres_db, postgres_password, postgres_port, postgres_user } from "@config";

export async function getConnection() {
	const client = new Client({
		host: postgres_host,
		port: Number(postgres_port),
		database: postgres_db,
		user: postgres_user,
		password: postgres_password,
	});
	await client.connect();
	return client;
}

export const pool = new Pool({
	host: postgres_host,
	port: Number(postgres_port),
	database: postgres_db,
	user: postgres_user,
	password: postgres_password,
});
