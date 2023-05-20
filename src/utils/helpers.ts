export function emailChecker(email: string) {
	const isEmail = email.includes("@");
	return isEmail;
}