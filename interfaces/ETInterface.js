'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ETInterface = function ETInterface(_ref) {
  var request = _ref.request,
      generateToken = _ref.generateToken;

  _classCallCheck(this, ETInterface);

  if (request === undefined) {
    throw new Error('request not specified!');
  }

  this.request = request;
  this.generateToken = generateToken;
};

module.exports = ETInterface;
