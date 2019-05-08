"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("../models/invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _httpStatusCodes = require("http-status-codes");

var HttpStatus = _interopRequireWildcard(_httpStatusCodes);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findAll: function findAll(req, res, next) {
    _invoice2.default.find().then(function (invoices) {
      return res.json(invoices);
    }).catch(function (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  },


  //create new field
  create: function create(req, res, next) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      qty: _joi2.default.number().integer().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    //Validate Joi

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }

    _invoice2.default.create(value).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  },


  //Find record by ID
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _invoice2.default.findById(id).then(function (invoice) {
      if (!invoice) {
        return res.status(HttpStatus.NOT_FOUND).json({ err: "Could not find any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  },


  //Delete Record
  delete: function _delete(req, res) {
    var id = req.params.id;

    _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
      if (!invoice) {
        return res.status(HttpStatus.NOT_FOUND).json({ err: "Could not delete any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  },


  //Update record
  update: function update(req, res) {
    var id = req.params.id;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      qty: _joi2.default.number().integer().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate2 = _joi2.default.validate(req.body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    _invoice2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBTdGF0dXMiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsIkludm9pY2UiLCJmaW5kIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsIml0ZW0iLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwidGF4Iiwib3B0aW9uYWwiLCJyYXRlIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJCQURfUkVRVUVTVCIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsVTs7QUFDWjs7Ozs7Ozs7a0JBRWU7QUFDYkMsU0FEYSxtQkFDTEMsR0FESyxFQUNBQyxHQURBLEVBQ0tDLElBREwsRUFDVztBQUN0QkMsc0JBQVFDLElBQVIsR0FDR0MsSUFESCxDQUNRO0FBQUEsYUFBWUosSUFBSUssSUFBSixDQUFTQyxRQUFULENBQVo7QUFBQSxLQURSLEVBRUdDLEtBRkgsQ0FFUztBQUFBLGFBQU9QLElBQUlRLE1BQUosQ0FBV1gsV0FBV1kscUJBQXRCLEVBQTZDSixJQUE3QyxDQUFrREssR0FBbEQsQ0FBUDtBQUFBLEtBRlQ7QUFHRCxHQUxZOzs7QUFPYjtBQUNBQyxRQVJhLGtCQVFOWixHQVJNLEVBUURDLEdBUkMsRUFRSUMsSUFSSixFQVFVO0FBQ3JCLFFBQU1X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LEdBQWFRLFFBQWIsRUFEeUI7QUFFL0JOLFlBQU1OLGNBQUlNLElBQUosR0FBV00sUUFBWCxFQUZ5QjtBQUcvQkwsV0FBS1AsY0FBSU0sSUFBSixHQUFXTSxRQUFYLEVBSDBCO0FBSS9CSixXQUFLUixjQUFJUyxNQUFKLEdBQ0ZDLE9BREUsR0FFRkUsUUFGRSxFQUowQjtBQU8vQkQsV0FBS1gsY0FBSVMsTUFBSixHQUFhRyxRQUFiLEVBUDBCO0FBUS9CQyxZQUFNYixjQUFJUyxNQUFKLEdBQWFHLFFBQWI7QUFSeUIsS0FBbEIsQ0FBZjs7QUFGZSx5QkFZVVosY0FBSWMsUUFBSixDQUFhNUIsSUFBSTZCLElBQWpCLEVBQXVCaEIsTUFBdkIsQ0FaVjtBQUFBLFFBWVBpQixLQVpPLGtCQVlQQSxLQVpPO0FBQUEsUUFZQUMsS0FaQSxrQkFZQUEsS0FaQTs7QUFhZixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPL0IsSUFBSVEsTUFBSixDQUFXWCxXQUFXbUMsV0FBdEIsRUFBbUMzQixJQUFuQyxDQUF3Q3dCLEtBQXhDLENBQVA7QUFDRDtBQUNEM0Isc0JBQVF3QyxnQkFBUixDQUF5QixFQUFFQyxLQUFLUixFQUFQLEVBQXpCLEVBQXNDTCxLQUF0QyxFQUE2QyxFQUFFYyxLQUFLLElBQVAsRUFBN0MsRUFDR3hDLElBREgsQ0FDUTtBQUFBLGFBQVdKLElBQUlLLElBQUosQ0FBUzRCLE9BQVQsQ0FBWDtBQUFBLEtBRFIsRUFFRzFCLEtBRkgsQ0FFUztBQUFBLGFBQU9QLElBQUlRLE1BQUosQ0FBV1gsV0FBV1kscUJBQXRCLEVBQTZDSixJQUE3QyxDQUFrREssR0FBbEQsQ0FBUDtBQUFBLEtBRlQ7QUFHRDtBQWpGWSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlIGZyb20gXCIuLi9tb2RlbHMvaW52b2ljZS5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBJbnZvaWNlLmZpbmQoKVxyXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiByZXMuanNvbihpbnZvaWNlcykpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG5cclxuICAvL2NyZWF0ZSBuZXcgZmllbGRcclxuICBjcmVhdGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vVmFsaWRhdGUgSm9pXHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4gcmVzLmpzb24oaW52b2ljZSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG5cclxuICAvL0ZpbmQgcmVjb3JkIGJ5IElEXHJcbiAgZmluZE9uZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgZmluZCBhbnkgaW52b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG5cclxuICAvL0RlbGV0ZSBSZWNvcmRcclxuICBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiQ291bGQgbm90IGRlbGV0ZSBhbnkgaW52b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG5cclxuICAvL1VwZGF0ZSByZWNvcmRcclxuICB1cGRhdGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICBxdHk6IEpvaS5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKClcclxuICAgICAgICAub3B0aW9uYWwoKSxcclxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgcmF0ZTogSm9pLm51bWJlcigpLm9wdGlvbmFsKClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShyZXEuYm9keSwgc2NoZW1hKTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiByZXMuanNvbihpbnZvaWNlKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH1cclxufTtcclxuIl19