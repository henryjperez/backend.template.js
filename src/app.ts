import express from "express";
import { routerApi } from "@routes";
import { errorMiddleware } from "@middlewares/error.handler";
import { corsMiddleware } from "@middlewares/cors.handler";

const app = express();
const port = null;

app.set("port", port);

app.use(express.json());
app.use(corsMiddleware());

routerApi(app);
app.use(errorMiddleware);

export { app };