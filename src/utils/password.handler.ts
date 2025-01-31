import argon2 from "argon2";
// import bcrypt from "bcrypt";

// export async function hashPassword(password: string, salt = 10) {
// 	const hash = await bcrypt.hash(password, salt);
// 	return hash;
// }

// export async function verifyPassword(password: string, hash: string) {
// 	const isMatch = await bcrypt.compare(password, hash);
// 	return isMatch;
// }

export async function hashPassword(password: string) {
	const hash = await argon2.hash(password);
	return hash;
}

export async function verifyPassword(password: string, hash: string) {
	const isMatch = await argon2.verify(hash, password);
	return isMatch;
}
