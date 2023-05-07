import { getApp } from "./app";
import { port } from "@config";

const app = getApp();

app.listen(port, () => console.log("🚀 App running in port:", port));