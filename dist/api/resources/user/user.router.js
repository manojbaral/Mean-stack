"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = undefined;

var _express = require("express");

var express = _interopRequireWildcard(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userRouter = exports.userRouter = express.Router();
userRouter.post('/signup', _user2.default.signup);
userRouter.post('/login', _user2.default.login);
userRouter.post('/test', _passport2.default.authenticate('jwt', { session: false }), _user2.default.test);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInVzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwidXNlckNvbnRyb2xsZXIiLCJzaWdudXAiLCJsb2dpbiIsInBhc3Nwb3J0IiwiYXV0aGVudGljYXRlIiwic2Vzc2lvbiIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7SUFBWUEsTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUdPLElBQU1DLGtDQUFXRCxRQUFRRSxNQUFSLEVBQWpCO0FBQ1BELFdBQVdFLElBQVgsQ0FBZ0IsU0FBaEIsRUFBMEJDLGVBQWVDLE1BQXpDO0FBQ0FKLFdBQVdFLElBQVgsQ0FBZ0IsUUFBaEIsRUFBeUJDLGVBQWVFLEtBQXhDO0FBQ0FMLFdBQVdFLElBQVgsQ0FBZ0IsT0FBaEIsRUFBd0JJLG1CQUFTQyxZQUFULENBQXNCLEtBQXRCLEVBQTRCLEVBQUNDLFNBQVEsS0FBVCxFQUE1QixDQUF4QixFQUFxRUwsZUFBZU0sSUFBcEYiLCJmaWxlIjoidXNlci5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tIFwiLi91c2VyLmNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJvdXRlcj1leHByZXNzLlJvdXRlcigpO1xyXG51c2VyUm91dGVyLnBvc3QoJy9zaWdudXAnLHVzZXJDb250cm9sbGVyLnNpZ251cCk7XHJcbnVzZXJSb3V0ZXIucG9zdCgnL2xvZ2luJyx1c2VyQ29udHJvbGxlci5sb2dpbik7XHJcbnVzZXJSb3V0ZXIucG9zdCgnL3Rlc3QnLHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0Jyx7c2Vzc2lvbjpmYWxzZX0pLHVzZXJDb250cm9sbGVyLnRlc3QpOyJdfQ==