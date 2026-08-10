var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  s = require("../../../../@babel/runtime/helpers/get"),
  u = require("../../../../@babel/runtime/helpers/getPrototypeOf"),
  a = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper"),
  l = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var o = Object.defineProperty,
  h = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? o(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != l(r) ? r + "" : r, t),
      t
    );
  },
  c = require("./a-stock.js"),
  T = require("../../../../config/enum.js"),
  g = 2,
  m = 4,
  E = { 0: 1, 1: g, 2: g | m },
  b = (function (l) {
    a(c, l);
    var o = n(c);
    function c(e) {
      var t, s;
      return (
        r(this, c),
        (t = o.call(this, e)),
        h(i(t), "isRegister"),
        h(i(t), "auth"),
        h(i(t), "tradeHourMap", [
          T.MARKET_STATE.OPEN_AUCTION,
          T.MARKET_STATE.MORNING_OPENED,
          T.MARKET_STATE.SIESTA,
          T.MARKET_STATE.AFTERNOON_OPENED,
          T.MARKET_STATE.AFTER_PREPARE,
          T.MARKET_STATE.AFTER_TRADING,
        ]),
        (t.isRegister =
          "c" ===
          (null == (s = null == e ? void 0 : e.info) ? void 0 : s.class)),
        t
      );
    }
    return (
      t(c, [
        {
          key: "isGem",
          get: function () {
            return !0;
          },
        },
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 20, DOWN: -20 };
          },
        },
        {
          key: "hasPurchasePermission",
          value: function (r) {
            this.auth = r.gemRegisterStatus;
            var t = s(u(c.prototype), "hasPurchasePermission", this).call(
                this,
                r
              ),
              i = e(t, 2),
              a = i[0],
              n = i[1];
            if (!a) return [!1, n];
            if (!r.gemRegisterStatus) return [!0];
            var l = this.isRegister ? m : g,
              o = E[r.gemRegisterStatus] & l;
            return Boolean(o)
              ? [!0]
              : "1" === r.gemRegisterStatus
              ? [
                  !1,
                  {
                    retcode: "no_gemLow_auth",
                    retmsg: "权限不足，请先升级创业板权限后再进行交易",
                  },
                ]
              : [
                  !1,
                  {
                    retcode: "no_gem_auth",
                    retmsg:
                      "当前未开通创业板交易权限。请开通权限后，继续交易创业板股票",
                  },
                ];
          },
        },
        {
          key: "hasTradeRisk",
          value: function (r) {
            var t = s(u(c.prototype), "hasTradeRisk", this).call(this, r),
              i = e(t, 2),
              a = i[0],
              n = i[1];
            return a
              ? [!0, n]
              : !this.isRegister && r.needSignGemHzj
              ? [!0, { retcode: "sign_gemhzj" }]
              : [!1];
          },
        },
      ]),
      c
    );
  })(c.IStock);
exports.GEMStock = b;
