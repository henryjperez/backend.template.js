const path = require("path");
const fs = require("fs");

function fromDir(startPath, filter) {
	//console.log('Starting from dir '+startPath+'/');

	if (!fs.existsSync(startPath)) {
		console.log("no dir ", startPath);
		return;
	}

	const list = [];
	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter); //recurse
		} else if (filename.endsWith(filter)) {
			// console.log("-- found: ", filename);
			list.push(filename);
		}
	}

	return list;
}

const files = fromDir("./src/graphql/schemas/", ".gql");

files.forEach((file) => fs.copyFileSync(file, file.replace("src", "build")));