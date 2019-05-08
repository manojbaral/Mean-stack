import passport from "passport";
import MeetupStrategy from "passport-meetup";
import { devConfig } from "../../config/env/development";
import User from "../resources/user/user.model";

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const configureMeetupStrategy = () => {
  passport.use(
    new MeetupStrategy.Strategy(
      {
        consumerKey: devConfig.meetup.consumerKey,
        consumerSecret: devConfig.meetup.consumerSecret,
        callbackURL: devConfig.meetup.callbackURL
      },
      async (token, tokenSecret, profile, done) => {
        try {
          // find the user by meetup id
          const user = await User.findOne({ "meetup.id": profile.id });
          console.log(profile);
          if (user) {
            return done(null, user);
          }
          const newUser = new User({});
          newUser.meetup.id = profile.id;
          newUser.meetup.token = token;
          newUser.meetup.displayName = profile.displayName;
          //newUser.meetup.email = profile.emails[0].value;
          newUser.meetup.username=profile.username;
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
