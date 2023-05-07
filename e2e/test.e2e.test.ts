import express, { Request, Response, Express } from 'express';
import request, { Test, SuperTest } from "supertest";

describe("A Jest thing or something", () => {
	test("Sum test", () => {
		expect(1 + 1).toBe(2);
	});
});

describe('tests 4 app', () => {
	let app: Express;
	let server: any;
	let api: SuperTest<Test>;

	beforeEach(() => {
		app = express();
		app.get("/perro", (req: Request, res: Response) => {
			res.status(203).json({ perro: "Perrinaitor" });
		});
		server = app.listen(9000);
		api = request(app);
	})

	test("GET /perro", async () => {
		const { statusCode, body, headers } = await api.get("/perro");
		// console.log("Perri test response", statusCode, body, headers);
		expect(statusCode).toBe(203);
		expect(body.perro).toEqual("Perrinaitor");
		expect(headers["content-type"]).toMatch(/json/);
	});


	afterEach(() => {
		server.close();
	});
});