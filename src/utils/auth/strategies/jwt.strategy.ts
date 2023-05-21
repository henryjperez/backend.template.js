import { Strategy, ExtractJwt } from "passport-jwt";
import { jwt_secret } from "@config";

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: jwt_secret,
};

export const jwtStrategy = new Strategy(options, (payload, done) => {
	return done(null, payload);
});