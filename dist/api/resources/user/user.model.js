'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({

  // firstName:{
  //   type:String,
  //   required:true
  // },
  //
  // lastName:{
  //   type:String,
  //   required:true
  // },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.pre('save', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var salt, hash;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.isModified('password') || this.isNew)) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return _bcryptjs2.default.genSalt();

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return _bcryptjs2.default.hash(this.password, salt);

        case 6:
          hash = _context.sent;

          this.password = hash;

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
})));
exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwiaXNNb2RpZmllZCIsImlzTmV3IiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGFBQWEsSUFBSUYsTUFBSixDQUFXOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUcsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLGNBQVUsSUFGTDtBQUdMQyxlQUFXLElBSE47QUFJTEMsWUFBUTtBQUpILEdBWHFCO0FBaUI1QkMsWUFBVTtBQUNSTCxVQUFNQyxNQURFO0FBRVJDLGNBQVU7QUFGRjtBQWpCa0IsQ0FBWCxDQUFuQjtBQXNCQUosV0FBV1EsR0FBWCxDQUFlLE1BQWYsMERBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVqQixLQUFLQyxVQUFMLENBQWdCLFVBQWhCLEtBQStCLEtBQUtDLEtBRm5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBR0FDLG1CQUFTQyxPQUFULEVBSEE7O0FBQUE7QUFHYkMsY0FIYTtBQUFBO0FBQUEsaUJBSUFGLG1CQUFTRyxJQUFULENBQWMsS0FBS1AsUUFBbkIsRUFBNkJNLElBQTdCLENBSkE7O0FBQUE7QUFJYkMsY0FKYTs7QUFLbkIsZUFBS1AsUUFBTCxHQUFnQk8sSUFBaEI7O0FBTG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO2tCQVFlZixtQkFBU2dCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZixVQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblxyXG4gIC8vIGZpcnN0TmFtZTp7XHJcbiAgLy8gICB0eXBlOlN0cmluZyxcclxuICAvLyAgIHJlcXVpcmVkOnRydWVcclxuICAvLyB9LFxyXG4gIC8vXHJcbiAgLy8gbGFzdE5hbWU6e1xyXG4gIC8vICAgdHlwZTpTdHJpbmcsXHJcbiAgLy8gICByZXF1aXJlZDp0cnVlXHJcbiAgLy8gfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgLy8gaWYgdXNlciBpcyBtb2RpZmllZCBvciB1c2VyIGlzIG5ld1xyXG4gIGlmICh0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykgfHwgdGhpcy5pc05ldykge1xyXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoKTtcclxuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XHJcbiAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXX0=