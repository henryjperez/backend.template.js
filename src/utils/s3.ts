import { S3Client, PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import fs, { PathLike } from "fs";

import { awsPublicKey, awsSecretKey, awsBucketName, awsBucketRegion } from "@config";

const client = new S3Client({
	// credentials: {
	// 	accessKeyId: awsPublicKey,
	// 	secretAccessKey: awsSecretKey,
	// },
	region: awsBucketRegion,
});

export async function uploadToS3(file: PathLike, fileName: string) {
	const stream = fs.createReadStream(file);
	const uploadParams: PutObjectCommandInput = {
		Bucket: awsBucketName,
		Key: fileName,
		Body: stream,
	};

	const command = new PutObjectCommand(uploadParams);
	const result = await client.send(command);
	console.log("_________________S3 RESULT__", result);
	return result;
}
