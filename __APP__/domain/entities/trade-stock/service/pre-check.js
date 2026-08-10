require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var c = Object.defineProperty,
  n = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? c(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != s(t) ? t + "" : t, r),
      r
    );
  },
  u = require("../../../../common/vendor.js"),
  a = require("../../../../utils/market.js"),
  h = require("../../../../config/enum.js");
require("../stock-order.js"), require("../condition-order.js");
var l = require("../../../../model/trade/conditions/price-utils.js");
require("../../../../service/broker.js");
var d = require("../../../../config/broker/11100/index.js"),
  k = (function () {
    function e(t, r, o) {
      i(this, e),
        n(this, "order"),
        n(this, "stock"),
        n(this, "account"),
        n(this, "auth"),
        (this.order = t),
        (this.account = r),
        (this.auth = o);
    }
    return (
      o(e, [
        {
          key: "setStock",
          value: function (e) {
            this.stock = e;
          },
        },
        {
          key: "checkShareholderCards",
          value: function () {
            var e, t;
            return this.stock &&
              (null == (t = null == (e = this.stock.quote) ? void 0 : e.info)
                ? void 0
                : t.market)
              ? this.account.checkShareHolders(this.stock.quote.info.market)
              : [!0];
          },
        },
        {
          key: "checkAuth",
          value: function (e) {
            return this.stock.hasPurchasePermission(this.auth, e);
          },
        },
        {
          key: "checkSuitability",
          value: function () {
            return this.auth.checkSuitability();
          },
        },
        {
          key: "checkTradeRisk",
          value: function () {
            var e = this.stock.hasTradeRisk(this.auth),
              t = r(e, 2);
            return [!t[0], t[1]];
          },
        },
        {
          key: "checkPriceMatchMinimumTickSize",
          value: function () {
            var e, t, r;
            return (
              null == (e = this.stock) ? void 0 : e.isPriceMatchMinimumTickSize
            )
              ? null == (r = (t = this.stock).isPriceMatchMinimumTickSize)
                ? void 0
                : r.call(t, this.order.price)
              : [!0];
          },
        },
        {
          key: "checkPriceIsInLimitPriceRange",
          value: function () {
            return this.stock.isInLimitPriceRange(this.order.price);
          },
        },
        {
          key: "isAfterBuyPriceMatch",
          value: function () {
            return this.stock.isAfterMarketState
              ? this.stock.isAfterBuyPriceMatch(this.order.price)
              : [!0];
          },
        },
        {
          key: "isAfterSellPriceMatch",
          value: function () {
            return this.stock.isAfterMarketState
              ? this.stock.isAfterSellPriceMatch(this.order.price)
              : [!0];
          },
        },
        {
          key: "needCheckPriceCageLimit",
          value: function () {
            var e, t;
            return (
              [
                h.MARKET_STATE.MORNING_OPENED,
                h.MARKET_STATE.AFTERNOON_OPENED,
              ].indexOf(this.stock.market_state) > -1 &&
              (null == (e = this.stock.quote) ? void 0 : e.info.status) !==
                h.STOCK_STATE.SUSPENSION &&
              -1 ===
                [a.MARKET_CLASS.F, a.MARKET_CLASS.B].indexOf(
                  null == (t = this.stock.quote) ? void 0 : t.stock_cls
                )
            );
          },
        },
        {
          key: "isBuyPriceMatchPriceCageLimit",
          value: function () {
            return this.needCheckPriceCageLimit()
              ? this.stock.isBuyPriceMatchPriceCageLimit(this.order.price)
              : [!0];
          },
        },
        {
          key: "isSellPriceMatchPriceCageLimit",
          value: function () {
            return this.needCheckPriceCageLimit()
              ? this.stock.isSellPriceMatchPriceCageLimit(this.order.price)
              : [!0];
          },
        },
        {
          key: "checkOrderPurchaseQuantity",
          value: function () {
            if (this.stock.skipAmountCheck) return [!0];
            var e = this.stock.getAmountMinLimit();
            if (+this.order.amount < e)
              return [
                !1,
                { retmsg: this.stock.AmountMinLimitRetMsg, stop: !0 },
              ];
            var t = this.stock.getAmountMaxLimit(this.order.strategy);
            return +this.order.amount > t
              ? [
                  !1,
                  {
                    retmsg: "你已超过单笔交易最大数量（"
                      .concat(t / 1e4, "万")
                      .concat(this.stock.quantityUnit, "），交易可能无效"),
                  },
                ]
              : this.stock.calcOddLot(this.order.amount) > 0
              ? [!1, { retmsg: this.stock.AmountMinLimitRetMsg, stop: !0 }]
              : [!0];
          },
        },
        {
          key: "checkSellAmountInMaxLimit",
          value: function () {
            var e = this.stock.getAmountMaxLimit(this.order.strategy);
            return +this.order.amount > e
              ? [
                  !1,
                  {
                    retcode: "sell-amount-over-limit",
                    retmsg: "你已超过单笔交易最大数量（".concat(
                      e / 1e4,
                      "万股），交易可能无效"
                    ),
                  },
                ]
              : [!0];
          },
        },
        {
          key: "checkPartialAmount",
          value: function () {
            var e, t, r, i;
            if (this.stock.isSpecialGovernmentBonds) return [!0];
            if (this.order.orderType === h.ORDER_TYPES.OLO) return [!0];
            var o = this.stock.calcOddLot(this.order.amount),
              s = this.stock.calcOddLot(this.account.max_sell_qty);
            return o > 0 && s > 0
              ? [
                  o === s,
                  null == (t = (e = this.stock).getMaxSellTips)
                    ? void 0
                    : t.call(e, {
                        maxSellHasOdd: !0,
                        amount: this.order.amount,
                        max_sell_qty: this.account.max_sell_qty,
                      }),
                ]
              : o > 0 && 0 === s
              ? [
                  !1,
                  null == (i = (r = this.stock).getMaxSellTips)
                    ? void 0
                    : i.call(r, {
                        maxSellHasOdd: !1,
                        amount: this.order.amount,
                        max_sell_qty: this.account.max_sell_qty,
                      }),
                ]
              : [!0];
          },
        },
        {
          key: "checkAccountMoney",
          value: function () {
            var e, t, i;
            if (
              (null == (e = this.stock) ? void 0 : e.isGGT) &&
              +(null == (t = this.order) ? void 0 : t.amount) <=
                +(null == (i = this.account) ? void 0 : i.max_buy_qty)
            )
              return [!0];
            var o = this.account.checkAccountMoney(this.order, this.stock),
              s = r(o, 2),
              c = s[0],
              n = s[1];
            if (!c) {
              var a = u.__CJS__export_div__(
                Math.ceil(
                  u.__CJS__export_mul__(
                    null == n ? void 0 : n.data.diffMoney,
                    100
                  )
                ),
                100,
                2
              );
              return [
                !1,
                {
                  retcode: "money_not_enough",
                  retmsg: "交易可用资金相差"
                    .concat(a, "元（含预估手续费），请转入资金后继续交易")
                    .concat(d.brokerConfig.trade.fundRefreshTips),
                  data: { needMoney: a },
                  stop: !0,
                },
              ];
            }
            return +this.order.amount > +this.account.max_buy_qty
              ? [
                  !1,
                  {
                    retcode: "max_amount_not_enough",
                    retmsg:
                      "当您的委托数量大于最大可买数量，即使可用资金大于订单金额，由于交易费用预扣，可用资金无法覆盖买入金额+预扣费用，具体可买数量和费用规则请咨询您的开户券商。",
                    stop: !0,
                  },
                ]
              : [!0];
          },
        },
        {
          key: "checkOrderAmountCanSell",
          value: function () {
            return this.account.checkHoldQty()
              ? +this.order.amount <= +this.account.max_sell_qty
                ? [!0]
                : +this.order.amount > +this.account.hold_qty
                ? [!1, { retcode: "hold_qty", stop: !0 }]
                : 0 == +this.account.route_qty
                ? [!1, { retcode: "route_qty", stop: !0 }]
                : Number(this.account.hold_qty) ===
                  Number(this.account.route_qty) +
                    Number(this.account.max_sell_qty)
                ? 0 == +this.account.max_sell_qty
                  ? [!1, { retcode: "max_sell_qty", stop: !0 }]
                  : [!1, { retcode: "sellable", stop: !0 }]
                : Number(this.order.amount) >
                  Number(this.account.route_qty) +
                    Number(this.account.max_sell_qty)
                ? 0 == +this.account.max_sell_qty
                  ? [!1, { retcode: "max_sell_qty_1", stop: !0 }]
                  : [!1, { retcode: "sellable_1", stop: !0 }]
                : 0 == +this.account.max_sell_qty
                ? [!1, { retcode: "max_sell_qty_2", stop: !0 }]
                : [!1, { retcode: "sellable_2", stop: !0 }]
              : [!1, { retcode: "not_hold", stop: !0 }];
          },
        },
        {
          key: "checkAmountNotEmpty",
          value: function () {
            return "" !== this.order.amount &&
              "0" !== this.order.amount &&
              +this.order.amount
              ? [!0]
              : [!1, { retcode: "amount_empty" }];
          },
        },
        {
          key: "checkGGTStockholderCode",
          value: function () {
            var e;
            return (null == (e = this.stock) ? void 0 : e.isGGT)
              ? this.account.stockholder_code
                ? [!0]
                : [
                    !1,
                    {
                      retcode: "ggt_stockholder_empty",
                      retmsg: "港股通股东卡未传递，请重新选择股东账户",
                    },
                  ]
              : [!0];
          },
        },
      ]),
      e
    );
  })();
(exports.ConditionOrderCheckService = (function (s) {
  e(n, k);
  var c = t(n);
  function n() {
    return i(this, n), c.apply(this, arguments);
  }
  return (
    o(n, [
      {
        key: "checkInputComplete",
        value: function () {
          for (
            var e = [
                { key: this.order.condPrice, text: "触发价" },
                { key: this.order.price, text: "自定价" },
                { key: this.order.amount, text: "数量" },
              ],
              t = 0;
            t < e.length;
            t++
          )
            if ("0" === e[t].key || 0 == +e[t].key)
              return [!1, { retmsg: "".concat(e[t].text, "不能为0") }];
          return [!0];
        },
      },
      {
        key: "checkIsInLimitChgRange",
        value: function () {
          if (0 == +this.order.price || 0 == +this.order.condPrice) return [!0];
          var e = this.order.calcPriceAndCondPriceChg(),
            t = this.stock.isInLimitChgRange(e),
            i = r(t, 2),
            o = i[0],
            s = i[1];
          return o || (s.data = { over: e }), [o, s];
        },
      },
      {
        key: "checkCondPrice",
        value: function () {
          var e,
            t,
            r =
              (null == (t = null == (e = this.stock) ? void 0 : e.secu_quote)
                ? void 0
                : t.dqj) || 0;
          return this.order.tradeType === h.ACTION.BUY &&
            r &&
            u.__CJS__export_reduce__(r, this.order.condPrice) <= 0
            ? [
                !1,
                {
                  retmsg: "当前股价≤您设置买入条件单的触发价，创建后会立即触发",
                },
              ]
            : this.order.tradeType === h.ACTION.SELL &&
              r &&
              u.__CJS__export_reduce__(r, this.order.condPrice) >= 0
            ? [
                !1,
                {
                  retmsg: "当前股价≥您设置卖出条件单的触发价，创建后会立即触发",
                },
              ]
            : [!0];
        },
      },
      {
        key: "checkValidDay",
        value: function (e, t) {
          var r = u.dayjs(e);
          if (this.order.isUpdate && this.order.endTime) {
            var i = u.dayjs(1e3 * this.order.endTime);
            if (r.isAfter(i))
              return [
                !1,
                {
                  retcode: "order-status-change",
                  retmsg: "该条件单状态可能已变更，您可确认后重新创建",
                },
              ];
          }
          if (
            this.order.validDayEnum === h.ORDER_VALIDATES.TODAY &&
            !this.order.isInvestCondOrder
          ) {
            var o = u
                .dayjs(e)
                .set("hour", 15)
                .set("minute", 0)
                .set("second", 0),
              s = r.isBefore(o);
            if (!t || !s)
              return [
                !1,
                {
                  retcode: "not-trade-time",
                  retmsg: "该条件单创建后无法触发，请在交易日"
                    .concat(15, ":00前进行")
                    .concat(this.order.isUpdate ? "修改" : "创建"),
                },
              ];
          }
          return [!0];
        },
      },
      {
        key: "investCondStockCheck",
        value: function () {
          var e,
            t,
            r,
            i = (d.brokerConfig.trade || {}).investCond,
            o = void 0 === i ? {} : i,
            s = d.brokerConfig.trade.condUnsupportType || [],
            c = this.stock.isST && s.includes("ST"),
            n = this.checkMarket();
          return n && !n[0] && (null == (e = n[1]) ? void 0 : e.retmsg)
            ? n[1].retmsg
            : (null == (t = this.stock.quote) ? void 0 : t.stock_cls) &&
              (null == (r = null == o ? void 0 : o.supportType)
                ? void 0
                : r.length) > 0 &&
              !o.supportType.includes(this.stock.quote.stock_cls)
            ? o.errorTips || "定期定投不支持当前标的"
            : c
            ? "定期定投不支持当前标的"
            : "";
        },
      },
      {
        key: "checkInvestCond",
        value: function () {
          var e = this.investCondStockCheck();
          if (e) return [!1, { retmsg: e }];
          if (!this.order.investPeriod)
            return [!1, { retmsg: "请选择定投周期" }];
          if (!this.order.investTime) return [!1, { retmsg: "请选择委托时间" }];
          if (this.order.isInvestAmountMode && !this.order.maxAmount)
            return [!1, { retmsg: "请输入委托金额" }];
          if ("" === this.order.maxAmount) {
            if ("" === this.order.investQuantity)
              return [!1, { retmsg: "请输入委托数量" }];
            if (Number(this.order.investQuantity) % 100 != 0)
              return [!1, { retmsg: "委托数量需为100的整数倍" }];
          }
          return this.order.validDayEnum || this.order.condId
            ? this.order.upperLimit &&
              this.order.lowerLimit &&
              +this.order.lowerLimit >= +this.order.upperLimit
              ? [!1, { retmsg: "价格区间下限需低于价格区间上限，请重新调整" }]
              : [!0]
            : [!1, { retmsg: "请选择订单有效期" }];
        },
      },
      {
        key: "checkStockStatus",
        value: function () {
          var e;
          return l.checkStockStatus(
            null == (e = this.stock) ? void 0 : e.quote
          );
        },
      },
      {
        key: "checkMarket",
        value: function () {
          var e, t, r;
          return l.checkMarket(
            null ==
              (r =
                null == (t = null == (e = this.stock) ? void 0 : e.quote)
                  ? void 0
                  : t.info)
              ? void 0
              : r.market
          );
        },
      },
    ]),
    n
  );
})()),
  (exports.OrderCheckService = (function (r) {
    e(c, k);
    var s = t(c);
    function c() {
      return i(this, c), s.apply(this, arguments);
    }
    return (
      o(c, [
        {
          key: "checkPrice",
          value: function () {
            return this.order.checkPrice();
          },
        },
      ]),
      c
    );
  })());
