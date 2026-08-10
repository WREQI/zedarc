var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var a = Object.defineProperty,
  l = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != u(t) ? t + "" : t, r),
      r
    );
  },
  o = (function (u) {
    n(o, u);
    var a = i(o);
    function o() {
      var t;
      return (
        e(this, o),
        (t = a.apply(this, arguments)),
        l(r(t), "quantityUnit", ""),
        l(r(t), "stockTypeName", ""),
        l(r(t), "skipAmountCheck", !0),
        l(r(t), "skipCalcMaxBuy", !0),
        t
      );
    }
    return (
      t(o, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "数量不符合交易规则";
          },
        },
        {
          key: "supportAfterTrade",
          get: function () {
            return "all";
          },
        },
        {
          key: "hasTradeRisk",
          value: function (e) {
            return [!1];
          },
        },
        {
          key: "isInLimitPriceRange",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isInLimitChgRange",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isAfterBuyPriceMatch",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isAfterSellPriceMatch",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isBuyPriceMatchPriceCageLimit",
          value: function (e) {
            return [!0];
          },
        },
        {
          key: "isSellPriceMatchPriceCageLimit",
          value: function (e) {
            return [!0];
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
          key: "calcOddLot",
          value: function (e) {
            return 0;
          },
        },
        {
          key: "getMinAmountTips",
          value: function () {
            return "您可手动输入数量";
          },
        },
      ]),
      o
    );
  })(require("./a-stock.js").IStock);
exports.UnKnowStock = o;
