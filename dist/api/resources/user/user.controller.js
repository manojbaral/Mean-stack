"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpStatusCodes = require("http-status-codes");

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var jwt = _interopRequireWildcard(_jsonwebtoken);

var _development = require("../../../config/env/development");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {

  //Implements sign up for user
  signup: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _userService$validate, error, value, user;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;


              //Validate the request
              _userService$validate = _user2.default.validateSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context.next = 6;
              return _user4.default.create(value);

            case 6:
              user = _context.sent;
              return _context.abrupt("return", res.json({ success: true, message: 'User created successfully' }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),


  //Implements login for user
  login: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var _userService$validate2, error, value, user, matched, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;


              //Validate the request
              _userService$validate2 = _user2.default.validateSchema(req.body), error = _userService$validate2.error, value = _userService$validate2.value;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.UNAUTHORIZED).json({ err: 'Invalid email or password' }));

            case 9:
              matched = _bcryptjs2.default.compare(value.password, user.password);

              if (matched) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.UNAUTHORIZED).json({ err: 'Invalid Credential' }));

            case 12:

              //JWT TOKEN
              token = jwt.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: '1d' });
              return _context2.abrupt("return", res.json({ success: true, token: token }));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);

              console.error(_context2.t0);
              return _context2.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 17]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),


  //Testing Endpoint
  test: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImp3dCIsInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJzdGF0dXMiLCJCQURfUkVRVUVTVCIsImpzb24iLCJVc2VyIiwiY3JlYXRlIiwidXNlciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY29uc29sZSIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwiVU5BVVRIT1JJWkVEIiwiZXJyIiwibWF0Y2hlZCIsImJjcnlwdGpzIiwiY29tcGFyZSIsInBhc3N3b3JkIiwidG9rZW4iLCJzaWduIiwiaWQiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7Ozs7a0JBR2U7O0FBRWI7QUFDTUMsUUFITztBQUFBLHdGQUdBQyxHQUhBLEVBR0lDLEdBSEo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFNVDtBQU5TLHNDQU9nQkMsZUFBWUMsY0FBWixDQUEyQkgsSUFBSUksSUFBL0IsQ0FQaEIsRUFPREMsS0FQQyx5QkFPREEsS0FQQyxFQU9NQyxLQVBOLHlCQU9NQSxLQVBOOztBQUFBLG9CQVFMRCxTQUFTQSxNQUFNRSxPQVJWO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQVNBTixJQUFJTyxNQUFKLENBQVdDLDRCQUFYLEVBQXdCQyxJQUF4QixDQUE2QkwsS0FBN0IsQ0FUQTs7QUFBQTtBQUFBO0FBQUEscUJBZVVNLGVBQUtDLE1BQUwsQ0FBWU4sS0FBWixDQWZWOztBQUFBO0FBZUhPLGtCQWZHO0FBQUEsK0NBZ0JGWixJQUFJUyxJQUFKLENBQVMsRUFBQ0ksU0FBUSxJQUFULEVBQWNDLFNBQVEsMkJBQXRCLEVBQVQsQ0FoQkU7O0FBQUE7QUFBQTtBQUFBOztBQWtCVEMsc0JBQVFYLEtBQVI7QUFsQlMsK0NBbUJGSixJQUFJTyxNQUFKLENBQVdTLHNDQUFYLEVBQWtDUCxJQUFsQyxhQW5CRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBMEJiO0FBQ01RLE9BM0JPO0FBQUEsMEZBMkJEbEIsR0EzQkMsRUEyQkdDLEdBM0JIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBOEJUO0FBOUJTLHVDQStCZ0JDLGVBQVlDLGNBQVosQ0FBMkJILElBQUlJLElBQS9CLENBL0JoQixFQStCREMsS0EvQkMsMEJBK0JEQSxLQS9CQyxFQStCTUMsS0EvQk4sMEJBK0JNQSxLQS9CTjs7QUFBQSxvQkFnQ0xELFNBQVNBLE1BQU1FLE9BaENWO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQWlDQU4sSUFBSU8sTUFBSixDQUFXQyw0QkFBWCxFQUF3QkMsSUFBeEIsQ0FBNkJMLEtBQTdCLENBakNBOztBQUFBO0FBQUE7QUFBQSxxQkFvQ1NNLGVBQUtRLE9BQUwsQ0FBYSxFQUFDQyxPQUFNZCxNQUFNYyxLQUFiLEVBQWIsQ0FwQ1Q7O0FBQUE7QUFvQ0hQLGtCQXBDRzs7QUFBQSxrQkFxQ0pBLElBckNJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQXNDQVosSUFBSU8sTUFBSixDQUFXYSw2QkFBWCxFQUF5QlgsSUFBekIsQ0FBOEIsRUFBQ1ksS0FBSSwyQkFBTCxFQUE5QixDQXRDQTs7QUFBQTtBQTBDSEMscUJBMUNHLEdBMENLQyxtQkFBU0MsT0FBVCxDQUFpQm5CLE1BQU1vQixRQUF2QixFQUFnQ2IsS0FBS2EsUUFBckMsQ0ExQ0w7O0FBQUEsa0JBMkNKSCxPQTNDSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREE0Q0F0QixJQUFJTyxNQUFKLENBQVdhLDZCQUFYLEVBQXlCWCxJQUF6QixDQUE4QixFQUFDWSxLQUFJLG9CQUFMLEVBQTlCLENBNUNBOztBQUFBOztBQStDVDtBQUNNSyxtQkFoREcsR0FnREc3QixJQUFJOEIsSUFBSixDQUFTLEVBQUNDLElBQUdoQixLQUFLaUIsR0FBVCxFQUFULEVBQXVCQyx1QkFBVUMsTUFBakMsRUFBd0MsRUFBQ0MsV0FBVSxJQUFYLEVBQXhDLENBaERIO0FBQUEsZ0RBaURGaEMsSUFBSVMsSUFBSixDQUFTLEVBQUNJLFNBQVEsSUFBVCxFQUFjYSxZQUFkLEVBQVQsQ0FqREU7O0FBQUE7QUFBQTtBQUFBOztBQXFEVFgsc0JBQVFYLEtBQVI7QUFyRFMsZ0RBc0RGSixJQUFJTyxNQUFKLENBQVdTLHNDQUFYLEVBQWtDUCxJQUFsQyxjQXRERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBNERiO0FBQ013QixNQTdETztBQUFBLDBGQTZERmxDLEdBN0RFLEVBNkRFQyxHQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBOERKQSxJQUFJUyxJQUFKLENBQVNWLElBQUlhLElBQWIsQ0E5REk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBRF9SRVFVRVNULCBJTlRFUk5BTF9TRVJWRVJfRVJST1IsIFVOQVVUSE9SSVpFRCB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlci5tb2RlbCc7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAvL0ltcGxlbWVudHMgc2lnbiB1cCBmb3IgdXNlclxyXG4gIGFzeW5jIHNpZ251cChyZXEscmVzKXtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAvL1ZhbGlkYXRlIHRoZSByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vRW5jcnlwdCB0aGUgdXNlciBwYXNzd29yZFxyXG5cclxuICAgICAgLy9DcmVhdGUgbmV3IHVzZXJcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHtzdWNjZXNzOnRydWUsbWVzc2FnZTonVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseSd9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKElOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gIH0sXHJcblxyXG4gIC8vSW1wbGVtZW50cyBsb2dpbiBmb3IgdXNlclxyXG4gIGFzeW5jIGxvZ2luKHJlcSxyZXMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAvL1ZhbGlkYXRlIHRoZSByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXI9YXdhaXQgIFVzZXIuZmluZE9uZSh7ZW1haWw6dmFsdWUuZW1haWx9KTtcclxuICAgICAgaWYgKCF1c2VyKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhVTkFVVEhPUklaRUQpLmpzb24oe2VycjonSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCd9KVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY29uc3QgbWF0Y2hlZD1iY3J5cHRqcy5jb21wYXJlKHZhbHVlLnBhc3N3b3JkLHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICBpZiAoIW1hdGNoZWQpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFVOQVVUSE9SSVpFRCkuanNvbih7ZXJyOidJbnZhbGlkIENyZWRlbnRpYWwnfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9KV1QgVE9LRU5cclxuICAgICAgY29uc3QgdG9rZW49and0LnNpZ24oe2lkOnVzZXIuX2lkfSxkZXZDb25maWcuc2VjcmV0LHtleHBpcmVzSW46JzFkJ30pO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oe3N1Y2Nlc3M6dHJ1ZSx0b2tlbn0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcblxyXG5cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvL1Rlc3RpbmcgRW5kcG9pbnRcclxuICBhc3luYyB0ZXN0KHJlcSxyZXMpe1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcclxuICB9XHJcbn0iXX0=