"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpStatusCodes = require("http-status-codes");

var _client = require("./client.service");

var _client2 = _interopRequireDefault(_client);

var _client3 = require("./client.model");

var _client4 = _interopRequireDefault(_client3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  //create Client
  create: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _clientService$valida, value, error, client;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _clientService$valida = _client2.default.validateCreateSchema(req.body), value = _clientService$valida.value, error = _clientService$valida.error;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context.next = 6;
              return _client4.default.create(value);

            case 6:
              client = _context.sent;
              return _context.abrupt("return", res.json(value));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),


  //Find all clients
  findAll: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var client;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _client4.default.find();

            case 3:
              client = _context2.sent;
              return _context2.abrupt("return", res.json(client));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function findAll(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return findAll;
  }(),


  //Find Single Client
  findOne: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var client;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _client4.default.findById(req.params.id);

            case 3:
              client = _context3.sent;

              if (client) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(_httpStatusCodes.NOT_FOUND).json({ err: 'client not found' }));

            case 6:
              return _context3.abrupt("return", res.json(client));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context3.t0));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 9]]);
    }));

    function findOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),


  //   //Delete Client
  delete: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var client;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _client4.default.findOneAndRemove({ _id: req.params.id });

            case 3:
              client = _context4.sent;

              if (client) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(_httpStatusCodes.NOT_FOUND).json({ err: "could not delete client" }));

            case 6:
              return _context4.abrupt("return", res.json(client));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context4.t0));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 9]]);
    }));

    function _delete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return _delete;
  }(),

  //Update Client
  update: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var _clientService$valida2, value, error, client;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _clientService$valida2 = _client2.default.validateUpdateSchema(req.body), value = _clientService$valida2.value, error = _clientService$valida2.error;

              if (!(error && error.details)) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context5.next = 6;
              return _client4.default.findOneAndUpdate({ _id: req.params.id }, value, { new: true });

            case 6:
              client = _context5.sent;
              return _context5.abrupt("return", res.json(client));

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context5.t0));

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 10]]);
    }));

    function update(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return update;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjbGllbnRTZXJ2aWNlIiwidmFsaWRhdGVDcmVhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJCQURfUkVRVUVTVCIsImpzb24iLCJDbGllbnQiLCJjbGllbnQiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJmaW5kQWxsIiwiZmluZCIsImZpbmRPbmUiLCJmaW5kQnlJZCIsInBhcmFtcyIsImlkIiwiTk9UX0ZPVU5EIiwiZXJyIiwiZGVsZXRlIiwiZmluZE9uZUFuZFJlbW92ZSIsIl9pZCIsInVwZGF0ZSIsInZhbGlkYXRlVXBkYXRlU2NoZW1hIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDZjtBQUNRQSxRQUZPO0FBQUEsd0ZBRUFDLEdBRkEsRUFFS0MsR0FGTDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FJY0MsaUJBQWNDLG9CQUFkLENBQW1DSCxJQUFJSSxJQUF2QyxDQUpkLEVBSUhDLEtBSkcseUJBSUhBLEtBSkcsRUFJSUMsS0FKSix5QkFJSUEsS0FKSjs7QUFBQSxvQkFLUEEsU0FBU0EsTUFBTUMsT0FMUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FNRk4sSUFBSU8sTUFBSixDQUFXQyw0QkFBWCxFQUF3QkMsSUFBeEIsQ0FBNkJKLEtBQTdCLENBTkU7O0FBQUE7QUFBQTtBQUFBLHFCQVFVSyxpQkFBT1osTUFBUCxDQUFjTSxLQUFkLENBUlY7O0FBQUE7QUFRTE8sb0JBUks7QUFBQSwrQ0FTSlgsSUFBSVMsSUFBSixDQUFTTCxLQUFULENBVEk7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBV0hKLElBQUlPLE1BQUos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RUFIbUIsQ0F6RFo7O0FBQUE7QUF5REhoQixvQkF6REc7QUFBQSxnREE4REZYLElBQUlTLElBQUosQ0FBU0UsTUFBVCxDQTlERTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFnRUZYLElBQUlPLE1BQUosQ0FBV0ssc0NBQVgsRUFBa0NILElBQWxDLGNBaEVFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJjbGllbnQuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBRF9SRVFVRVNULCBJTlRFUk5BTF9TRVJWRVJfRVJST1IsIE5PVF9GT1VORCB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgY2xpZW50U2VydmljZSBmcm9tIFwiLi9jbGllbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY2xpZW50Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuLy9jcmVhdGUgQ2xpZW50XHJcbiAgYXN5bmMgY3JlYXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IGNsaWVudFNlcnZpY2UudmFsaWRhdGVDcmVhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNyZWF0ZSh2YWx1ZSk7XHJcbiAgICByZXR1cm4gcmVzLmpzb24odmFsdWUpO1xyXG4gICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgIHJldHVybiByZXMuc3RhdHVzKElOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gICAgfSxcclxuXHJcbiAgLy9GaW5kIGFsbCBjbGllbnRzXHJcbiAgYXN5bmMgZmluZEFsbChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmZpbmQoKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy9GaW5kIFNpbmdsZSBDbGllbnRcclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWQocmVxLnBhcmFtcy5pZCk7XHJcbiAgICAgIGlmICghY2xpZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiAnY2xpZW50IG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbi8vICAgLy9EZWxldGUgQ2xpZW50XHJcbiAgYXN5bmMgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kT25lQW5kUmVtb3ZlKHsgX2lkOiByZXEucGFyYW1zLmlkIH0pO1xyXG4gICAgaWYgKCFjbGllbnQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoTk9UX0ZPVU5EKS5qc29uKHsgZXJyOiBcImNvdWxkIG5vdCBkZWxldGUgY2xpZW50XCIgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLmpzb24oY2xpZW50KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKElOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gIH1cclxufSxcclxuIC8vVXBkYXRlIENsaWVudFxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IGNsaWVudFNlcnZpY2UudmFsaWRhdGVVcGRhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IF9pZDogcmVxLnBhcmFtcy5pZCB9LFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHsgbmV3OiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=