"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = app_1.app.get("port") ?? 4000;
app_1.app.listen(port, () => console.log("🚀 App running in port:", port));
//# sourceMappingURL=index.js.map