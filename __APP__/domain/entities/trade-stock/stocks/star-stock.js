var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  i = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../@babel/runtime/helpers/get"),
  u = require("../../../../@babel/runtime/helpers/getPrototypeOf"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var l = Object.defineProperty,
  c = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? l(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != a(t) ? t + "" : t, r),
      r
    );
  },
  m = require("./a-stock.js"),
  h = require("../../../../config/enum.js"),
  A = require("../../../../common/vendor.js"),
  _ = require("../../../../utils/permission-check.js"),
  T = require("../../../../utils/market.js"),
  p = (function (a) {
    o(m, a);
    var l = s(m);
    function m() {
      var e;
      return (
        t(this, m),
        (e = l.apply(this, arguments)),
        c(i(e), "tradeHourMap", [
          h.MARKET_STATE.OPEN_AUCTION,
          h.MARKET_STATE.MORNING_OPENED,
          h.MARKET_STATE.SIESTA,
          h.MARKET_STATE.AFTERNOON_OPENED,
          h.MARKET_STATE.AFTER_PREPARE,
          h.MARKET_STATE.AFTER_TRADING,
        ]),
        e
      );
    }
    return (
      r(m, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "根据交易规则，科创板股票最少交易200股";
          },
        },
        {
          key: "minAmount",
          get: function () {
            return 200;
          },
        },
        {
          key: "isKCB",
          get: function () {
            return !0;
          },
        },
        {
          key: "isGrowthLayer",
          get: function () {
            var e;
            return (
              (null == (e = this.quote) ? void 0 : e.stock_cls) ===
              T.MARKET_CLASS.NG
            );
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
          value: function (t, r) {
            var i = n(u(m.prototype), "hasPurchasePermission", this).call(
                this,
                t,
                r
              ),
              o = e(i, 2),
              s = o[0],
              a = o[1];
            if (!s) return [!1, a];
            var l = _.checkKCBAndGrowthLayerPermission(t, this.isGrowthLayer);
            return l.hasPermission
              ? [!0]
              : [!1, { retcode: l.errorCode, retmsg: l.errorMsg }];
          },
        },
        {
          key: "hasTradeRisk",
          value: function (t) {
            var r = n(u(m.prototype), "hasTradeRisk", this).call(this, t),
              i = e(r, 2),
              o = i[0],
              s = i[1];
            return o ? [!0, s] : [!1];
          },
        },
        {
          key: "calcPriceCageLimit",
          value: function () {
            var e = this.calcPriceCageBaseValue(),
              t = e.buy,
              r = e.sell;
            return {
              upPrice: void 0 === t ? 1 / 0 : A.__CJS__export_mul__(t, 1.02),
              downPrice: void 0 === r ? -1 / 0 : A.__CJS__export_mul__(r, 0.98),
            };
          },
        },
        {
          key: "floorAmountByUnit",
          value: function (e) {
            return (
              Math.floor(+e) >= this.minAmount ? Math.floor(+e) : 0
            ).toString();
          },
        },
        {
          key: "calcOddLot",
          value: function (e) {
            var t,
              r,
              i = +(
                (null == (r = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : r.trd_unit) || 0
              );
            return +e >= 200 ? +e % i : +e % 200;
          },
        },
        {
          key: "getMaxSellTips",
          value: function (e) {
            return e.maxSellHasOdd
              ? {
                  retcode: "kc_onetime_sell",
                  retmsg: "根据交易所规则，碎股的数量（"
                    .concat(e.max_sell_qty)
                    .concat(
                      this.quantityUnit,
                      "）需要全部卖出不可拆分，请调整数量后再试"
                    ),
                  data: { suggestAmount: e.max_sell_qty },
                }
              : {
                  retcode: "kc_less_min_amount",
                  retmsg: "根据交易所规则，科创板买卖要求最少"
                    .concat(this.minAmount)
                    .concat(this.quantityUnit, "起，股数低于")
                    .concat(this.minAmount)
                    .concat(this.quantityUnit, "的交易可能无效"),
                  data: { suggestAmount: this.minAmount },
                };
          },
        },
        {
          key: "getAmountMaxLimit",
          value: function (e) {
            return e === h.STRATEGY.LATEST ? 5e4 : 1e5;
          },
        },
        {
          key: "calcStep",
          value: function (e) {
            var t,
              r,
              i = Number(
                (null == (r = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : r.trd_unit) || 1
              );
            return {
              minusStep: +e - (+e > this.minAmount ? +e - i : 0 == +e ? -i : 0),
              plusStep:
                (0 <= +e && +e < this.minAmount ? this.minAmount : +e + i) - +e,
            };
          },
        },
        {
          key: "getMinAmountTips",
          value: function () {
            return "最少交易".concat(
              this.minAmount,
              "股，如需交易零股请手动输入"
            );
          },
        },
      ]),
      m
    );
  })(m.IStock);
exports.STARStock = p;
