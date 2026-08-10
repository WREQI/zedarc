var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  u = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != s(t) ? t + "" : t, i),
      i
    );
  },
  c = require("../../../config/enum.js"),
  y = require("../../../config/enum/condition.js"),
  l = require("./ConditionBase.js"),
  o = require("../../../domain/entities/utils.js"),
  p = require("./utils.js"),
  h = require("../utils.js"),
  T = (function (s, a, l, o) {
    r(d, s);
    var T = n(d);
    function d() {
      var t;
      return (
        e(this, d),
        (t = T.apply(this, arguments)),
        u(i(t), "costPrice", "0.00"),
        u(i(t), "lastestBasePrice", "0.00"),
        u(i(t), "endTime"),
        u(i(t), "basePrice", "0.00"),
        u(i(t), "basePriceStrategy", y.BasePriceStrategy.DQJ),
        u(i(t), "gridType", y.GridType.Percent),
        u(i(t), "upStep", ""),
        u(i(t), "downStep", ""),
        u(i(t), "sellPriceType", y.PriceType.BuyOne),
        u(i(t), "buyPriceType", y.PriceType.SellOne),
        u(i(t), "quantity", ""),
        u(i(t), "validDayEnum", c.ORDER_VALIDATES.YEAR),
        t
      );
    }
    return (
      t(d, [
        {
          key: a,
          get: function () {
            var e = p.calcExpireDay(this.validDayEnum);
            return e
              ? "".concat(e, " 15:00过期")
              : this.endTime
              ? "".concat(h.formatConditionExpireTime(this.endTime), "过期")
              : "";
          },
        },
        {
          key: l,
          get: function () {
            var e = this,
              t = this.getStrategyRange().find(function (t) {
                return t.value === e.basePriceStrategy;
              });
            return (null == t ? void 0 : t.text) || "";
          },
        },
        {
          key: o,
          get: function () {
            var e = this,
              t = y.GridTypeRange.find(function (t) {
                return t.value === e.gridType;
              });
            return (null == t ? void 0 : t.text) || "";
          },
        },
        {
          key: "reset",
          value: function () {
            (this.costPrice = "0.00"),
              (this.lastestBasePrice = "0.00"),
              (this.basePrice = "0.00"),
              (this.basePriceStrategy = y.BasePriceStrategy.DQJ),
              (this.gridType = y.GridType.Percent),
              (this.upStep = ""),
              (this.downStep = ""),
              (this.sellPriceType = y.PriceType.BuyOne),
              (this.buyPriceType = y.PriceType.SellOne),
              (this.quantity = ""),
              (this.validDayEnum = c.ORDER_VALIDATES.YEAR);
          },
        },
        {
          key: "getStrategyRange",
          value: function () {
            return this.isUpdate
              ? y.PriceStrategyUpdateRange
              : y.PriceStrategyRange;
          },
        },
        {
          key: "setCostPrice",
          value: function (e) {
            this.costPrice = e || "0.00";
          },
        },
        {
          key: "setEndTime",
          value: function (e) {
            this.endTime = e;
          },
        },
        {
          key: "setBasePrice",
          value: function (e) {
            this.basePrice = e;
          },
        },
        {
          key: "setLatestBasePrice",
          value: function (e) {
            this.lastestBasePrice = e || "0.00";
          },
        },
        {
          key: "setBasePriceStrategy",
          value: function (e) {
            this.basePriceStrategy = e;
          },
        },
        {
          key: "setGridType",
          value: function (e) {
            this.gridType !== e && (this.setUpStep(""), this.setDownStep("")),
              (this.gridType = e);
          },
        },
        {
          key: "setUpStep",
          value: function (e) {
            this.upStep = e;
          },
        },
        {
          key: "setDownStep",
          value: function (e) {
            this.downStep = e;
          },
        },
        {
          key: "setSellPriceType",
          value: function (e) {
            this.sellPriceType = e;
          },
        },
        {
          key: "setBuyPriceType",
          value: function (e) {
            this.buyPriceType = e;
          },
        },
        {
          key: "setQuatity",
          value: function (e) {
            this.quantity = e;
          },
        },
        {
          key: "setValidDayEnum",
          value: function (e) {
            this.validDayEnum = e;
          },
        },
      ]),
      d
    );
  })(
    l.ConditionBase,
    o.isMp ? "_timeText" : "timeText",
    o.isMp ? "_basePriceStrategyText" : "basePriceStrategyText",
    o.isMp ? "_gridTypeText" : "gridTypeText"
  ),
  d = o.isMp
    ? new Proxy(T, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            ["timeText", "basePriceStrategyText", "gridTypeText"].forEach(
              function (t) {
                Object.defineProperty(e, t, {
                  get: function () {
                    return this["_".concat(t)];
                  },
                  enumerable: !0,
                });
              }
            ),
            e
          );
        },
      })
    : T;
exports.GridCondition = d;
