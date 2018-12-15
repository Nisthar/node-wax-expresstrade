'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

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
    key: 'GetContractAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var url, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _objectDestructuringEmpty(_ref);

                url = this.getUrl() + 'GetContractAddress/v1';
                _context.next = 4;
                return this.request.get({ url: url });

              case 4:
                res = _context.sent;

                if (res.response) {
                  _context.next = 7;
                  break;
                }

                throw new Error(res.message);

              case 7:
                return _context.abrupt('return', res.response.contract_address);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetContractAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return GetContractAddress;
    }()
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return 'IEthereum/';
    }
  }]);

  return ICaseSite;
}(ETInterface);

module.exports = ICaseSite;
