"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ## MessageType constants
//
// To identify the type of message one of the following Message Type Numbers MUST be used.
//
// When a server receives a message with a Message Type Number not in this list, it SHALL ignore the
// message payload. Each message type may have additional required fields.
var CALL_MESSAGE = exports.CALL_MESSAGE = 2; // Client-to-Server
var CALLRESULT_MESSAGE = exports.CALLRESULT_MESSAGE = 3; // Server-to-Client
var CALLERROR_MESSAGE = exports.CALLERROR_MESSAGE = 4; // Server-to-Client
//# sourceMappingURL=constants.js.map