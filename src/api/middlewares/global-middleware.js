import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import swaggerDocument from '../../config/swagger.json';
import { configureJWTStrategy } from './passport-jwt';
import { configureGoogleStrategy } from './passport-google';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';
import { configureGithubStrategy } from './passport-github';
import {configureBitbucketStrategy } from './passport-bitbucket';
import {configureMeetupStrategy} from './passport-meetup';
import {configureRedditStrategy} from './passport-reddit';
import {configureTwitterStrategy} from './passport-twitter'

export const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(logger('dev'));
  app.use(
    session({
      secret: devConfig.secret,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize({ userProperty: 'currentUser' }));
  app.use(passport.session());
  configureJWTStrategy();
  configureGoogleStrategy();
  configureTwitterStrategy();
  configureGithubStrategy();
  configureBitbucketStrategy();
  configureMeetupStrategy();
  configureRedditStrategy();

  // save user into session
  // req.session.user = {userId}
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  // extract the userId from session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
      //cb(null,user)
    });
  });
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
    })
  );
  app.get('/failure', (req, res) => res.redirect('http://localhost:4200/login'));
};