import "reflect-metadata";
import { getApp } from "./app";
import { port } from "@config";
import { AppDataSource } from "@libs/typeorm";

async function init() {
	await AppDataSource.initialize();
	const app: Awaited<ReturnType<typeof getApp>> = await getApp();
	app.listen(port, () => console.log("🚀 App running in port:", port));
}
init();
