import { pool } from "@libs/postgres";
import { IServices } from "@interfaces";
import { Services } from "@services";

class ArticlesServices extends Services {
	constructor(
		public perro = "perrito",
	) {
		super();
	}
	
	async create() {

	}

	async find() {

	}

	async findOne(slug: string) {

	}

	async update() {

	}

	async delete() {

	}
}

export { ArticlesServices };