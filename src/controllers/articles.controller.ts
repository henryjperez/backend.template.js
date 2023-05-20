import { ArticlesServices } from "@services/articles.services";

const service = new ArticlesServices();

export class ArticlesController {

	static async getArticles() {
		const articles = await service.find();
		return articles
	}
	static async getOneArticle(slug: string) {
		const article = await service.findOne(slug);
		return article;
	}

}