import { getApp } from "./app";
import { port } from "@config";

async function init() {
	const app: Awaited<ReturnType<typeof getApp>> = await getApp();
	app.listen(port, () => console.log("🚀 App running in port:", port));
}
init();