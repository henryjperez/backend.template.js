import fs from "fs";
import path from 'path';

function getSchemas() {
	const schemaFiles = fs.readdirSync(__dirname);
	const filteredSchemas = schemaFiles.filter(file => {
		const splitName = file.split(".");
		return splitName[splitName.length - 1] === "gql";
	});

	const filesContent = [];
	filteredSchemas.forEach((file) => filesContent.push(fs.readFileSync(path.join(__dirname, file), "utf-8")));
	const schema = filesContent.join("\n");
	return schema;
}

export const schemas = getSchemas();