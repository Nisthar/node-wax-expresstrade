'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ETInterface = require('../ETInterface');

var IUser = function (_ETInterface) {
  _inherits(IUser, _ETInterface);

  function IUser() {
    _classCallCheck(this, IUser);

    return _possibleConstructorReturn(this, (IUser.__proto__ || Object.getPrototypeOf(IUser)).apply(this, arguments));
  }

  _createClass(IUser, [{
    key: 'CreateVCaseUser',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var siteUrl = _ref.siteUrl,
            displayName = _ref.displayName;
        var url, form, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(siteUrl === undefined)) {
                  _context.next = 2;
                  break;
                }

                throw new Error('siteUrl not specified!');

              case 2:
                if (!(displayName === undefined)) {
                  _context.next = 4;
                  break;
                }

                throw new Error('displayName not specified!');

              case 4:
                url = this.getUrl() + 'CreateVCaseUser/v1';
                form = { site_url: siteUrl, display_name: displayName };
                _context.next = 8;
                return this.request.post({ url: url, form: form });

              case 8:
                res = _context.sent;

                if (res.response) {
                  _context.next = 11;
                  break;
                }

                throw new Error(res.message);

              case 11:
                return _context.abrupt('return', res.response);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function CreateVCaseUser(_x) {
        return _ref2.apply(this, arguments);
      }

      return CreateVCaseUser;
    }()
  }, {
    key: 'GetInventory',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var appId = _ref3.appId,
            _ref3$page = _ref3.page,
            page = _ref3$page === undefined ? 1 : _ref3$page,
            perPage = _ref3.perPage,
            search = _ref3.search,
            sort = _ref3.sort;
        var url, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(appId === undefined)) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('appId not specified!');

              case 2:
                url = this.getUrl() + 'GetInventory/v1';
                _context2.next = 5;
                return this.request.get({ url: url, qs: { app_id: appId, page: page, per_page: perPage, search: search, sort: sort } });

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

      function GetInventory(_x2) {
        return _ref4.apply(this, arguments);
      }

      return GetInventory;
    }()
  }, {
    key: 'GetProfile',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
        var _ref5$withExtra = _ref5.withExtra,
            withExtra = _ref5$withExtra === undefined ? false : _ref5$withExtra;
        var url, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.getUrl() + 'GetProfile/v1';
                _context3.next = 3;
                return this.request.get({ url: url, qs: { with_extra: withExtra } });

              case 3:
                res = _context3.sent;

                if (res.response) {
                  _context3.next = 6;
                  break;
                }

                throw new Error(res.message);

              case 6:
                return _context3.abrupt('return', res.response.user);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetProfile(_x3) {
        return _ref6.apply(this, arguments);
      }

      return GetProfile;
    }()
  }, {
    key: 'UpdateProfile',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
        var displayName = _ref7.displayName,
            inventoryIsPrivate = _ref7.inventoryIsPrivate,
            allowTwoFactorCodeReuse = _ref7.allowTwoFactorCodeReuse;
        var url, form, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = this.getUrl() + 'UpdateProfile/v1';
                form = { display_name: displayName, inventory_is_private: inventoryIsPrivate, allow_twofactor_code_reuse: allowTwoFactorCodeReuse };
                _context4.next = 4;
                return this.request.post({ url: url, form: form });

              case 4:
                res = _context4.sent;

                if (res.response) {
                  _context4.next = 7;
                  break;
                }

                throw new Error(res.message);

              case 7:
                return _context4.abrupt('return', res.response.user);

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function UpdateProfile(_x4) {
        return _ref8.apply(this, arguments);
      }

      return UpdateProfile;
    }()
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return 'IUser/';
    }
  }]);

  return IUser;
}(ETInterface);

module.exports = IUser;
