"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _invoice = require("./resources/invoice");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _client = require("./resources/client");

var _user = require("./resources/user/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();

//Invoice Router
restRouter.use('/invoices', _invoice.invoiceRouter);

//Client Router
restRouter.use('/clients', _client.clientRouter);

//uSER rOUTER
restRouter.use('/users', _user.userRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlclJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxrQ0FBV0Msa0JBQVFDLE1BQVIsRUFBakI7O0FBRVA7QUFDQUYsV0FBV0csR0FBWCxDQUFlLFdBQWYsRUFBMkJDLHNCQUEzQjs7QUFFQTtBQUNBSixXQUFXRyxHQUFYLENBQWUsVUFBZixFQUEwQkUsb0JBQTFCOztBQUVBO0FBQ0FMLFdBQVdHLEdBQVgsQ0FBZSxRQUFmLEVBQXdCRyxnQkFBeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnZvaWNlUm91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2ludm9pY2VcIjtcclxuaW1wb3J0ICBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IGNsaWVudFJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlclJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy91c2VyL3VzZXIucm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzdFJvdXRlcj1leHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy9JbnZvaWNlIFJvdXRlclxyXG5yZXN0Um91dGVyLnVzZSgnL2ludm9pY2VzJyxpbnZvaWNlUm91dGVyKTtcclxuXHJcbi8vQ2xpZW50IFJvdXRlclxyXG5yZXN0Um91dGVyLnVzZSgnL2NsaWVudHMnLGNsaWVudFJvdXRlcik7XHJcblxyXG4vL3VTRVIgck9VVEVSXHJcbnJlc3RSb3V0ZXIudXNlKCcvdXNlcnMnLHVzZXJSb3V0ZXIpOyJdfQ==