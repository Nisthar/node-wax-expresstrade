"use strict";

var states = {
  STATE_ACTIVE: 2,
  STATE_ACCEPTED: 3,
  STATE_EXPIRED: 5,
  STATE_CANCELLED: 6,
  STATE_DECLINED: 7,
  STATE_INVALID_ITEMS: 8,
  STATE_PENDING_CASE_OPEN: 9,
  STATE_EXPIRED_CASE_OPEN: 10,
  STATE_FAILED_CASE_OPEN: 12
};

module.exports = states;
