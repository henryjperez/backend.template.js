import jwt from "jsonwebtoken";
import { jwt_secret } from "@config";

export type Roles = "admin" | "user"; 
export interface JWTPayload {
	sub: string | number;
	role: Roles;
}

export function signToken(payload: JWTPayload, secret = jwt_secret) {
	return jwt.sign(payload, secret);
}

export function verifyToken(token: string, secret = jwt_secret) {
	return jwt.verify(token, secret);
}