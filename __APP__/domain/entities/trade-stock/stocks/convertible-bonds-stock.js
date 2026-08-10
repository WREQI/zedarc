require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  u = require("../../../../@babel/runtime/helpers/get"),
  a = require("../../../../@babel/runtime/helpers/getPrototypeOf"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  l = require("../../../../@babel/runtime/helpers/createSuper"),
  c = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var h = Object.defineProperty,
  d = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? h(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != c(r) ? r + "" : r, t),
      t
    );
  },
  f = require("../../../../config/enum.js"),
  k = (function (c) {
    o(p, c);
    var h,
      k = l(p);
    function p() {
      var e;
      return (
        i(this, p),
        (e = k.apply(this, arguments)),
        d(s(e), "riskInfo"),
        d(s(e), "quantityUnit", "张"),
        d(s(e), "stockTypeName", "债券"),
        d(s(e), "sellTipsText", ""),
        e
      );
    }
    return (
      n(p, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "根据交易规则，债券最少交易10张，交易数量需为10及其整倍数";
          },
        },
        {
          key: "isConvertibleBonds",
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
          key: "fetchRiskLimit",
          value:
            ((h = t(
              e().mark(function t(i, n) {
                var s, u, a;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), i.fetchRiskLimit(n);
                        case 2:
                          return (
                            (a = e.sent),
                            e.abrupt(
                              "return",
                              ((s = a.risk_info_data || []),
                              (u = r(s, 1)),
                              (this.riskInfo = u[0]),
                              a)
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e, r) {
              return h.apply(this, arguments);
            }),
        },
        {
          key: "isDelistingArrPeriodKzz",
          value: function () {
            var e,
              r,
              t,
              i = (null == (e = this.quote) ? void 0 : e.info) || {},
              n = i.market,
              s = i.product_status;
            return !!(
              n &&
              s &&
              ((n === f.MARKET.SA &&
                (null == (r = null == s ? void 0 : s.includes)
                  ? void 0
                  : r.call(
                      s,
                      f.PRODUCT_STATE[f.MARKET.SA].DELISTING_ARRANGEMENT
                    ))) ||
                (n === f.MARKET.HA &&
                  (null == (t = null == s ? void 0 : s.charAt)
                    ? void 0
                    : t.call(s, 3)) ===
                    f.PRODUCT_STATE[f.MARKET.HA].DELISTING_ARRANGEMENT))
            );
          },
        },
        {
          key: "hasPurchasePermission",
          value: function (e, r) {
            var t;
            if (this.isDelistingArrPeriodKzz()) return [!0];
            var i = ((null == (t = this.quote) ? void 0 : t.info) || {}).market,
              n = !1,
              s = !1;
            return (
              r.shareholdercards &&
                ((n =
                  -1 !==
                  r.shareholdercards.findIndex(function (e) {
                    return e.market === f.MARKET.SA && e.code.startsWith("0");
                  })),
                (s =
                  -1 !==
                  r.shareholdercards.findIndex(function (e) {
                    return e.market === f.MARKET.HA && e.code.startsWith("A");
                  }))),
              (i === f.MARKET.HA && s && !e.shKzzStatus) ||
              (i === f.MARKET.SA && n && !e.szKzzStatus)
                ? [
                    !1,
                    this.openPermission({
                      sz_kzz_status: e.szKzzStatus ? "1" : "0",
                      sh_kzz_status: e.shKzzStatus ? "1" : "0",
                    }),
                  ]
                : [!0]
            );
          },
        },
        {
          key: "openPermission",
          value: function (e) {
            return {
              retcode: "no_kzz_auth",
              retmsg:
                "当前未开通可转债交易权限。请开通权限后，继续交易可转债。",
              data: e,
            };
          },
        },
        {
          key: "hasTradeRisk",
          value: function (e) {
            var t,
              i,
              n,
              s = u(a(p.prototype), "hasTradeRisk", this).call(this, e),
              o = r(s, 2),
              l = o[0],
              c = o[1];
            return l
              ? [!0, c]
              : (null == (t = this.riskInfo) ? void 0 : t.conv_stock_code) ===
                (null == (n = null == (i = this.quote) ? void 0 : i.info)
                  ? void 0
                  : n.secu_code)
              ? [!0, { retcode: "kzz_risk", data: this.riskInfo }]
              : e.needShowKcbKzzTip
              ? [!0, { retcode: "sign_kcbkzz" }]
              : [!1];
          },
        },
        {
          key: "getAmountMaxLimit",
          value: function (e) {
            return 1e6;
          },
        },
      ]),
      p
    );
  })(require("./a-stock.js").IStock);
exports.ConvertibleBondsStock = k;
