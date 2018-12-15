'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ETInterface = require('../ETInterface');

var ITrade = function (_ETInterface) {
  _inherits(ITrade, _ETInterface);

  function ITrade() {
    _classCallCheck(this, ITrade);

    return _possibleConstructorReturn(this, (ITrade.__proto__ || Object.getPrototypeOf(ITrade)).apply(this, arguments));
  }

  _createClass(ITrade, [{
    key: 'AcceptOffer',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var offerId = _ref.offerId;
        var url, twofactor_code, form, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(offerId === undefined)) {
                  _context.next = 2;
                  break;
                }

                throw new Error('offerId not specified!');

              case 2:
                url = this.getUrl() + 'AcceptOffer/v1';
                twofactor_code = this.generateToken();
                form = { twofactor_code: twofactor_code, offer_id: offerId };
                _context.next = 7;
                return this.request.post({ url: url, form: form });

              case 7:
                res = _context.sent;

                if (res.response) {
                  _context.next = 10;
                  break;
                }

                throw new Error(res.message);

              case 10:
                return _context.abrupt('return', res.response);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function AcceptOffer(_x) {
        return _ref2.apply(this, arguments);
      }

      return AcceptOffer;
    }()
  }, {
    key: 'CancelOffer',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var offerId = _ref3.offerId;
        var url, form, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(offerId === undefined)) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('offerId not specified!');

              case 2:
                url = this.getUrl() + 'CancelOffer/v1';
                form = { offer_id: offerId };
                _context2.next = 6;
                return this.request.post({ url: url, form: form });

              case 6:
                res = _context2.sent;

                if (res.response) {
                  _context2.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                return _context2.abrupt('return', res.response.offer);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function CancelOffer(_x2) {
        return _ref4.apply(this, arguments);
      }

      return CancelOffer;
    }()
  }, {
    key: 'GetApps',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _objectDestructuringEmpty(_ref5);

                url = this.getUrl() + 'GetApps/v1';
                _context3.next = 4;
                return this.request.get({ url: url });

              case 4:
                res = _context3.sent;

                if (res.response) {
                  _context3.next = 7;
                  break;
                }

                throw new Error(res.message);

              case 7:
                return _context3.abrupt('return', res.response.apps);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetApps(_x3) {
        return _ref6.apply(this, arguments);
      }

      return GetApps;
    }()
  }, {
    key: 'GetOffer',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
        var offerId = _ref7.offerId;
        var url, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(offerId === undefined)) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('offerId not specified!');

              case 2:
                url = this.getUrl() + 'GetOffer/v1';
                _context4.next = 5;
                return this.request.get({ url: url, qs: { offer_id: offerId } });

              case 5:
                res = _context4.sent;

                if (res.response) {
                  _context4.next = 8;
                  break;
                }

                throw new Error(res.message);

              case 8:
                return _context4.abrupt('return', res.response.offer);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GetOffer(_x4) {
        return _ref8.apply(this, arguments);
      }

      return GetOffer;
    }()
  }, {
    key: 'GetOffers',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
        var uid = _ref9.uid,
            state = _ref9.state,
            type = _ref9.type,
            _ref9$page = _ref9.page,
            page = _ref9$page === undefined ? 1 : _ref9$page,
            _ref9$perPage = _ref9.perPage,
            perPage = _ref9$perPage === undefined ? 100 : _ref9$perPage,
            ids = _ref9.ids;
        var url, res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = this.getUrl() + 'GetOffers/v1';
                _context5.next = 3;
                return this.request.get({ url: url, qs: { uid: uid, state: state, type: type, page: page, per_page: perPage, ids: ids } });

              case 3:
                res = _context5.sent;

                if (res.response) {
                  _context5.next = 6;
                  break;
                }

                throw new Error(res.message);

              case 6:
                return _context5.abrupt('return', res.response);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function GetOffers(_x5) {
        return _ref10.apply(this, arguments);
      }

      return GetOffers;
    }()
  }, {
    key: 'GetTradeURL',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref11) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _objectDestructuringEmpty(_ref11);

                url = this.getUrl() + 'GetTradeURL/v1';
                _context6.next = 4;
                return this.request.get({ url: url });

              case 4:
                res = _context6.sent;

                if (res.response) {
                  _context6.next = 7;
                  break;
                }

                throw new Error(res.message);

              case 7:
                return _context6.abrupt('return', res.response);

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function GetTradeURL(_x6) {
        return _ref12.apply(this, arguments);
      }

      return GetTradeURL;
    }()
  }, {
    key: 'GetUserInventory',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref13) {
        var uid = _ref13.uid,
            appId = _ref13.appId,
            _ref13$page = _ref13.page,
            page = _ref13$page === undefined ? 1 : _ref13$page,
            perPage = _ref13.perPage,
            search = _ref13.search;
        var url, res;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(uid === undefined)) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('uid not specified!');

              case 2:
                if (!(appId === undefined)) {
                  _context7.next = 4;
                  break;
                }

                throw new Error('appId not specified!');

              case 4:
                url = this.getUrl() + 'GetUserInventory/v1';
                _context7.next = 7;
                return this.request.get({ url: url, qs: { uid: uid, app_id: appId, page: page, per_page: perPage, search: search } });

              case 7:
                res = _context7.sent;

                if (res.response) {
                  _context7.next = 10;
                  break;
                }

                throw new Error(res.message);

              case 10:

                res.response.total_pages = res.total_pages;
                res.response.current_page = res.current_page;

                return _context7.abrupt('return', res.response);

              case 13:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function GetUserInventory(_x7) {
        return _ref14.apply(this, arguments);
      }

      return GetUserInventory;
    }()
  }, {
    key: 'GetUserInventoryFromSteamId',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref15) {
        var steamId = _ref15.steamId,
            appId = _ref15.appId,
            _ref15$page = _ref15.page,
            page = _ref15$page === undefined ? 1 : _ref15$page,
            perPage = _ref15.perPage,
            search = _ref15.search;
        var url, res;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(steamId === undefined)) {
                  _context8.next = 2;
                  break;
                }

                throw new Error('steamId not specified!');

              case 2:
                if (!(appId === undefined)) {
                  _context8.next = 4;
                  break;
                }

                throw new Error('appId not specified!');

              case 4:
                url = this.getUrl() + 'GetUserInventoryFromSteamId/v1';
                _context8.next = 7;
                return this.request.get({ url: url, qs: { steam_id: steamId, app_id: appId, page: page, per_page: perPage, search: search } });

              case 7:
                res = _context8.sent;

                if (res.response) {
                  _context8.next = 10;
                  break;
                }

                throw new Error(res.message);

              case 10:
                return _context8.abrupt('return', res.response);

              case 11:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function GetUserInventoryFromSteamId(_x8) {
        return _ref16.apply(this, arguments);
      }

      return GetUserInventoryFromSteamId;
    }()
  }, {
    key: 'RegenerateTradeUrl',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref17) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _objectDestructuringEmpty(_ref17);

                url = this.getUrl() + 'RegenerateTradeUrl/v1';
                _context9.next = 4;
                return this.request.post({ url: url });

              case 4:
                res = _context9.sent;

                if (res.response) {
                  _context9.next = 7;
                  break;
                }

                throw new Error(res.message);

              case 7:
                return _context9.abrupt('return', res.response);

              case 8:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function RegenerateTradeUrl(_x9) {
        return _ref18.apply(this, arguments);
      }

      return RegenerateTradeUrl;
    }()
  }, {
    key: 'SendOffer',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref19) {
        var uid = _ref19.uid,
            token = _ref19.token,
            itemsToSend = _ref19.itemsToSend,
            itemsToReceive = _ref19.itemsToReceive,
            message = _ref19.message,
            trade_url = _ref19.trade_url;
        var url, twofactor_code, form, res;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(trade_url === undefined)) {
                  _context10.next = 5;
                  break;
                }

                if (!(uid === undefined)) {
                  _context10.next = 3;
                  break;
                }

                throw new Error('uid not specified!');

              case 3:
                if (!(token === undefined)) {
                  _context10.next = 5;
                  break;
                }

                throw new Error('token not specified!');

              case 5:
                if (!(itemsToSend === undefined)) {
                  _context10.next = 7;
                  break;
                }

                throw new Error('itemsToSend not specified!');

              case 7:
                if (!(itemsToReceive === undefined)) {
                  _context10.next = 9;
                  break;
                }

                throw new Error('itemsToReceive not specified!');

              case 9:
                url = this.getUrl() + 'SendOffer/v1';
                twofactor_code = this.generateToken();
                form = { twofactor_code: twofactor_code, items_to_send: itemsToSend.toString(), items_to_receive: itemsToReceive.toString(), message: message };

                if (uid && token) {
                  form.uid = uid;
                  form.token = token;
                } else if (trade_url) {
                  form.trade_url = trade_url;
                }

                _context10.next = 15;
                return this.request.post({ url: url, form: form });

              case 15:
                res = _context10.sent;

                if (res.response) {
                  _context10.next = 18;
                  break;
                }

                throw new Error(res.message);

              case 18:
                return _context10.abrupt('return', res.response.offer);

              case 19:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function SendOffer(_x10) {
        return _ref20.apply(this, arguments);
      }

      return SendOffer;
    }()
  }, {
    key: 'SendOfferToSteamId',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref21) {
        var steamId = _ref21.steamId,
            itemsToSend = _ref21.itemsToSend,
            itemsToReceive = _ref21.itemsToReceive,
            message = _ref21.message;
        var url, twofactor_code, form, res;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(steamId === undefined)) {
                  _context11.next = 2;
                  break;
                }

                throw new Error('steamId not specified!');

              case 2:
                if (!(itemsToSend === undefined)) {
                  _context11.next = 4;
                  break;
                }

                throw new Error('itemsToSend not specified!');

              case 4:
                if (!(itemsToReceive === undefined)) {
                  _context11.next = 6;
                  break;
                }

                throw new Error('itemsToReceive not specified!');

              case 6:
                url = this.getUrl() + 'SendOfferToSteamId/v1';
                twofactor_code = this.generateToken();
                form = { twofactor_code: twofactor_code, steam_id: steamId, items_to_send: itemsToSend.toString(), items_to_receive: itemsToReceive.toString(), message: message };
                _context11.next = 11;
                return this.request.post({ url: url, form: form });

              case 11:
                res = _context11.sent;

                if (res.response) {
                  _context11.next = 14;
                  break;
                }

                throw new Error(res.message);

              case 14:
                return _context11.abrupt('return', res.response.offer);

              case 15:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function SendOfferToSteamId(_x11) {
        return _ref22.apply(this, arguments);
      }

      return SendOfferToSteamId;
    }()
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return 'ITrade/';
    }
  }]);

  return ITrade;
}(ETInterface);

module.exports = ITrade;
