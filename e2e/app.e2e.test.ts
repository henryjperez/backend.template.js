import { Express } from 'express';
import request, { Test, SuperTest } from "supertest";

import { getApp } from "../src/app";


describe('tests 4 app', () => {
	let app: Express;
	let server: any;
	let api: SuperTest<Test>;

	beforeEach(() => {
		app = getApp();
		server = app.listen(9000);
		api = request(app);
	});

	test("GET /v1/tests/perro", async () => {
		const { statusCode, body, headers } = await api.get("/v1/tests/perro");
		// console.log("Perri test response", statusCode, body, headers);
		expect(statusCode).toBe(203);
		expect(body.perro).toEqual("Perrito");
		expect(body.value).toEqual(200*200);
		expect(headers["content-type"]).toMatch(/json/);
	});


	afterEach(() => {
		server.close();
	});
});