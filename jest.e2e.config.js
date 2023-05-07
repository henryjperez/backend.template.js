const baseConfig = require("./jest.config");

module.exports = {
	...baseConfig,
	coverageDirectory: "coverage_e2e",
};