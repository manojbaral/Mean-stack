'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateSchema: function validateSchema(body) {
    var schema = _joi2.default.object().keys({
      // firstName: Joi.string().required(),
      // lastName: Joi.string().required(),
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUNlO0FBQ2JBLGdCQURhLDBCQUNFQyxJQURGLEVBQ1E7QUFDbkIsUUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CO0FBQ0E7QUFDQUMsYUFBT0gsY0FBSUksTUFBSixHQUNKRCxLQURJLEdBRUpFLFFBRkksRUFId0I7QUFNL0JDLGdCQUFVTixjQUFJSSxNQUFKLEdBQWFDLFFBQWI7QUFOcUIsS0FBbEIsQ0FBZjs7QUFEbUIsd0JBVU1MLGNBQUlPLFFBQUosQ0FBYVQsSUFBYixFQUFtQkMsTUFBbkIsQ0FWTjtBQUFBLFFBVVhTLEtBVlcsaUJBVVhBLEtBVlc7QUFBQSxRQVVKQyxLQVZJLGlCQVVKQSxLQVZJOztBQVduQixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPLEVBQUVGLFlBQUYsRUFBUDtBQUNEO0FBQ0QsV0FBTyxFQUFFQyxZQUFGLEVBQVA7QUFDRDtBQWhCWSxDIiwiZmlsZSI6InVzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZhbGlkYXRlU2NoZW1hKGJvZHkpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgLy8gZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgLy8gbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXHJcbiAgICAgICAgLmVtYWlsKClcclxuICAgICAgICAucmVxdWlyZWQoKSxcclxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHZhbHVlIH07XHJcbiAgfSxcclxufTsiXX0=