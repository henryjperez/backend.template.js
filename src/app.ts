import express from "express";
import { routerApi } from "@routes/index";

const app = express();
const port = null;

app.set("port", port);

app.use(express.json());
routerApi(app);

export { app };