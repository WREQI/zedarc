require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var r = Object.defineProperty,
  s = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != n(t) ? t + "" : t, i),
      i
    );
  },
  u = require("../../../../common/vendor.js"),
  o = require("../../../../config/enum.js"),
  a = require("../../utils.js"),
  l = require("../../../../utils/market.js");
exports.IStock = (function () {
  function n(i) {
    var r;
    t(this, n),
      s(this, "tradeHourMap", [
        o.MARKET_STATE.OPEN_AUCTION,
        o.MARKET_STATE.MORNING_OPENED,
        o.MARKET_STATE.SIESTA,
        o.MARKET_STATE.AFTERNOON_OPENED,
      ]),
      s(this, "priceUnit", "元"),
      s(this, "quantityUnit", "股"),
      s(this, "stockTypeName", "股票"),
      s(this, "sellTipsText", "今日买入股票下一交易日方可卖出，"),
      s(this, "skipAmountCheck", !1),
      s(this, "skipCalcMaxBuy", !1),
      s(
        this,
        "marketTips",
        (e(
          (r = {}),
          o.MARKET_STATE.NOT_TRADEDAY,
          "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易；"
        ),
        e(
          r,
          o.MARKET_STATE.NOT_OPEN,
          "未开市，现在发起的委托将在9:15开市后进行交易；"
        ),
        e(
          r,
          o.MARKET_STATE.SIESTA,
          "午间休市，现在发起的委托将在13:00开市后进行交易；"
        ),
        e(
          r,
          o.MARKET_STATE.CLOSED,
          "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易；"
        ),
        r)
      ),
      s(this, "quote"),
      (this.quote = i),
      (this.toJSON = function () {
        return Object.assign({}, this, {
          secu_quote: this.secu_quote,
          five_trans: this.five_trans,
          secu_info: this.secu_info,
          market_state: this.market_state,
          isST: this.isST,
          isDelistingArrPeriod: this.isDelistingArrPeriod,
          isKCB: this.isKCB,
          isGGT: this.isGGT,
          isGem: this.isGem,
          isConvertibleBonds: this.isConvertibleBonds,
          isSpecialGovernmentBonds: this.isSpecialGovernmentBonds,
          marketName: this.marketName,
          spread: this.spread,
          spreadAcc: this.spreadAcc,
          minAmount: this.minAmount,
          isTradingHour: this.isTradingHour,
          isAfterMarketState: this.isAfterMarketState,
          transInfo: this.transInfo,
          isNewStock: this.isNewStock,
          disabled: this.disabled,
          newstockStatusText: this.newstockStatusText,
        });
      });
  }
  return (
    i(
      n,
      [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "根据交易规则，股票最少交易100股，交易数量需为100及其整倍数";
          },
        },
        {
          key: "secu_quote",
          get: function () {
            var e;
            return (null == (e = this.quote) ? void 0 : e.secu_quote) || {};
          },
        },
        {
          key: "five_trans",
          get: function () {
            var e;
            return (null == (e = this.quote) ? void 0 : e.five_trans) || {};
          },
        },
        {
          key: "secu_info",
          get: function () {
            var e;
            return (null == (e = this.quote) ? void 0 : e.secu_info) || {};
          },
        },
        {
          key: "market_state",
          get: function () {
            var e;
            return (null == (e = this.quote) ? void 0 : e.market_state) || "";
          },
        },
        {
          key: "isST",
          get: function () {
            var e, t;
            return /^\*?ST/i.test(
              (null == (t = null == (e = this.quote) ? void 0 : e.info)
                ? void 0
                : t.name) || ""
            );
          },
        },
        {
          key: "isDelistingArrPeriod",
          get: function () {
            var e,
              t,
              i,
              n = (null == (e = this.quote) ? void 0 : e.info) || {},
              r = n.market,
              s = n.product_status;
            return !!(
              r &&
              s &&
              ((r === o.MARKET.SA &&
                (null == (t = null == s ? void 0 : s.includes)
                  ? void 0
                  : t.call(
                      s,
                      o.PRODUCT_STATE[o.MARKET.SA].DELISTING_ARRANGEMENT
                    ))) ||
                (r === o.MARKET.HA &&
                  (null == (i = null == s ? void 0 : s.charAt)
                    ? void 0
                    : i.call(s, 3)) ===
                    o.PRODUCT_STATE[o.MARKET.HA].DELISTING_ARRANGEMENT))
            );
          },
        },
        {
          key: "isKCB",
          get: function () {
            return !1;
          },
        },
        {
          key: "isGGT",
          get: function () {
            return !1;
          },
        },
        {
          key: "isGem",
          get: function () {
            return !1;
          },
        },
        {
          key: "isConvertibleBonds",
          get: function () {
            return !1;
          },
        },
        {
          key: "isSpecialGovernmentBonds",
          get: function () {
            return !1;
          },
        },
        {
          key: "marketName",
          get: function () {
            var e, t;
            return (null == (t = null == (e = this.quote) ? void 0 : e.info)
              ? void 0
              : t.market) === o.MARKET.HA
              ? "沪"
              : "深";
          },
        },
        {
          key: "spread",
          get: function () {
            var e, t;
            return (
              +(
                (null == (t = null == (e = this.quote) ? void 0 : e.info)
                  ? void 0
                  : t.spread) || ""
              ) || 0.01
            );
          },
        },
        {
          key: "spreadAcc",
          get: function () {
            return this.spread && this.spread > 0
              ? parseFloat(String(1 / this.spread)).toFixed(0).length - 1
              : 2;
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
          key: "isTradingHour",
          get: function () {
            var e;
            return this.tradeHourMap.includes(
              (null == (e = this.quote) ? void 0 : e.market_state) || ""
            );
          },
        },
        {
          key: "isAfterMarketState",
          get: function () {
            var e;
            return [
              o.MARKET_STATE.AFTER_PREPARE,
              o.MARKET_STATE.AFTER_TRADING,
            ].includes(
              (null == (e = this.quote) ? void 0 : e.market_state) || ""
            );
          },
        },
        {
          key: "transInfo",
          get: function () {
            for (
              var e,
                t,
                i,
                n,
                r,
                s,
                u,
                o,
                l,
                c,
                _,
                d = { buy: "--", sell: "--" },
                v = 0,
                h = 0,
                m = 0,
                T = parseFloat(this.secu_quote.zsj) || 0,
                f = 1;
              f < 6;
              f++
            ) {
              var A = "mrsl".concat(f),
                S = "mcsl".concat(f),
                k =
                  null == (t = null == (e = this.quote) ? void 0 : e.five_trans)
                    ? void 0
                    : t[A],
                p =
                  null == (n = null == (i = this.quote) ? void 0 : i.five_trans)
                    ? void 0
                    : n[S];
              a.isZeroValue(k) || (v += parseInt(k, 10)),
                a.isZeroValue(p) || (h += parseInt(p, 10));
              var g = "mrjg".concat(f),
                y = "mcjg".concat(f);
              (m = parseFloat(
                (null == (s = null == (r = this.quote) ? void 0 : r.five_trans)
                  ? void 0
                  : s[g]) || "0"
              )),
                a.isZeroValue(m) &&
                  (null == (u = this.quote) ? void 0 : u.five_trans) &&
                  (this.quote.five_trans[g] = "-"),
                (m = parseFloat(
                  (null ==
                  (l = null == (o = this.quote) ? void 0 : o.five_trans)
                    ? void 0
                    : l[y]) || "0"
                )),
                a.isZeroValue(m) &&
                  (null == (c = this.quote) ? void 0 : c.five_trans) &&
                  (this.quote.five_trans[y] = "-");
            }
            var E = v + h;
            return (
              0 === E && (E = 1),
              (d.buy = (100 * parseFloat(String(v / E))).toFixed(2)),
              (d.sell = (100 * parseFloat(String(h / E))).toFixed(2)),
              ("0.00" === d.buy || Number.isNaN(d.buy)) && (d.buy = "0"),
              ("0.00" === d.sell || Number.isNaN(d.sell)) && (d.sell = "0"),
              {
                percent: d,
                fiveTrans:
                  (null == (_ = this.quote) ? void 0 : _.five_trans) || {},
                yestodayPrice: T,
              }
            );
          },
        },
        {
          key: "isNewStock",
          get: function () {
            return (
              [
                o.NEWSTOCK_STATUS.PURCHASE_NOT_START,
                o.NEWSTOCK_STATUS.PURCHASE,
              ].indexOf(this.secu_info.status) > -1
            );
          },
        },
        {
          key: "disabled",
          get: function () {
            return [o.STOCK_STATE.DELISTED].includes(this.secu_info.status);
          },
        },
        {
          key: "newstockStatusText",
          get: function () {
            var t;
            return ((t = {}),
            e(t, o.NEWSTOCK_STATUS.PURCHASE, "马上申购"),
            e(t, o.NEWSTOCK_STATUS.PURCHASE_ENDED, "查看新股"),
            e(t, o.NEWSTOCK_STATUS.PURCHASE_NOT_START, "查看新股"),
            t)[this.secu_info.status];
          },
        },
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 10, DOWN: -10 };
          },
        },
        { key: "fetchRiskLimit", value: function (e, t) {} },
        {
          key: "hasPurchasePermission",
          value: function (e, t) {
            return this.isST && !e.authorities.st
              ? [
                  !1,
                  {
                    retcode: "no_st_auth",
                    retmsg: "当前未开通".concat(
                      this.marketName,
                      "市ST交易权限。请开通权限后，继续交易ST股票。"
                    ),
                  },
                ]
              : [!0];
          },
        },
        {
          key: "hasTradeRisk",
          value: function (e) {
            var t,
              i,
              n,
              r,
              s = (null == (t = this.secu_quote) ? void 0 : t.dqj) || "",
              u =
                (null == (n = null == (i = this.quote) ? void 0 : i.info)
                  ? void 0
                  : n.market) || "",
              a = (null == (r = this.quote) ? void 0 : r.stock_cls) || "",
              c =
                [o.MARKET.SA, o.MARKET.HA].includes(u) &&
                [l.MARKET_CLASS.A, l.MARKET_CLASS.S, l.MARKET_CLASS.C].includes(
                  a
                );
            return e.tradeNoticeInfo
              ? [!0, { retcode: "broker-stock-risk" }]
              : this.isDelistingArrPeriod && e.needDelistingArrangementTips
              ? [!0, { retcode: "delisting-arrangement-risk" }]
              : +s < 1 && c && e.needOneYuanRiskTips
              ? [!0, { retcode: "less-than-one-stock-risk" }]
              : +s <= 1.1 && c && e.needOneYuanRiskTips
              ? [!0, { retcode: "less-than-one-point-one-stock-risk" }]
              : this.isST && e.needSTRiskTips
              ? [!0, { retcode: "st-stock-risk" }]
              : [!1];
          },
        },
        {
          key: "isPriceMatchMinimumTickSize",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isInLimitPriceRange",
          value: function (e) {
            var t,
              i = (null == (t = this.quote) ? void 0 : t.info) || {},
              n = i.price_ceiling,
              r = void 0 === n ? "" : n,
              s = i.price_floor,
              u = void 0 === s ? "" : s;
            return "".concat(r, " ").concat(u).indexOf("-") >= 0 ||
              parseFloat(r) === parseFloat(u)
              ? [!0]
              : +e > +r
              ? [
                  !1,
                  { retmsg: "委托价高于涨停价".concat(r, "元，交易可能无效") },
                ]
              : +e < +u
              ? [
                  !1,
                  { retmsg: "委托价低于跌停价".concat(u, "元，交易可能无效") },
                ]
              : [!0];
          },
        },
        {
          key: "isInLimitChgRange",
          value: function (e) {
            var t, i, n, r;
            if (
              "--" ===
                (null == (i = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : i.price_ceiling) ||
              "--" ===
                (null == (r = null == (n = this.quote) ? void 0 : n.info)
                  ? void 0
                  : r.price_floor)
            )
              return [!0];
            var s = this.getLimitChg(),
              u = s.DOWN - 0.09,
              o = s.UP + 0.09;
            return e >= u && e <= o
              ? [!0]
              : [!1, { retcode: "not-in-limit-chg-change" }];
          },
        },
        {
          key: "isAfterBuyPriceMatch",
          value: function (e) {
            var t,
              i = ((null == (t = this.quote) ? void 0 : t.quote) || {}).dqj,
              n = void 0 === i ? "" : i;
            return n && this.isAfterMarketState && +e < +n
              ? [
                  !1,
                  { retmsg: "委托价低于收盘价".concat(n, "元，交易可能无效") },
                ]
              : [!0];
          },
        },
        {
          key: "isAfterSellPriceMatch",
          value: function (e) {
            var t,
              i = ((null == (t = this.quote) ? void 0 : t.quote) || {}).dqj,
              n = void 0 === i ? "" : i;
            return n && this.isAfterMarketState && +e > +n
              ? [!1, { retmsg: "委托价高于收盘价".concat(n, "，交易可能无效") }]
              : [!0];
          },
        },
        {
          key: "calcPriceCageBaseValue",
          value: function () {
            var e,
              t,
              i,
              n,
              r,
              s,
              u,
              o,
              l =
                null == (t = null == (e = this.quote) ? void 0 : e.five_trans)
                  ? void 0
                  : t.mrjg1,
              c =
                null == (n = null == (i = this.quote) ? void 0 : i.five_trans)
                  ? void 0
                  : n.mcjg1,
              _ =
                null == (s = null == (r = this.quote) ? void 0 : r.quote)
                  ? void 0
                  : s.dqj,
              d =
                null == (o = null == (u = this.quote) ? void 0 : u.quote)
                  ? void 0
                  : o.zsj;
            return a.isZeroValue(l) || a.isZeroValue(c)
              ? !a.isZeroValue(l) && a.isZeroValue(c)
                ? { buy: +l, sell: +l }
                : a.isZeroValue(l) && !a.isZeroValue(c)
                ? { buy: +c, sell: +c }
                : a.isZeroValue(_)
                ? a.isZeroValue(d)
                  ? {}
                  : { buy: +d, sell: +d }
                : { buy: +_, sell: +_ }
              : { buy: +c, sell: +l };
          },
        },
        {
          key: "calcPriceCageLimit",
          value: function () {
            var e = this.calcPriceCageBaseValue(),
              t = e.buy,
              i = e.sell;
            return {
              upPrice:
                void 0 === t
                  ? 1 / 0
                  : Math.max(
                      u.__CJS__export_mul__(t, 1.02),
                      u.__CJS__export_add__(
                        t,
                        u.__CJS__export_mul__(10, this.spread)
                      )
                    ),
              downPrice:
                void 0 === i
                  ? -1 / 0
                  : Math.min(
                      u.__CJS__export_mul__(i, 0.98),
                      u.__CJS__export_reduce__(
                        i,
                        u.__CJS__export_mul__(10, this.spread)
                      )
                    ),
            };
          },
        },
        {
          key: "isBuyPriceMatchPriceCageLimit",
          value: function (e) {
            var t = this.calcPriceCageLimit().upPrice,
              i = Number(Number(t).toFixed(this.spreadAcc));
            return +e > i
              ? [
                  !1,
                  {
                    retmsg: "委托价高于即时价格上限".concat(
                      i,
                      "元，交易可能无效"
                    ),
                    retcode: "price_cage_error",
                  },
                ]
              : [!0];
          },
        },
        {
          key: "isSellPriceMatchPriceCageLimit",
          value: function (e) {
            var t = this.calcPriceCageLimit().downPrice,
              i = Number(Number(t).toFixed(this.spreadAcc));
            return +e < i
              ? [
                  !1,
                  {
                    retmsg: "委托价低于即时价格下限".concat(
                      i,
                      "元，交易可能无效"
                    ),
                    retcode: "price_cage_error",
                  },
                ]
              : [!0];
          },
        },
        {
          key: "floorAmountByUnit",
          value: function (e) {
            var t,
              i,
              n =
                null == (i = null == (t = this.quote) ? void 0 : t.info)
                  ? void 0
                  : i.trd_unit;
            return u.__CJS__export_mul__(
              parseInt(u.__CJS__export_div__(e, n), 10),
              n
            );
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
                  : i.trd_unit) || 0
              )
            );
          },
        },
        {
          key: "getMaxSellTips",
          value: function (e) {
            if (e.maxSellHasOdd)
              return {
                retcode: "amount_partial_max_hasodd",
                retmsg: "根据交易所规则，卖出只能为"
                  .concat(this.minAmount, "的整数倍或者全仓卖出（")
                  .concat(e.max_sell_qty)
                  .concat(this.quantityUnit, "），请调整数量后再试"),
                data: { suggestAmount: e.max_sell_qty },
              };
            var t = parseInt(
                u.__CJS__export_div__(+e.amount, this.minAmount),
                10
              ),
              i = u.__CJS__export_mul__(
                u.__CJS__export_add__(t, 1),
                this.minAmount
              );
            return {
              retcode: "amount_partial_max_noodd",
              retmsg: "根据交易所规则，交易数量需为"
                .concat(this.minAmount, "的整倍数。")
                .concat(e.amount)
                .concat(this.quantityUnit, "无法直接卖出，可调整数量为")
                .concat(i)
                .concat(this.quantityUnit, "后再试"),
              data: { suggestAmount: i },
            };
          },
        },
        {
          key: "getAmountMinLimit",
          value: function () {
            return this.minAmount;
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
              n = this.getAmountMinLimit();
            return (
              (t = +e - (+e % n)) === +e && (t = +e - n),
              (i = +e - (+e % n)),
              { minusStep: +e - t, plusStep: (i += n) - +e }
            );
          },
        },
        {
          key: "calcPriceStep",
          value: function (e) {
            return this.spread;
          },
        },
        {
          key: "getMinAmountTips",
          value: function () {
            return "数量需为".concat(
              this.minAmount,
              "或其整倍数,如需交易零股请手动输入"
            );
          },
        },
        {
          key: "getMarketTips",
          value: function (e) {
            return (e && this.marketTips[e]) || "";
          },
        },
        {
          key: "calcTradeFee",
          value: function (e, t) {
            var i,
              n,
              r = a.getMarketFee(
                null == (n = null == (i = this.quote) ? void 0 : i.info)
                  ? void 0
                  : n.market
              ),
              s = Math.max(
                u.__CJS__export_mul__(e, r.commission),
                r.lowestCommission
              ),
              o = u.__CJS__export_mul__(e, r.transferFee);
            return u.__CJS__export_add__(s, o);
          },
        },
      ],
      [
        {
          key: "fetchQuotes",
          value: function (e, t) {
            return e.fetchQuotes(t);
          },
        },
      ]
    ),
    n
  );
})();
