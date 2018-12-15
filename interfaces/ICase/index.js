'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ETInterface = require('../ETInterface');

var ICase = function (_ETInterface) {
  _inherits(ICase, _ETInterface);

  function ICase() {
    _classCallCheck(this, ICase);

    return _possibleConstructorReturn(this, (ICase.__proto__ || Object.getPrototypeOf(ICase)).apply(this, arguments));
  }

  _createClass(ICase, [{
    key: 'GetCaseSchema',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var cases = _ref.cases;
        var url, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.getUrl() + 'GetCaseSchema/v1';
                _context.next = 3;
                return this.request.get({ url: url, qs: { cases: cases } });

              case 3:
                res = _context.sent;

                if (res.response) {
                  _context.next = 6;
                  break;
                }

                throw new Error(res.message);

              case 6:
                return _context.abrupt('return', res.response.cases);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetCaseSchema(_x) {
        return _ref2.apply(this, arguments);
      }

      return GetCaseSchema;
    }()
  }, {
    key: 'GetMinifmumOpenVolume',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.getUrl() + 'GetMinimumOpenVolume/v1';
                _context2.next = 3;
                return this.request.get({ url: url });

              case 3:
                res = _context2.sent;

                if (res.response) {
                  _context2.next = 6;
                  break;
                }

                throw new Error(res.message);

              case 6:
                return _context2.abrupt('return', res.response.count);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetMinifmumOpenVolume() {
        return _ref3.apply(this, arguments);
      }

      return GetMinifmumOpenVolume;
    }()
  }, {
    key: 'OpenWithKeys',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
        var caseId = _ref4.caseId,
            amount = _ref4.amount;
        var url, form, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(caseId === undefined)) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('caseId not specified!');

              case 2:
                url = this.getUrl() + 'OpenWithKeys/v1';
                form = { case_id: caseId, amount: amount };
                _context3.next = 6;
                return this.request.post({ url: url, form: form });

              case 6:
                res = _context3.sent;

                if (res.response) {
                  _context3.next = 9;
                  break;
                }

                throw new Error(res.message);

              case 9:
                return _context3.abrupt('return', res.response.cases);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function OpenWithKeys(_x2) {
        return _ref5.apply(this, arguments);
      }

      return OpenWithKeys;
    }()
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return 'ICase/';
    }
  }]);

  return ICase;
}(ETInterface);

module.exports = ICase;
