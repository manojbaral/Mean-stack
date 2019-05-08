"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var HttpStatus = _interopRequireWildcard(_httpStatusCodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  findAll: function findAll(req, res, next) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === undefined ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
        filter = _req$query.filter,
        sortField = _req$query.sortField,
        sortDir = _req$query.sortDir;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: 'client'
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortField && sortDir) {
      options.sort = _defineProperty({}, sortField, sortDir);
    }
    console.log(options);
    _invoice2.default.paginate(query, options).then(function (invoices) {
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
      client: _joi2.default.string().required(),
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
      rate: _joi2.default.number().optional(),
      client: _joi2.default.string().optional()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBTdGF0dXMiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsIml0ZW0iLCIkcmVnZXgiLCJzb3J0IiwiY29uc29sZSIsImxvZyIsIkludm9pY2UiLCJwYWdpbmF0ZSIsInRoZW4iLCJqc29uIiwiaW52b2ljZXMiLCJjYXRjaCIsInN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJjbGllbnQiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwidGF4Iiwib3B0aW9uYWwiLCJyYXRlIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJCQURfUkVRVUVTVCIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxVOzs7Ozs7OztrQkFFRztBQUNiQyxTQURhLG1CQUNMQyxHQURLLEVBQ0FDLEdBREEsRUFDS0MsSUFETCxFQUNXO0FBQUEscUJBQ3lDRixJQUFJRyxLQUQ3QztBQUFBLHFDQUNkQyxJQURjO0FBQUEsUUFDZEEsSUFEYyxtQ0FDUCxDQURPO0FBQUEsd0NBQ0pDLE9BREk7QUFBQSxRQUNKQSxPQURJLHNDQUNN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TUFBSixHQUNGQyxPQURFLEdBRUZFLFFBRkUsRUFKMEI7QUFPL0JELFdBQUtYLGNBQUlTLE1BQUosR0FBYUcsUUFBYixFQVAwQjtBQVEvQkMsWUFBTWIsY0FBSVMsTUFBSixHQUFhRyxRQUFiLEVBUnlCO0FBUy9CTCxjQUFPUCxjQUFJRyxNQUFKLEdBQWFTLFFBQWI7QUFUd0IsS0FBbEIsQ0FBZjs7QUFGZSx5QkFhVVosY0FBSWMsUUFBSixDQUFhM0MsSUFBSTRDLElBQWpCLEVBQXVCaEIsTUFBdkIsQ0FiVjtBQUFBLFFBYVBpQixLQWJPLGtCQWFQQSxLQWJPO0FBQUEsUUFhQUMsS0FiQSxrQkFhQUEsS0FiQTs7QUFjZixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPOUMsSUFBSXVCLE1BQUosQ0FBVzFCLFdBQVdrRCxXQUF0QixFQUFtQzNCLElBQW5DLENBQXdDd0IsS0FBeEMsQ0FBUDtBQUNEO0FBQ0QzQixzQkFBUXdDLGdCQUFSLENBQXlCLEVBQUVDLEtBQUtSLEVBQVAsRUFBekIsRUFBc0NMLEtBQXRDLEVBQTZDLEVBQUVjLEtBQUssSUFBUCxFQUE3QyxFQUNHeEMsSUFESCxDQUNRO0FBQUEsYUFBV25CLElBQUlvQixJQUFKLENBQVM0QixPQUFULENBQVg7QUFBQSxLQURSLEVBRUcxQixLQUZILENBRVM7QUFBQSxhQUFPdEIsSUFBSXVCLE1BQUosQ0FBVzFCLFdBQVcyQixxQkFBdEIsRUFBNkNKLElBQTdDLENBQWtESyxHQUFsRCxDQUFQO0FBQUEsS0FGVDtBQUdEO0FBckdZLEMiLCJmaWxlIjoiaW52b2ljZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludm9pY2UgZnJvbSBcIi4vaW52b2ljZS5tb2RlbFwiO1xyXG5pbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuaW1wb3J0ICogYXMgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICAgIHBvcHVsYXRlOidjbGllbnQnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge307XHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIHF1ZXJ5Lml0ZW0gPSB7XHJcbiAgICAgICAgJHJlZ2V4OiBmaWx0ZXIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoc29ydEZpZWxkICYmIHNvcnREaXIpIHtcclxuICAgICAgb3B0aW9ucy5zb3J0ID0ge1xyXG4gICAgICAgIFtzb3J0RmllbGRdOiBzb3J0RGlyLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICBJbnZvaWNlLnBhZ2luYXRlKHF1ZXJ5LCBvcHRpb25zKVxyXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiByZXMuanNvbihpbnZvaWNlcykpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG5cclxuICAvL2NyZWF0ZSBuZXcgZmllbGRcclxuICBjcmVhdGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIGNsaWVudDpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9WYWxpZGF0ZSBKb2lcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBJbnZvaWNlLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiByZXMuanNvbihpbnZvaWNlKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcblxyXG4gIC8vRmluZCByZWNvcmQgYnkgSURcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZChpZClcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkNvdWxkIG5vdCBmaW5kIGFueSBpbnZvaWNlXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcblxyXG4gIC8vRGVsZXRlIFJlY29yZFxyXG4gIGRlbGV0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgZGVsZXRlIGFueSBpbnZvaWNlXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcblxyXG4gIC8vVXBkYXRlIHJlY29yZFxyXG4gIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgY2xpZW50OkpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICB9XHJcbiAgICBJbnZvaWNlLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHZhbHVlLCB7IG5ldzogdHJ1ZSB9KVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHJlcy5qc29uKGludm9pY2UpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=