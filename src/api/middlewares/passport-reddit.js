import passport from "passport";
import RedditStrategy from "passport-reddit";
import { devConfig } from "../../config/env/development";
import User from "../resources/user/user.model";

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const configureRedditStrategy = () => {
  passport.use(
    new RedditStrategy.Strategy(
      {
        clientID: devConfig.reddit.clientId,
        clientSecret: devConfig.reddit.clientSecret,
        callbackURL: devConfig.reddit.callbackURL
      },
      async (token, tokenSecret, profile, done) => {

        try {
          // find the user by github id
          const user = await User.findOne({ "reddit.id": profile.id });
          console.log(profile);
          if (user) {
            return done(null, user);
          }
          const newUser = new User({});
          newUser.reddit.id = profile.id;
          newUser.reddit.token = token;
          newUser.reddit.displayName = profile.displayName;
          newUser.reddit.email = profile.emails[0].value;
          newUser.reddit.username=profile.username;
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
