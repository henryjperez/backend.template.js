"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const express_1 = require("express");
const articles_1 = require("./articles");
function routerApi(app) {
    const router = (0, express_1.Router)();
    app.use("/v1", router);
    router.use("/articles", articles_1.router);
}
exports.routerApi = routerApi;
//# sourceMappingURL=index.js.map