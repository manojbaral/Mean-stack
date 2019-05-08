"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStrategy = undefined;

var _development = require("../../config/env/development");

var _passportJwt = require("passport-jwt");

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = _development.devConfig.secret;

  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({ _id: payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
      // or you could create a new account
    });
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR08sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFNQyxPQUFPLEVBQWI7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7O0FBRUFDLHFCQUFTQyxHQUFULENBQ0UsSUFBSVAsc0JBQVlRLFFBQWhCLENBQXlCVixJQUF6QixFQUErQixVQUFDVyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDaERDLG1CQUFLQyxPQUFMLENBQWEsRUFBRUMsS0FBS0osUUFBUUssRUFBZixFQUFiLEVBQWtDLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQy9DLFVBQUlELEdBQUosRUFBUztBQUNQLGVBQU9MLEtBQUtLLEdBQUwsRUFBVSxLQUFWLENBQVA7QUFDRDtBQUNELFVBQUlDLElBQUosRUFBVTtBQUNSLGVBQU9OLEtBQUssSUFBTCxFQUFXTSxJQUFYLENBQVA7QUFDRDtBQUNELGFBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNBO0FBQ0QsS0FURDtBQVVELEdBWEQsQ0FERjtBQWNELENBbkJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmltcG9ydCBQYXNzcG9ydEpXVCBmcm9tIFwicGFzc3BvcnQtand0XCI7XHJcbmltcG9ydCAgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCAgVXNlciBmcm9tICcuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVsJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJlSldUU3RyYXRlZ3kgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb3B0cyA9IHt9O1xyXG4gIG9wdHMuand0RnJvbVJlcXVlc3QgPSBQYXNzcG9ydEpXVC5FeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xyXG4gIG9wdHMuc2VjcmV0T3JLZXkgPSBkZXZDb25maWcuc2VjcmV0O1xyXG5cclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgUGFzc3BvcnRKV1QuU3RyYXRlZ3kob3B0cywgKHBheWxvYWQsIGRvbmUpID0+IHtcclxuICAgICAgVXNlci5maW5kT25lKHsgX2lkOiBwYXlsb2FkLmlkIH0sIChlcnIsIHVzZXIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gb3IgeW91IGNvdWxkIGNyZWF0ZSBhIG5ldyBhY2NvdW50XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICApO1xyXG59OyJdfQ==