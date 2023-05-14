import bcrypt from "bcrypt";

export async function hashPassword(password: string, salt = 10) {
	const hash = await bcrypt.hash(password, salt);
	return hash;
}

export async function verifyPassword(password: string, hash: string) {
	const isMatch = await bcrypt.compare(password, hash);
	return isMatch;
}