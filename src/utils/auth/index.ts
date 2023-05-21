import passport from "passport";
import { localStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.strategy';
import { gqlLocalStrategy } from "./strategies/local.gql.strategy";

passport.use(localStrategy);
passport.use(jwtStrategy);
passport.use(gqlLocalStrategy);