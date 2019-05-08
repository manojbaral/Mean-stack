'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateCreateSchema: function validateCreateSchema(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required(),
      phoneNumber: _joi2.default.string().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateUpdateSchema: function validateUpdateSchema(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().optional(),
      lastName: _joi2.default.string().optional(),
      email: _joi2.default.string().email().optional(),
      phoneNumber: _joi2.default.string().optional()

    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUNyZWF0ZVNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3ROYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwidmFsaWRhdGVVcGRhdGVTY2hlbWEiLCJvcHRpb25hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFDZTtBQUNiQSxzQkFEYSxnQ0FDUUMsSUFEUixFQUNjO0FBQ3pCLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQkMsaUJBQVdILGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQURvQjtBQUUvQkMsZ0JBQVVOLGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZxQjtBQUcvQkUsYUFBT1AsY0FBSUksTUFBSixHQUNKRyxLQURJLEdBRUpGLFFBRkksRUFId0I7QUFNL0JHLG1CQUFZUixjQUFJSSxNQUFKLEdBQWFDLFFBQWI7QUFObUIsS0FBbEIsQ0FBZjs7QUFEeUIsd0JBU0FMLGNBQUlTLFFBQUosQ0FBYVgsSUFBYixFQUFtQkMsTUFBbkIsQ0FUQTtBQUFBLFFBU2pCVyxLQVRpQixpQkFTakJBLEtBVGlCO0FBQUEsUUFTVkMsS0FUVSxpQkFTVkEsS0FUVTs7QUFVekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0QsR0FmWTtBQWdCYkUsc0JBaEJhLGdDQWdCUWYsSUFoQlIsRUFnQmM7QUFDekIsUUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CQyxpQkFBV0gsY0FBSUksTUFBSixHQUFhVSxRQUFiLEVBRG9CO0FBRS9CUixnQkFBVU4sY0FBSUksTUFBSixHQUFhVSxRQUFiLEVBRnFCO0FBRy9CUCxhQUFPUCxjQUFJSSxNQUFKLEdBQ0pHLEtBREksR0FFSk8sUUFGSSxFQUh3QjtBQU0vQk4sbUJBQVlSLGNBQUlJLE1BQUosR0FBYVUsUUFBYjs7QUFObUIsS0FBbEIsQ0FBZjs7QUFEeUIseUJBVUFkLGNBQUlTLFFBQUosQ0FBYVgsSUFBYixFQUFtQkMsTUFBbkIsQ0FWQTtBQUFBLFFBVWpCVyxLQVZpQixrQkFVakJBLEtBVmlCO0FBQUEsUUFVVkMsS0FWVSxrQkFVVkEsS0FWVTs7QUFXekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0Q7QUEvQlksQyIsImZpbGUiOiJjbGllbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZhbGlkYXRlQ3JlYXRlU2NoZW1hKGJvZHkpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXHJcbiAgICAgICAgLmVtYWlsKClcclxuICAgICAgICAucmVxdWlyZWQoKSxcclxuICAgICAgcGhvbmVOdW1iZXI6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gIH0sXHJcbiAgdmFsaWRhdGVVcGRhdGVTY2hlbWEoYm9keSkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBmaXJzdE5hbWU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBsYXN0TmFtZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAuZW1haWwoKVxyXG4gICAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgICBwaG9uZU51bWJlcjpKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gIH0sXHJcbn07Il19