'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});

exports.default = _mongoose2.default.model('InvoiceSchema', InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJJbnZvaWNlU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwiZHVlIiwicmF0ZSIsInRheCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsZ0JBQWdCLElBQUlGLE1BQUosQ0FBVztBQUMvQkcsUUFBTTtBQUNKQyxVQUFNQyxNQURGO0FBRUpDLGNBQVU7QUFGTixHQUR5QjtBQUsvQkMsT0FBSztBQUNISCxVQUFNSSxNQURIO0FBRURGLGNBQVM7QUFGUixHQUwwQjtBQVMvQkcsUUFBTTtBQUNKTCxVQUFNTSxJQURGO0FBRUZKLGNBQVM7QUFGUCxHQVR5QjtBQWE3QkssT0FBSTtBQUNGUCxVQUFLTSxJQURIO0FBRUFKLGNBQVM7QUFGVCxHQWJ5QjtBQWlCN0JNLFFBQUs7QUFDSFIsVUFBS0k7QUFERixHQWpCd0I7QUFvQjdCSyxPQUFJO0FBQ0ZULFVBQUtJO0FBREg7QUFwQnlCLENBQVgsQ0FBdEI7O2tCQXlCZVAsbUJBQVNhLEtBQVQsQ0FBZSxlQUFmLEVBQStCWixhQUEvQixDIiwiZmlsZSI6Imludm9pY2UubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IEludm9pY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBpdGVtOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcXR5OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgICByZXF1aXJlZDp0cnVlLFxyXG4gIH0sXHJcbiAgICBkdWU6e1xyXG4gICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgIH0sXHJcbiAgICByYXRlOntcclxuICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICB9LFxyXG4gICAgdGF4OntcclxuICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdJbnZvaWNlU2NoZW1hJyxJbnZvaWNlU2NoZW1hKVxyXG5cclxuXHJcbiJdfQ==