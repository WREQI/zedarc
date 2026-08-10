require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  u = require("../../../../@babel/runtime/helpers/get"),
  s = require("../../../../@babel/runtime/helpers/getPrototypeOf"),
  a = require("../../../../@babel/runtime/helpers/inherits"),
  m = require("../../../../@babel/runtime/helpers/createSuper"),
  o = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var l = Object.defineProperty,
  c = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? l(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != o(t) ? t + "" : t, i),
      i
    );
  },
  _ = require("./a-stock.js"),
  p = require("../../../../config/enum.js"),
  h = require("../../../../utils/market.js"),
  x = require("../../../../common/vendor.js"),
  d = require("../../../../config/enum/trade.js"),
  v = require("../../utils.js");
require("../../../../service/broker.js");
var f = require("../../../../config/broker/11100/index.js"),
  S = (function (o) {
    a(_, o);
    var l = m(_);
    function _() {
      var e;
      return (
        i(this, _),
        (e = l.apply(this, arguments)),
        c(n(e), "tradeHourMap", [
          p.MARKET_STATE.OPEN_AUCTION,
          p.MARKET_STATE.MORNING_OPENED,
          p.MARKET_STATE.SIESTA,
          p.MARKET_STATE.AFTERNOON_OPENED,
          p.MARKET_STATE.AFTER_PREPARE,
          p.MARKET_STATE.AFTER_TRADING,
        ]),
        c(n(e), "priceUnit", "港元"),
        e
      );
    }
    return (
      r(_, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "交易数量需为整手数量".concat(this.minAmount, "的整数倍");
          },
        },
        {
          key: "_priceSteps",
          get: function () {
            var e,
              t = (null == (e = this.quote) ? void 0 : e.stock_cls) || "";
            return [h.MARKET_CLASS.F].includes(t)
              ? [
                  { min: 0.01, max: 1, step: 0.001 },
                  { min: 1, max: 5, step: 0.002 },
                  { min: 5, max: 10, step: 0.005 },
                  { min: 10, max: 20, step: 0.01 },
                  { min: 20, max: 100, step: 0.02 },
                  { min: 100, max: 200, step: 0.05 },
                  { min: 200, max: 500, step: 0.1 },
                  { min: 500, max: 1e3, step: 0.2 },
                  { min: 1e3, max: 2e3, step: 0.5 },
                  { min: 2e3, max: 9999, step: 1 },
                ]
              : f.brokerConfig.trade.hkNewTickSize
              ? [
                  { min: 0.01, max: 0.25, step: 0.001 },
                  { min: 0.25, max: 0.5, step: 0.005 },
                  { min: 0.5, max: 10, step: 0.005 },
                  { min: 10, max: 20, step: 0.01 },
                  { min: 20, max: 50, step: 0.02 },
                  { min: 50, max: 100, step: 0.05 },
                  { min: 100, max: 200, step: 0.1 },
                  { min: 200, max: 500, step: 0.2 },
                  { min: 500, max: 1e3, step: 0.5 },
                  { min: 1e3, max: 2e3, step: 1 },
                  { min: 2e3, max: 5e3, step: 2 },
                  { min: 5e3, max: 9995, step: 5 },
                ]
              : [
                  { min: 0.01, max: 0.25, step: 0.001 },
                  { min: 0.25, max: 0.5, step: 0.005 },
                  { min: 0.5, max: 20, step: 0.01 },
                  { min: 20, max: 50, step: 0.02 },
                  { min: 50, max: 100, step: 0.05 },
                  { min: 100, max: 200, step: 0.1 },
                  { min: 200, max: 500, step: 0.2 },
                  { min: 500, max: 1e3, step: 0.5 },
                  { min: 1e3, max: 2e3, step: 1 },
                  { min: 2e3, max: 5e3, step: 2 },
                  { min: 5e3, max: 9995, step: 5 },
                ];
          },
        },
        {
          key: "minAmount",
          get: function () {
            var e, t;
            return Number(
              (null == (t = null == (e = this.quote) ? void 0 : e.info)
                ? void 0
                : t.trd_unit) || 100
            );
          },
        },
        {
          key: "isGGT",
          get: function () {
            return !0;
          },
        },
        {
          key: "spreadAcc",
          get: function () {
            return 3;
          },
        },
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 1 / 0, DOWN: -1 / 0 };
          },
        },
        {
          key: "hasPurchasePermission",
          value: function (e) {
            var t;
            return (null == (t = null == e ? void 0 : e.authorities)
              ? void 0
              : t.ggt) !== d.GGTAccountStatus.opened
              ? [
                  !1,
                  {
                    retcode: "no_ggt_auth",
                    retmsg:
                      "您未开通港股通交易权限，无法交易沪深港通证券，请开通权限后继续交易",
                  },
                ]
              : [!0];
          },
        },
        {
          key: "hasTradeRisk",
          value: function (e) {
            var i = u(s(_.prototype), "hasTradeRisk", this).call(this, e),
              r = t(i, 2),
              n = r[0],
              a = r[1];
            return n ? [!0, a] : [!1];
          },
        },
        {
          key: "isPriceMatchMinimumTickSize",
          value: function (e) {
            var t = this.calcPriceStep(e),
              i = "number" == typeof t ? t : null == t ? void 0 : t.minusStep,
              r = x.__CJS__export_div__(+e, i);
            return Number.isInteger(r)
              ? [!0]
              : [
                  !1,
                  {
                    retcode: "price_match_minimum_tick_size_error",
                    retmsg: "价格变动单位需为".concat(i, "的整数倍"),
                    data: i,
                  },
                ];
          },
        },
        {
          key: "isInLimitPriceRange",
          value: function () {
            return [!0];
          },
        },
        {
          key: "isBuyPriceMatchPriceCageLimit",
          value: function () {
            return [!0];
          },
        },
        {
          key: "isSellPriceMatchPriceCageLimit",
          value: function () {
            return [!0];
          },
        },
        {
          key: "calcPriceCageLimit",
          value: function () {
            return { upPrice: 1 / 0, downPrice: -1 / 0 };
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
            var t, i;
            return (
              +e %
              +(
                (null == (i = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : i.trd_unit) || 1
              )
            );
          },
        },
        {
          key: "getMaxSellTips",
          value: function (e) {
            return e.maxSellHasOdd
              ? {
                  retcode: "ggt_onetime_sell",
                  retmsg: "根据交易所规则，".concat(
                    this.AmountMinLimitRetMsg,
                    "，请调整数量后再试"
                  ),
                  data: { suggestAmount: this.minAmount },
                }
              : {
                  retcode: "ggt_less_min_amount",
                  retmsg: "根据交易所规则，".concat(
                    this.AmountMinLimitRetMsg,
                    "，请调整数量后再试"
                  ),
                  data: { suggestAmount: this.minAmount },
                };
          },
        },
        {
          key: "getAmountMaxLimit",
          value: function (e) {
            return 1 / 0;
          },
        },
        {
          key: "calcStep",
          value: function (e) {
            var t,
              i,
              r = +e,
              n = Number(
                (null == (i = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : i.trd_unit) || 1
              );
            return {
              minusStep: r - (r > this.minAmount ? r - n : 0 === r ? -n : 0),
              plusStep:
                (0 <= r && r < this.minAmount ? this.minAmount : r + n) - r,
            };
          },
        },
        {
          key: "getMinAmountTips",
          value: function () {
            return this.AmountMinLimitRetMsg;
          },
        },
        {
          key: "calcPriceStep",
          value: function (i) {
            var r,
              n = +i,
              u = e(this._priceSteps.entries());
            try {
              for (u.s(); !(r = u.n()).done; ) {
                var s = t(r.value, 2),
                  a = s[0],
                  m = s[1];
                if (n > m.min && n < m.max) return m.step;
                if (n === m.min) {
                  var o = this._priceSteps[a - 1];
                  return o ? { minusStep: o.step, plusStep: m.step } : m.step;
                }
                if (n === m.max) {
                  var l = this._priceSteps[a + 1];
                  return l ? { minusStep: m.step, plusStep: l.step } : m.step;
                }
                if (
                  (n < m.min && 0 === a) ||
                  (n > m.max && a === this._priceSteps.length - 1)
                )
                  return m.step;
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
          },
        },
        {
          key: "calcTradeFee",
          value: function (e, t) {
            var i,
              r,
              n,
              u = v.getMarketFee(
                null == (r = null == (i = this.quote) ? void 0 : i.info)
                  ? void 0
                  : r.market
              ),
              s = Math.max(
                x.__CJS__export_mul__(
                  x.__CJS__export_mul__(e, u.commission),
                  t || 1
                ),
                u.lowestCommission
              ),
              a = Math.ceil(Math.max(x.__CJS__export_mul__(e, u.stampDuty), 1)),
              m = (null == (n = this.quote) ? void 0 : n.stock_cls) || "";
            [h.MARKET_CLASS.F].includes(m) && (a = 0);
            var o = x.__CJS__export_mul__(e, u.tradingFee),
              l = x.__CJS__export_mul__(e, u.transactionFee),
              c = x.__CJS__export_mul__(e, u.shareSettlementFee),
              _ = x.__CJS__export_mul__(e, u.financialSecretary);
            return x.__CJS__export_add__(
              s,
              x.__CJS__export_mul__(
                [a, o, l, c, _].reduce(function (e, t) {
                  return x.__CJS__export_add__(e, t);
                }, 0),
                t || 1
              )
            );
          },
        },
      ]),
      _
    );
  })(_.IStock);
exports.HKStock = S;
