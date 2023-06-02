import { Router, Response, Request } from "express";
import passport from "passport";

import { checkApiKey } from "@middlewares/auth.handler";
import { hashPassword, verifyPassword } from "@utils";
import { checkRoles } from "@middlewares/auth.handler";
import { imageHandler, imagesMiddleware } from "@middlewares/images.handler";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.send("<h1>This is the test route</h1>")
})

router.post("/perro-file", ...imagesMiddleware("perro", 1, 900), (req, res) => {
	console.log(req.body, req.file);

	res.send("Perrito bonito");
});

router.route("/auth-perro")
	.get(
		passport.authenticate("jwt", { session: false }),
		checkRoles("admin", "user"),
		(req: Request, res: Response) => {
			res.json({
				message: "Perri authenticated",
			});
		}
	)

router.route("/perro")
	.get(checkApiKey, async (req: Request, res: Response) => {
		res.statusCode = 203;

		res.json({
			value: 200 * 200,
		})
	})
	.post(async (req: Request, res: Response) => {
		interface IPassword {
			password: string;
		}

		const { password }: IPassword = req.body;
		const hash = await hashPassword(password);
		const isMatch = await verifyPassword(password, hash);
		
		res.json({
			message: "here is your password",
			password,
			hash,
			isMatch,
		});
	})

/* GET Params */
router.get("/monokuma/:scottie", (req: Request, res: Response) => {
	const { scottie } = req.params;
	res.send(`<h1>For the monokuma route, you typed: ${scottie}`);
});
router.get("/21/:id/product/:value", (req: Request, res: Response) => {
	const { id, value } = req.params;
	res.send(`<h1>For the 21 route, you typed: ${id} and the other one is: ${value}`);
});

/* GET Query Params */
router.get("/monokuma", (req: Request, res: Response) => {
	const { limit, offset } = req.query;
	if (limit && offset) {
		res.json({
			limit,
			offset,
		})
	} else {
		res.send("<h1>Come on, put a query string with 'limit' and 'offset'. Come on, give it a try</h1>");
	}
});

export interface TestProductPostBody {
	name: string;
	price: number;
	description: string;
}
export interface TestProduct extends TestProductPostBody {}
/* Products fake */
router.route("/products")
	.get((req: Request, res: Response) => {
		const products = [];
		const { size } = req.query;
		const limit = Number(size) || 1;

		for (let i = 0; i < limit; i++) {
			
		}

		res.status(300).json(products);
	})
	.post((req: Request, res: Response) => {
		// const { name, description, price }: TestProductPostBody = req.body;
		const body: TestProductPostBody = req.body;

		console.log("Perri body:", body);

		res.statusCode = 432;
		res.json({
			message: "done",
			data: body,
		})
	});

export interface TestProductPutParam {
	id: string;
}
router.route("/products/:id")
	.put((req: Request, res: Response) => {
		const { id } = req.params;
		const { name, description, price }: TestProductPostBody = req.body;

		if (id == "13") {
			res.statusCode = 223;
		}
		
		res.json({
			message: "updated",
			data: {
				name,
				description,
				price,
			},
			id,
		})
	})
	.delete((req: Request, res: Response) => {
		const { id } = req.params;

		res.status(445).json({
			message: "deleted",
			id,
		})
	})


export { router }