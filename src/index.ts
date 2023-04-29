import { app } from "./app";

const port = app.get("port") ?? 4000;
app.listen(port, () => console.log("🚀 App running in port:", port));