'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('events');
var request = require('request-promise');
var speakeasy = require('speakeasy');

var ICase = require('./interfaces/ICase');
var ICaseSite = require('./interfaces/ICaseSite');
var IEthereum = require('./interfaces/IEthereum');
var IItem = require('./interfaces/IItem');
var ITrade = require('./interfaces/ITrade');
var IUser = require('./interfaces/IUser');

var OfferState = require('./interfaces/ITrade/states');

var ExpressTrade = function (_EventEmitter) {
  _inherits(ExpressTrade, _EventEmitter);

  function ExpressTrade(options) {
    _classCallCheck(this, ExpressTrade);

    // Check for config
    var _this = _possibleConstructorReturn(this, (ExpressTrade.__proto__ || Object.getPrototypeOf(ExpressTrade)).call(this));

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('Options not specified!');
    }

    if (options.apiKey === undefined) {
      throw new Error('apiKey not specified!');
    }

    if (options.twoFactorSecret === undefined) {
      throw new Error('twoFactorSecret not specified!');
    }

    // Initialize internal settings
    _this.options = _extends({
      apiUrl: 'https://api-trade.opskins.com/',
      pollInterval: null
    }, options);

    _this.request = request.defaults({
      baseUrl: _this.options.apiUrl,
      auth: { user: _this.options.apiKey },
      json: true
    });

    _this.request2 = request.defaults({
      baseUrl: _this.options.apiUrl,
      auth: { user: _this.options.apiKey2 },
      json: true
    });

    // Initialize interfaces
    _this.ICase = new ICase({ request: _this.request });
    _this.ICaseSite = new ICaseSite({ request: _this.request2 });
    _this.IEthereum = new IEthereum({ request: _this.request });
    _this.IItem = new IItem({ request: _this.request });
    _this.ITrade = new ITrade({ request: _this.request, generateToken: function generateToken() {
        return _this.generateToken();
      } });
    _this.IUser = new IUser({ request: _this.request });

    // Polling
    _this.pollData = {};

    if (_this.options.pollInterval !== null) {
      if (_this.options.pollInterval < 1000) {
        throw new Error('pollInterval minimal value is 1000. Please change it!');
      }

      _this.startPolling(_this.options.pollInterval);
    }
    return _this;
  }

  _createClass(ExpressTrade, [{
    key: 'startPolling',
    value: function startPolling(interval) {
      var _this2 = this;

      this.pollInterval = setInterval(function () {
        return _this2.poll();
      }, interval);
    }
  }, {
    key: 'stopPolling',
    value: function stopPolling() {
      clearInterval(this.pollInterval);
      this.pollInterval = undefined;
    }
  }, {
    key: 'poll',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var offers, pollData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, offer, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _offer, newState, event;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                offers = void 0;
                _context.prev = 1;
                _context.next = 4;
                return this.ITrade.GetOffers({});

              case 4:
                offers = _context.sent.offers;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](1);

                console.log('Cannot poll offers - ' + _context.t0.message);

              case 10:
                pollData = {};

                // First-run time poll

                if (!(Object.keys(this.pollData).length === 0)) {
                  _context.next = 33;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 15;

                for (_iterator = offers[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  offer = _step.value;

                  pollData[offer.id] = offer;
                }

                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t1 = _context['catch'](15);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
                this.pollData = pollData;

                return _context.abrupt('return');

              case 33:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 36;
                _iterator2 = offers[Symbol.iterator]();

              case 38:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 71;
                  break;
                }

                _offer = _step2.value;
                newState = _offer.state;


                pollData[_offer.id] = _offer;

                if (!(this.pollData[_offer.id] === undefined)) {
                  _context.next = 47;
                  break;
                }

                event = _offer.sent_by_you ? 'OfferSent' : 'OfferReceived';

                this.emit(event, _offer);
                _context.next = 68;
                break;

              case 47:
                if (!(newState !== this.pollData[_offer.id].state)) {
                  _context.next = 68;
                  break;
                }

                this.emit('OfferChanged', _offer);

                _context.t2 = newState;
                _context.next = _context.t2 === OfferState.STATE_ACCEPTED ? 52 : _context.t2 === OfferState.STATE_EXPIRED ? 54 : _context.t2 === OfferState.STATE_CANCELLED ? 56 : _context.t2 === OfferState.STATE_DECLINED ? 58 : _context.t2 === OfferState.STATE_INVALID_ITEMS ? 60 : _context.t2 === OfferState.STATE_PENDING_CASE_OPEN ? 62 : _context.t2 === OfferState.STATE_EXPIRED_CASE_OPEN ? 64 : _context.t2 === OfferState.STATE_FAILED_CASE_OPEN ? 66 : 68;
                break;

              case 52:
                this.emit('OfferAccepted', _offer);
                return _context.abrupt('break', 68);

              case 54:
                this.emit('OfferExpired', _offer);
                return _context.abrupt('break', 68);

              case 56:
                this.emit('OfferCancelled', _offer);
                return _context.abrupt('break', 68);

              case 58:
                this.emit('OfferDeclined', _offer);
                return _context.abrupt('break', 68);

              case 60:
                this.emit('OfferNoLongerValid', _offer);
                return _context.abrupt('break', 68);

              case 62:
                this.emit('OfferCasePending', _offer);
                return _context.abrupt('break', 68);

              case 64:
                this.emit('OfferCaseExpired', _offer);
                return _context.abrupt('break', 68);

              case 66:
                this.emit('OfferCaseFailed', _offer);
                return _context.abrupt('break', 68);

              case 68:
                _iteratorNormalCompletion2 = true;
                _context.next = 38;
                break;

              case 71:
                _context.next = 77;
                break;

              case 73:
                _context.prev = 73;
                _context.t3 = _context['catch'](36);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t3;

              case 77:
                _context.prev = 77;
                _context.prev = 78;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 80:
                _context.prev = 80;

                if (!_didIteratorError2) {
                  _context.next = 83;
                  break;
                }

                throw _iteratorError2;

              case 83:
                return _context.finish(80);

              case 84:
                return _context.finish(77);

              case 85:

                // Save new pollData
                this.pollData = pollData;

              case 86:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7], [15, 19, 23, 31], [24,, 26, 30], [36, 73, 77, 85], [78,, 80, 84]]);
      }));

      function poll() {
        return _ref.apply(this, arguments);
      }

      return poll;
    }()
  }, {
    key: 'generateToken',
    value: function generateToken() {
      return speakeasy.totp({
        secret: this.options.twoFactorSecret,
        encoding: 'base32'
      });
    }
  }]);

  return ExpressTrade;
}(EventEmitter);

module.exports = ExpressTrade;
