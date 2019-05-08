"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});
exports.default = _mongoose2.default.model("Client", ClientSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJDbGllbnRTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLG1CQUFTRCxNQUF4QjtBQUNBLElBQU1FLGVBQWUsSUFBSUYsTUFBSixDQUFXO0FBQzlCRyxhQUFXO0FBQ1RDLFVBQU1DLE1BREc7QUFFVEMsY0FBVTtBQUZELEdBRG1CO0FBSzlCQyxZQUFVO0FBQ1JILFVBQU1DLE1BREU7QUFFUkMsY0FBVTtBQUZGLEdBTG9CO0FBUzlCRSxTQUFPO0FBQ0xKLFVBQU1DLE1BREQ7QUFFTEMsY0FBVTtBQUZMLEdBVHVCO0FBYTlCRyxlQUFZO0FBQ1ZMLFVBQUtDLE1BREs7QUFFVkMsY0FBUztBQUZDO0FBYmtCLENBQVgsQ0FBckI7a0JBa0JlTCxtQkFBU1MsS0FBVCxDQUFlLFFBQWYsRUFBeUJSLFlBQXpCLEMiLCJmaWxlIjoiY2xpZW50Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCBDbGllbnRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBmaXJzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBsYXN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcGhvbmVOdW1iZXI6e1xyXG4gICAgdHlwZTpTdHJpbmcsXHJcbiAgICByZXF1aXJlZDp0cnVlXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiQ2xpZW50XCIsIENsaWVudFNjaGVtYSk7XHJcbiJdfQ==