var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../../@babel/runtime/helpers/inherits"),
  u = require("../../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var a = Object.defineProperty,
  T = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? a(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != n(r) ? r + "" : r, t),
      t
    );
  },
  l = require("../../../../config/enum.js"),
  s = (function (n) {
    i(s, n);
    var a = u(s);
    function s() {
      var r;
      return (
        e(this, s),
        (r = a.apply(this, arguments)),
        T(t(r), "tradeHourMap", [
          l.MARKET_STATE.OPEN_AUCTION,
          l.MARKET_STATE.MORNING_OPENED,
          l.MARKET_STATE.SIESTA,
          l.MARKET_STATE.AFTERNOON_OPENED,
          l.MARKET_STATE.AFTER_PREPARE,
          l.MARKET_STATE.AFTER_TRADING,
        ]),
        r
      );
    }
    return (
      r(s, [
        {
          key: "supportAfterTrade",
          get: function () {
            return "all";
          },
        },
      ]),
      s
    );
  })(require("./a-stock.js").IStock);
exports.ETFFundStock = s;
