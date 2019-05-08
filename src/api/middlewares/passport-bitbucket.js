import passport from 'passport';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';
import BitbucketStrategy from 'passport-bitbucket'

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const configureBitbucketStrategy = () => {
  passport.use(
    new BitbucketStrategy.Strategy
      (
      {
        consumerKey: devConfig.bitbucket.consumerKey,
        consumerSecret: devConfig.bitbucket.consumerSecret,
        callbackURL: devConfig.bitbucket.callbackURL,
      },
      async (token, tokenSecret, profile, cb) => {
        try {
          // find the user by github id
          const user = await User.findOne({ "bitbucket.id": profile.id });
          console.log(profile);
          if (user) {
            return cb(null, user);
          }
          const newUser = new User({});
          newUser.bitbucket.id = profile.id;
          newUser.bitbucket.token = token;
          newUser.bitbucket.displayName = profile.displayName;
          newUser.bitbucket.email = profile.emails[0].value;
          newUser.bitbucket.username=profile.username;
          await newUser.save();
          cb(null, newUser);
        } catch (err) {
          console.error(err);
          return cb(err);
        }
      }
    )
  );
};