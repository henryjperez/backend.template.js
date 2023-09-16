import SignPDF from "@utils/pdfSign/signPdf";
import fs from "node:fs";
import path from "node:path";

async function main() {
	const pdfBuffer = new SignPDF(
		path.resolve('dev/test.pdf'),
		path.resolve('dev/keyStore.p12')
	);

	const signedDocs = await pdfBuffer.signPDF();
	const randomNumber = Math.floor(Math.random() * 5000);
	const pdfName = `./dev/exported_file_${randomNumber}.pdf`;

	fs.writeFileSync(pdfName, signedDocs);
	console.log(`New Signed PDF created called: ${pdfName}`);
}

export class SignController {

	static signTest() {
		main();
	}

}