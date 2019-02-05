/* eslint-disable  */
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const cors = require('cors');

const db = require('./db');
const UserModel = require('./models/user');

const { ExtractJwt, Strategy } = passportJWT;
const PORT = 4001;
const app = express();
mongoose.connect(db.url);

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'RomanAllmax';
const strategy = new Strategy(jwtOptions, function(jwtPayload, next) {
  next(null, jwtPayload.email);
});
passport.use(strategy);
const options = {
  expiresIn: "12h"
}

const createApp = () => {
  app.use(morgan('dev'));
  app.use(cors({
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200
  }));
  app.use(passport.initialize());
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Internal server error.');
    next();
  });

  app.post('/signup', (req, res) => {
    UserModel.findOne({ email: req.body.email }, function(error, user) {
      if (error) throw error;
      if (user) return res.status(401).send({
        message: "This email is already in use",
        statusCode: 0
      });
      else {
        const emailReg = /^\w.[^/\<>,!#$%^:;'"&?*()/s]{3,}@\w.[^/\<>,!#$%^:;'"&?*()/s]+\.[a-z]{2,6}$/gi;
        const passwordReg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        if (!emailReg.test(req.body.email)) {
          return res.status(401).send({
            message: "Email incorrect",
            statusCode: 1
          });
        }
        if (!passwordReg.test(req.body.password)) {
          return res.status(401).send({
            message: "Password has to contain one uppercase, one lowecase, one number, one special character '!@#$%^&*' and be at least 6 characters long",
            statusCode: 1
          });
        }
        const user = new UserModel({
          email: req.body.email,
          password: req.body.password
        });
        user.save((err) => {
          if (err) throw err;
        });
        const payload = { email: req.body.email };
        const token = jwt.sign(payload, jwtOptions.secretOrKey, options);
        return res.status(200).send({ token: token });
      }
    });
  });

  app.post('/signin', (req, res) => {
    UserModel.findOne({ email: req.body.email }, function(error, user) {
      if (error) throw error;
      if (user === null) return res.status(401).send({
        message: "Email or password is incorrect",
        statusCode: 1
      });
      else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          if (!isMatch) {
            return res.status(401).send({
              message: "Email or password is incorrect",
              statusCode: 1
            });
          }
          const payload = { email: req.body.email };
          const token = jwt.sign(payload, jwtOptions.secretOrKey, options);
          return res.status(200).send({ token: token });
        });
      }
    });
  });

  app.get('/verification', (req, res) => {
    const token = req.body.token;
    jwt.verify(token, jwtOptions.secretOrKey, function(error) {
      if (error) return res.status(401).send({
        error: "Token already expired",
        statusCode: 2,
        token: token
      });
      return res.status(200).send({
        statusCode: 5,
        token: token
      });
    });
  });

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
};

const startListening = () => {
  app.listen(PORT);
};

createApp();
startListening();
