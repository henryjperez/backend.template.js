"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers = {
    get_articles: (req, res) => {
        res.json({
            name: "Bianca"
        });
    },
};
const router = (0, express_1.Router)();
exports.router = router;
router.route("/")
    .get(controllers.get_articles);
//# sourceMappingURL=articles.js.map