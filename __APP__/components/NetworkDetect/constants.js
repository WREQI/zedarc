var E,
  T = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var _ = require("../../config/errcode.js"),
  N = (function (E) {
    return (E.EMBEDDED = "EMBEDDED"), (E.FULL = "FULL"), E;
  })(N || {}),
  C = (function (E) {
    return (
      (E[(E.HIDDEN = 0)] = "HIDDEN"),
      (E[(E.LOADING = 1)] = "LOADING"),
      (E[(E.RESULT = 2)] = "RESULT"),
      E
    );
  })(C || {}),
  R = (function (E) {
    return (
      (E.REACHABLE = "0"),
      (E.ABROAD_IP = "1"),
      (E.BLACK_IP = "2"),
      (E.UNREACHABLE = "3"),
      E
    );
  })(R || {}),
  O =
    (T((E = {}), "UNKNOWN", _.DEFAULT),
    T(E, "NETWORK_DETECT_TIMEOUT", _.TIMEOUT),
    T(E, "NETWORK_DETECT_NETWORK_CHANGE", _.NETWORK_CHANGE),
    T(E, "NETWORK_DETECT_NETWORK_DISCONNECT", _.NETWORK_DISCONNECT),
    T(E, "NETWORK_DETECT_NETWORK_INTERRUPTED", _.NETWORK_INTERRUPTED),
    E);
(exports.NETWORK_DETECT_ACTION = R),
  (exports.NETWORK_DETECT_CGI_LIST = [
    "home_show.fcgi",
    "mini_login.fcgi",
    "trade_show.fcgi",
  ]),
  (exports.NETWORK_DETECT_COMMAND = {
    DETECT_IF_NEED: "DETECT_IF_NEED",
    DETECT_MP_REQUEST_IF_NEED: "DETECT_MP_REQUEST_IF_NEED",
    RECEIVE_RESPONSE: "RECEIVE_RESPONSE",
    SYNC_UI_STATUS: "SYNC_UI_STATUS",
  }),
  (exports.NETWORK_DETECT_MONITOR_EVENT = {
    MAIN_PROCESS_EXCEPTION: "MONITOR-NETWORK-DETECT-MAIN-PROCESS-EXCEPTION",
    MAIN_DETECT_EXCEPTION: "MONITOR-NETWORK-DETECT-MAIN-DETECT-EXCEPTION",
    CLICK_PHONE_CALL: "MONITOR-NETWORK-DETECT-CLICK-PHONE-CALL",
    CLICK_JUMP_CUSTOMER: "MONITOR-NETWORK-DETECT-CLICK-JUMP-CUSTOMER",
  }),
  (exports.NETWORK_DETECT_REQUEST_ERROR_MSG_MAP = O),
  (exports.NETWORK_DETECT_RESULT_TYPE = {
    CANCEL: "NETWORK_DETECT_CANCEL",
    FAILED: "NETWORK_DETECT_FAILED",
    IGNORE: "NETWORK_DETECT_IGNORE",
    UNREACHABLE: "NETWORK_DETECT_UNREACHABLE",
    REACHABLE: "NETWORK_DETECT_REACHABLE",
  }),
  (exports.NETWORK_DETECT_THEME = N),
  (exports.NETWORK_DETECT_TYPE = { REQUEST: "REQUEST", OTHER: "OTHER" }),
  (exports.NETWORK_DETECT_UI_TYPE = C),
  (exports.RETMSG_NETWORK_DETECT_REACHABLE = "网络异常，请刷新重试");
