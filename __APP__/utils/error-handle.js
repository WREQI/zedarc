Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.ERROR_TYPE = exports.ERROR_CODE = void 0),
  (exports.getErrorRes = function (R, r) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return {
      ret: 0,
      randstr: o(),
      ticket: E(R, r || "", e),
      errorCode: t[R],
      errorMessage: R.toLowerCase(),
    };
  }),
  (exports.getErrorTicket = E),
  (exports.getRandStr = o);
var R,
  r = require("../@babel/runtime/helpers/defineProperty"),
  e = {
    GET_CAPTCHA_CONFIG_REQUEST_ERROR: "GET_CAPTCHA_CONFIG_REQUEST_ERROR",
    REFRESH_ERROR: "REFRESH_ERROR",
    VERIFY_ERROR: "VERIFY_ERROR",
  };
exports.ERROR_TYPE = e;
var t =
  (r((R = {}), e.GET_CAPTCHA_CONFIG_REQUEST_ERROR, 1006),
  r(R, e.REFRESH_ERROR, 1012),
  r(R, e.VERIFY_ERROR, 1013),
  R);
function E(R, r) {
  var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
  return "trerror_"
    .concat(t[R], "_")
    .concat(r, "_")
    .concat(Math.floor(new Date().getTime() / 1e3))
    .concat(e ? "_".concat(e) : "");
}
function o() {
  return "@".concat(Math.random().toString(36).substring(2));
}
exports.ERROR_CODE = t;
