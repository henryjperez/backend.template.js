import { pool } from "@libs/postgres";

export type Pool = typeof pool;
export interface IServices {
	pool: Pool;
}

export abstract class Services implements IServices {
	pool: Pool;
	constructor() {
		this.pool = pool;
	}
}