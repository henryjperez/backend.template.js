const express = require('express');
const request = require("supertest");

const app = express();
app.get("/perro", (req, res) => {
	res.status(203).json({ perro: "Perrinaitor" });
});
app.listen(9000);

const api = request(app);

describe("A Jest thing or something", () => {
	test("Sum test", () => {
		expect(1 + 1).toBe(2);
	});
});

describe('tests 4 app', () => {
	test("GET /perro", async () => {
		const response = await api.get("/hello");
		console.log("Perri test response", response);
		expect(response).toBeTruthy();
	});
});