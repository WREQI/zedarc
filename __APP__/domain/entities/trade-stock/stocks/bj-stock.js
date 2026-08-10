var t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  e = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var r = require("./a-stock.js"),
  u = require("../../../../common/vendor.js"),
  o = require("../../../../config/enum/trade.js");
require("../../../../service/broker.js");
var a = require("../../../../config/broker/11100/index.js"),
  s = (function (r) {
    n(c, r);
    var s = i(c);
    function c() {
      return t(this, c), s.apply(this, arguments);
    }
    return (
      e(c, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "根据交易规则，股票最少交易100股";
          },
        },
        {
          key: "minAmount",
          get: function () {
            return 100;
          },
        },
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 30, DOWN: -30 };
          },
        },
        {
          key: "hasPurchasePermission",
          value: function (t) {
            return t.authorities.bj === o.BJAccountStatus.opening
              ? [
                  !1,
                  {
                    retcode: "bj_auth_opening",
                    retmsg: a.brokerConfig.trade.checkBJAuthTips.BJAuthOpening,
                  },
                ]
              : t.authorities.bj === o.BJAccountStatus.not_open
              ? [
                  !1,
                  {
                    retcode: "bj_auth_notopen",
                    retmsg: a.brokerConfig.trade.checkBJAuthTips.noBJAuthTips,
                  },
                ]
              : [!0];
          },
        },
        {
          key: "hasTradeRisk",
          value: function () {
            return [!1];
          },
        },
        {
          key: "calcPriceCageLimit",
          value: function () {
            var t = this.calcPriceCageBaseValue(),
              e = t.buy,
              n = t.sell;
            return {
              upPrice:
                void 0 === e
                  ? 1 / 0
                  : Math.max(
                      u.__CJS__export_mul__(e, 1.05),
                      u.__CJS__export_add__(
                        e,
                        u.__CJS__export_mul__(10, this.spread)
                      )
                    ),
              downPrice:
                void 0 === n
                  ? -1 / 0
                  : Math.min(
                      u.__CJS__export_mul__(n, 0.95),
                      u.__CJS__export_reduce__(
                        n,
                        u.__CJS__export_mul__(10, this.spread)
                      )
                    ),
            };
          },
        },
        {
          key: "floorAmountByUnit",
          value: function (t) {
            return (
              Math.floor(+t) >= this.minAmount ? Math.floor(+t) : 0
            ).toString();
          },
        },
        {
          key: "calcOddLot",
          value: function (t) {
            var e,
              n,
              i = +(
                (null == (n = null == (e = this.quote) ? void 0 : e.info)
                  ? void 0
                  : n.trd_unit) || 1
              );
            return +t >= this.minAmount ? +t % i : +t % this.minAmount;
          },
        },
        {
          key: "getMaxSellTips",
          value: function (t) {
            return t.maxSellHasOdd
              ? {
                  retcode: "bj_onetime_sell",
                  retmsg: "根据交易所规则，碎股的数量（"
                    .concat(t.max_sell_qty)
                    .concat(
                      this.quantityUnit,
                      "）需要全部卖出不可拆分，请调整数量后再试"
                    ),
                  data: { suggestAmount: t.max_sell_qty },
                }
              : {
                  retcode: "bj_less_min_amount",
                  retmsg: "根据交易所规则，北交所股票买卖要求最少"
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
          value: function (t) {
            return 1 / 0;
          },
        },
        {
          key: "calcStep",
          value: function (t) {
            var e,
              n,
              i = Number(
                (null == (n = null == (e = this.quote) ? void 0 : e.info)
                  ? void 0
                  : n.trd_unit) || 1
              );
            return {
              minusStep: +t - (+t > this.minAmount ? +t - i : 0 == +t ? -i : 0),
              plusStep:
                (0 <= +t && +t < this.minAmount ? this.minAmount : +t + i) - +t,
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
      c
    );
  })(r.IStock);
exports.BJStock = s;
