'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddlewares = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _swagger = require('../../config/swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _passportJwt = require('./passport-jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddlewares = exports.setGlobalMiddlewares = function setGlobalMiddlewares(app) {
  //express middleware
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));

  //cors
  app.use((0, _cors2.default)());

  //Morgan
  app.use((0, _morgan2.default)("dev"));

  //Passport
  app.use(_passport2.default.initialize());

  //jwt strategy
  (0, _passportJwt.configureJWTStrategy)();

  //Swagger UI for documentation
  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
    explorer: true
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZXMiLCJhcHAiLCJ1c2UiLCJleHByZXNzIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInBhc3Nwb3J0IiwiaW5pdGlhbGl6ZSIsInN3YWdnZXJVaSIsInNlcnZlIiwic2V0dXAiLCJzd2FnZ2VyRG9jdW1lbnQiLCJleHBsb3JlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBSU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsTUFBTztBQUN6QztBQUNBQyxNQUFJQyxHQUFKLENBQVFDLGtCQUFRQyxJQUFSLEVBQVI7QUFDQUgsTUFBSUMsR0FBSixDQUFRQyxrQkFBUUUsVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjs7QUFFQTtBQUNBTCxNQUFJQyxHQUFKLENBQVEscUJBQVI7O0FBRUE7QUFDQUQsTUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjs7QUFFQTtBQUNBRCxNQUFJQyxHQUFKLENBQVFLLG1CQUFTQyxVQUFULEVBQVI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBUCxNQUFJQyxHQUFKLENBQ0UsV0FERixFQUVFTywyQkFBVUMsS0FGWixFQUdFRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWlDO0FBQy9CQyxjQUFVO0FBRHFCLEdBQWpDLENBSEY7QUFPRCxDQXpCTSIsImZpbGUiOiJnbG9iYWwtbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSAnLi4vLi4vY29uZmlnL3N3YWdnZXIuanNvbic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5IH0gZnJvbSBcIi4vcGFzc3BvcnQtand0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxNaWRkbGV3YXJlcyA9IGFwcCA9PiB7XHJcbiAgLy9leHByZXNzIG1pZGRsZXdhcmVcclxuICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuXHJcbiAgLy9jb3JzXHJcbiAgYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuICAvL01vcmdhblxyXG4gIGFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcclxuXHJcbiAgLy9QYXNzcG9ydFxyXG4gIGFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcclxuXHJcbiAgLy9qd3Qgc3RyYXRlZ3lcclxuICBjb25maWd1cmVKV1RTdHJhdGVneSgpO1xyXG5cclxuICAvL1N3YWdnZXIgVUkgZm9yIGRvY3VtZW50YXRpb25cclxuICBhcHAudXNlKFxyXG4gICAgXCIvYXBpLWRvY3NcIixcclxuICAgIHN3YWdnZXJVaS5zZXJ2ZSxcclxuICAgIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRG9jdW1lbnQsIHtcclxuICAgICAgZXhwbG9yZXI6IHRydWVcclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuIl19