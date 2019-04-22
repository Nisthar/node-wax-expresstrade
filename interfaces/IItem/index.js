"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ETInterface = require('../ETInterface');

var IItem =
/*#__PURE__*/
function (_ETInterface) {
  _inherits(IItem, _ETInterface);

  function IItem() {
    _classCallCheck(this, IItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(IItem).apply(this, arguments));
  }

  _createClass(IItem, [{
    key: "GetAllItems",
    value: function () {
      var _GetAllItems = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var appId, sku, name, page, perPage, sort, noExclusions, url, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                appId = _ref.appId, sku = _ref.sku, name = _ref.name, page = _ref.page, perPage = _ref.perPage, sort = _ref.sort, noExclusions = _ref.noExclusions;

                if (!(appId === undefined)) {
                  _context.next = 3;
                  break;
                }

                throw new Error('appId not specified!');

              case 3:
                url = this.getUrl() + 'GetAllItems/v1';
                _context.next = 6;
                return this.request.get({
                  url: url,
                  qs: {
                    app_id: appId,
                    sku: sku ? sku.toString() : undefined,
                    name: name,
                    page: page,
                    per_page: perPage,
                    sort: sort,
                    no_exclusions: noExclusions
                  }
                });

              case 6:
                res = _context.sent;

                if (res.response) {
                  _context.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                res.response.current_page = res.current_page;
                res.response.total_pages = res.total_pages;
                return _context.abrupt("return", res.response);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetAllItems(_x) {
        return _GetAllItems.apply(this, arguments);
      }

      return GetAllItems;
    }()
  }, {
    key: "GetItemsById",
    value: function () {
      var _GetItemsById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_ref2) {
        var itemId, url, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                itemId = _ref2.itemId;

                if (!(itemId === undefined)) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('itemId not specified!');

              case 3:
                url = this.getUrl() + 'GetItemsById/v1';
                _context2.next = 6;
                return this.request.get({
                  url: url,
                  qs: {
                    item_id: itemId.toString()
                  }
                });

              case 6:
                res = _context2.sent;

                if (res.response) {
                  _context2.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                return _context2.abrupt("return", res.response);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetItemsById(_x2) {
        return _GetItemsById.apply(this, arguments);
      }

      return GetItemsById;
    }()
  }, {
    key: "WithdrawToOpskins",
    value: function () {
      var _WithdrawToOpskins = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(_ref3) {
        var itemId, url, form, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                itemId = _ref3.itemId;

                if (!(itemId === undefined)) {
                  _context3.next = 3;
                  break;
                }

                throw new Error('itemId not specified!');

              case 3:
                url = this.getUrl() + 'WithdrawToOpskins/v1';
                form = {
                  item_id: itemId.toString()
                };
                _context3.next = 7;
                return this.request.post({
                  url: url,
                  form: form
                });

              case 7:
                res = _context3.sent;

                if (res.response) {
                  _context3.next = 10;
                  break;
                }

                throw new Error(res.message);

              case 10:
                return _context3.abrupt("return", res.response);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function WithdrawToOpskins(_x3) {
        return _WithdrawToOpskins.apply(this, arguments);
      }

      return WithdrawToOpskins;
    }()
  }, {
    key: "GetItems",
    value: function GetItems() {
      throw new Error('GetItems is deprecated. Please use GetItemDefinitions instead.');
    }
  }, {
    key: "GetItemDefinitions",
    value: function () {
      var _GetItemDefinitions = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(_ref4) {
        var appId, defIdFilter, indexBy, page, perPage, url, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                appId = _ref4.appId, defIdFilter = _ref4.defIdFilter, indexBy = _ref4.indexBy, page = _ref4.page, perPage = _ref4.perPage;

                if (!(appId === undefined)) {
                  _context4.next = 3;
                  break;
                }

                throw new Error('appId not specified!');

              case 3:
                url = this.getUrl() + 'GetItemDefinitions/v1';
                _context4.next = 6;
                return this.request.get({
                  url: url,
                  qs: {
                    app_id: appId,
                    def_id_filter: defIdFilter ? defIdFilter.toString() : undefined,
                    index_by: indexBy,
                    page: page,
                    per_page: perPage
                  }
                });

              case 6:
                res = _context4.sent;

                if (res.response) {
                  _context4.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                res.response.current_page = res.current_page;
                res.response.total_pages = res.total_pages;
                return _context4.abrupt("return", res.response);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetItemDefinitions(_x4) {
        return _GetItemDefinitions.apply(this, arguments);
      }

      return GetItemDefinitions;
    }()
  }, {
    key: "GetRarityStats",
    value: function () {
      var _GetRarityStats = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(_ref5) {
        var appId, defId, url, res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                appId = _ref5.appId, defId = _ref5.defId;

                if (!(appId === undefined)) {
                  _context5.next = 3;
                  break;
                }

                throw new Error('appId not specified!');

              case 3:
                url = this.getUrl() + 'GetRarityStats/v1';
                _context5.next = 6;
                return this.request.get({
                  url: url,
                  qs: {
                    app_id: appId,
                    def_id: defId ? defId.toString() : undefined
                  }
                });

              case 6:
                res = _context5.sent;

                if (res.response) {
                  _context5.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                return _context5.abrupt("return", res.response.items);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function GetRarityStats(_x5) {
        return _GetRarityStats.apply(this, arguments);
      }

      return GetRarityStats;
    }()
  }, {
    key: "InstantSellRecentItems",
    value: function () {
      var _InstantSellRecentItems = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(_ref6) {
        var itemId, _ref6$instantSellType, instantSellType, url, form, res;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                itemId = _ref6.itemId, _ref6$instantSellType = _ref6.instantSellType, instantSellType = _ref6$instantSellType === void 0 ? 2 : _ref6$instantSellType;

                if (!(itemId === undefined)) {
                  _context6.next = 3;
                  break;
                }

                throw new Error('itemId not specified!');

              case 3:
                url = this.getUrl() + 'WithdrawToOpskins/v1';
                form = {
                  item_id: itemId.toString(),
                  instant_sell_type: instantSellType
                };
                _context6.next = 7;
                return this.request.post({
                  url: url,
                  form: form
                });

              case 7:
                res = _context6.sent;

                if (res.response) {
                  _context6.next = 10;
                  break;
                }

                throw new Error(res.message);

              case 10:
                return _context6.abrupt("return", res.response);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function InstantSellRecentItems(_x6) {
        return _InstantSellRecentItems.apply(this, arguments);
      }

      return InstantSellRecentItems;
    }()
  }, {
    key: "getUrl",
    value: function getUrl() {
      return 'IItem/';
    }
  }]);

  return IItem;
}(ETInterface);

module.exports = IItem;
