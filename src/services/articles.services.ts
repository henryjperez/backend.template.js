import { IServices } from "@interfaces";
import { Services } from "@services";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ArticlesServices extends Services {
	constructor(
		public perro = "perrito",
	) {
		super();
	}
	
	async create() {
		const perro = await prisma.user.create({
			data: {
				email: "perrito4@email.com",
				name: "Perrito",
			}
		});
		return perro;
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