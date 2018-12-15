'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ETInterface = require('../ETInterface');

var ICaseSite = function (_ETInterface) {
  _inherits(ICaseSite, _ETInterface);

  function ICaseSite() {
    _classCallCheck(this, ICaseSite);

    return _possibleConstructorReturn(this, (ICaseSite.__proto__ || Object.getPrototypeOf(ICaseSite)).apply(this, arguments));
  }

  _createClass(ICaseSite, [{
    key: 'GetKeyCount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var tradeUrl = _ref.tradeUrl,
            steamId = _ref.steamId;
        var url, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(tradeUrl === undefined && steamId === undefined)) {
                  _context.next = 2;
                  break;
                }

                throw new Error('tradeUrl or steamId not specified!');

              case 2:
                url = this.getUrl() + 'GetKeyCount/v1';
                _context.next = 5;
                return this.request.get({ url: url, qs: { trade_url: tradeUrl, steam_id: steamId } });

              case 5:
                res = _context.sent;

                if (res.response) {
                  _context.next = 8;
                  break;
                }

                throw new Error(res.message);

              case 8:
                return _context.abrupt('return', res.response.key_count);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetKeyCount(_x) {
        return _ref2.apply(this, arguments);
      }

      return GetKeyCount;
    }()
  }, {
    key: 'GetTradeStatus',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var offerId = _ref3.offerId;
        var url, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.getUrl() + 'GetTradeStatus/v1';

                if (!(offerId === undefined)) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('offerId not specified!');

              case 3:
                _context2.next = 5;
                return this.request.get({ url: url, qs: { offer_id: offerId } });

              case 5:
                res = _context2.sent;

                if (res.response) {
                  _context2.next = 8;
                  break;
                }

                throw new Error(res.message);

              case 8:
                return _context2.abrupt('return', res.response);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetTradeStatus(_x2) {
        return _ref4.apply(this, arguments);
      }

      return GetTradeStatus;
    }()
  }, {
    key: 'SendKeyRequest',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
        var tradeUrl = _ref5.tradeUrl,
            steamId = _ref5.steamId,
            caseId = _ref5.caseId,
            affiliateEthAddress = _ref5.affiliateEthAddress,
            _ref5$amount = _ref5.amount,
            amount = _ref5$amount === undefined ? 1 : _ref5$amount;
        var url, form, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(tradeUrl === undefined && steamId === undefined)) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('tradeUrl or steamId not specified!');

              case 2:
                if (!(caseId === undefined)) {
                  _context3.next = 4;
                  break;
                }

                throw new Error('caseId not specified!');

              case 4:
                if (!(affiliateEthAddress === undefined)) {
                  _context3.next = 6;
                  break;
                }

                throw new Error('affiliateEthAddress not specified!');

              case 6:
                url = this.getUrl() + 'SendKeyRequest/v1';
                form = { trade_url: tradeUrl, steam_id: steamId, case_id: caseId, affiliate_eth_address: affiliateEthAddress, amount: amount };
                _context3.next = 10;
                return this.request.post({ url: url, form: form });

              case 10:
                res = _context3.sent;

                if (res.response) {
                  _context3.next = 13;
                  break;
                }

                throw new Error(res.message);

              case 13:
                return _context3.abrupt('return', res.response);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function SendKeyRequest(_x3) {
        return _ref6.apply(this, arguments);
      }

      return SendKeyRequest;
    }()
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return 'ICaseSite/';
    }
  }]);

  return ICaseSite;
}(ETInterface);

module.exports = ICaseSite;
