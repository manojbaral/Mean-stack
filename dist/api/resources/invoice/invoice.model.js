'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

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
  },

  //relation between two models
  client: {
    ref: 'Client',
    type: Schema.Types.ObjectId,
    required: true
  }
});
InvoiceSchema.plugin(_mongoosePaginate2.default);

exports.default = _mongoose2.default.model('InvoiceSchema', InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwiY2xpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsZ0JBQWdCLElBQUlGLE1BQUosQ0FBVztBQUMvQkcsUUFBTTtBQUNKQyxVQUFNQyxNQURGO0FBRUpDLGNBQVU7QUFGTixHQUR5QjtBQUsvQkMsT0FBSztBQUNISCxVQUFNSSxNQURIO0FBRURGLGNBQVM7QUFGUixHQUwwQjtBQVMvQkcsUUFBTTtBQUNKTCxVQUFNTSxJQURGO0FBRUZKLGNBQVM7QUFGUCxHQVR5QjtBQWE3QkssT0FBSTtBQUNGUCxVQUFLTSxJQURIO0FBRUFKLGNBQVM7QUFGVCxHQWJ5QjtBQWlCN0JNLFFBQUs7QUFDSFIsVUFBS0k7QUFERixHQWpCd0I7QUFvQjdCSyxPQUFJO0FBQ0ZULFVBQUtJO0FBREgsR0FwQnlCOztBQXdCL0I7QUFDQU0sVUFBTztBQUNMQyxTQUFJLFFBREM7QUFFTFgsVUFBS0osT0FBT2dCLEtBQVAsQ0FBYUMsUUFGYjtBQUdMWCxjQUFTO0FBSEo7QUF6QndCLENBQVgsQ0FBdEI7QUErQkFKLGNBQWNnQixNQUFkLENBQXFCQywwQkFBckI7O2tCQUVlbEIsbUJBQVNtQixLQUFULENBQWUsZUFBZixFQUErQmxCLGFBQS9CLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBtb25nb29zZVBhZ2luYXRlIGZyb20gJ21vbmdvb3NlLXBhZ2luYXRlJ1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IEludm9pY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBpdGVtOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgcXR5OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgICByZXF1aXJlZDp0cnVlLFxyXG4gIH0sXHJcbiAgICBkdWU6e1xyXG4gICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgIH0sXHJcbiAgICByYXRlOntcclxuICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICB9LFxyXG4gICAgdGF4OntcclxuICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICB9LFxyXG5cclxuICAvL3JlbGF0aW9uIGJldHdlZW4gdHdvIG1vZGVsc1xyXG4gIGNsaWVudDp7XHJcbiAgICByZWY6J0NsaWVudCcsXHJcbiAgICB0eXBlOlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgfVxyXG59KTtcclxuSW52b2ljZVNjaGVtYS5wbHVnaW4obW9uZ29vc2VQYWdpbmF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnSW52b2ljZVNjaGVtYScsSW52b2ljZVNjaGVtYSlcclxuXHJcblxyXG4iXX0=