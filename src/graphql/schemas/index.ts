import fs from "fs";
import path from 'path';

function getSchemas() {
	const schemaFiles = fs.readdirSync(__dirname);
	const indexFile = path.basename(__filename);

	const index = schemaFiles.indexOf(indexFile);
	if (index !== -1) {
		schemaFiles.splice(index, 1);
	}

	const filesContent = []
	schemaFiles.forEach(async (file) => filesContent.push(fs.readFileSync(path.join(__dirname, file), "utf-8")));
	const schema = filesContent.join("\n");
	return schema;
}

export const schemas = getSchemas();