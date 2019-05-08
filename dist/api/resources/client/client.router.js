'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _client = require('./client.controller');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientRouter = exports.clientRouter = _express2.default.Router();
clientRouter.route('/').post(_client2.default.create).get(_client2.default.findAll);

clientRouter.route('/:id').delete(_client2.default.delete).put(_client2.default.update).get(_client2.default.findOne);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQucm91dGVyLmpzIl0sIm5hbWVzIjpbImNsaWVudFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJjbGllbnRDb250cm9sbGVyIiwiY3JlYXRlIiwiZ2V0IiwiZmluZEFsbCIsImRlbGV0ZSIsInB1dCIsInVwZGF0ZSIsImZpbmRPbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxzQ0FBZUMsa0JBQVFDLE1BQVIsRUFBckI7QUFDUEYsYUFBYUcsS0FBYixDQUFtQixHQUFuQixFQUNHQyxJQURILENBQ1FDLGlCQUFpQkMsTUFEekIsRUFFR0MsR0FGSCxDQUVPRixpQkFBaUJHLE9BRnhCOztBQUlBUixhQUFhRyxLQUFiLENBQW1CLE1BQW5CLEVBQ0dNLE1BREgsQ0FDVUosaUJBQWlCSSxNQUQzQixFQUVHQyxHQUZILENBRU9MLGlCQUFpQk0sTUFGeEIsRUFHR0osR0FISCxDQUdPRixpQkFBaUJPLE9BSHhCIiwiZmlsZSI6ImNsaWVudC5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNsaWVudENvbnRyb2xsZXIgZnJvbSAnLi9jbGllbnQuY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuY2xpZW50Um91dGVyLnJvdXRlKCcvJylcclxuICAucG9zdChjbGllbnRDb250cm9sbGVyLmNyZWF0ZSlcclxuICAuZ2V0KGNsaWVudENvbnRyb2xsZXIuZmluZEFsbCk7XHJcblxyXG5jbGllbnRSb3V0ZXIucm91dGUoJy86aWQnKVxyXG4gIC5kZWxldGUoY2xpZW50Q29udHJvbGxlci5kZWxldGUpXHJcbiAgLnB1dChjbGllbnRDb250cm9sbGVyLnVwZGF0ZSlcclxuICAuZ2V0KGNsaWVudENvbnRyb2xsZXIuZmluZE9uZSk7Il19