import "reflect-metadata";
import { DataSource } from "typeorm";

import { postgres_host, postgres_db, postgres_password, postgres_port, postgres_user, db_type, isDevMode } from "@config";
import { User } from "@db";

export const AppDataSource = new DataSource({
	type: db_type as any,
	host: postgres_host,
	username: postgres_user,
	password: postgres_password,
	port: Number(postgres_port),
	database: postgres_db,
	logging: isDevMode,
	synchronize: isDevMode,
	// synchronize: false,
	entities: [User],
	migrations: ["src/db/migrations/**/*.ts"],
});
