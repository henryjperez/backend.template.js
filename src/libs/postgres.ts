import { Client } from "pg";
import { postgres_db, postgres_password, postgres_port, postgres_user, postgres_host } from "@config";

export async function getConnection() {
	const client = new Client({
		host: postgres_host,
		port: parseInt(postgres_host),
		user: postgres_user,
		password: postgres_password,
		database: postgres_db,
	});
	await client.connect();

	return client;
}