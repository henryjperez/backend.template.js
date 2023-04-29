import { Router, Response, Request } from "express";
const controllers = {
	get_articles: (req: Request, res: Response) => {
		res.json({
			name: "Bianca"
		})
	},
};

const router = Router();

router.route("/")
	.get(controllers.get_articles)


export { router };