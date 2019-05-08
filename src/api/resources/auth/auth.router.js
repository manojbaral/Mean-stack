import express from "express";
import passport from "passport";
import authController from "./auth.controller";

export const authRouter = express.Router();
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope:
    [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ]
      //['profile', 'email'],
    // [
    //   'https://www.googleapis.com/auth/plus.me',
    //   'https://www.googleapis.com/auth/userinfo.email',
    // ]
    // scope:
    //   ['https://www.googleapis.com/auth/userinfo.profile',
    //     'https://www.googleapis.com/auth/userinfo.email',
    //    // 'https://www.googleapis.com/auth/gmail.readonly'
    //   ],
    // accessType: 'offline',
    // prompt: 'consent',
    // successRedirect: '/logout',
    // failureRedirect: '/failure'
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);

// Twitter
authRouter.get('/twitter', passport.authenticate('twitter'));

authRouter.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/failure' }),
  authController.sendJWTToken
);

// Github
authRouter.get("/github", passport.authenticate("github",{
  scope: ['profile', 'email'],
}));

authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);

// Bitbucket
authRouter.get('/bitbucket', passport.authenticate('bitbucket'));

authRouter.get(
  '/bitbucket/callback',
  passport.authenticate('bitbucket', { failureRedirect: '/failure' }),
  authController.sendJWTToken
);

// Meetup
authRouter.get('/meetup', passport.authenticate('meetup'));

authRouter.get('/meetup/callback',
  passport.authenticate('meetup', { failureRedirect: '/failure' }),
  authController.sendJWTToken
);

// Reddit
authRouter.get("/reddit", passport.authenticate("reddit",{
  scope: ['profile', 'email'],
}));

authRouter.get(
  "/reddit/callback",
  passport.authenticate("reddit", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);
authRouter.get(
  "/authenticate",
  passport.authenticate("jwt", { session: false }),
  authController.authenticate
);
authRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  authController.logout
);


