var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var r = Object.defineProperty,
  a = function (e, t, i) {
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
      })(e, "symbol" != u(t) ? t + "" : t, i),
      i
    );
  },
  l = require("../../../config/enum.js"),
  y = require("../../../config/enum/condition.js"),
  c = require("./ConditionBase.js"),
  o = require("../../../domain/entities/utils.js"),
  p = require("./utils.js"),
  T = require("../utils.js"),
  h = (function (u, r, c, o) {
    n(d, u);
    var h = s(d);
    function d() {
      var t;
      return (
        e(this, d),
        (t = h.apply(this, arguments)),
        a(i(t), "costPrice", "0.00"),
        a(i(t), "lastestBasePrice", "0.00"),
        a(i(t), "endTime"),
        a(i(t), "basePrice", ""),
        a(i(t), "zyCondType", y.LimitType.Percent),
        a(i(t), "zyCondValue", ""),
        a(i(t), "zyCondPrice", ""),
        a(i(t), "zsCondType", y.LimitType.Percent),
        a(i(t), "zsCondValue", ""),
        a(i(t), "zsCondPrice", ""),
        a(i(t), "orderPriceType", y.PriceType.BuyOne),
        a(i(t), "quantity", ""),
        a(i(t), "validDayEnum", l.ORDER_VALIDATES.YEAR),
        a(i(t), "zyPullbackFlag", !1),
        a(i(t), "zyPullbackType", y.LimitType.Percent),
        a(i(t), "zyPullbackValue", ""),
        a(i(t), "basePriceStrategyText", "基准价"),
        a(i(t), "subBasePriceStrategyText", "当前持仓成本"),
        t
      );
    }
    return (
      t(d, [
        {
          key: r,
          get: function () {
            var e = p.calcExpireDay(this.validDayEnum);
            return e
              ? "".concat(e, " 15:00过期")
              : this.endTime
              ? "".concat(T.formatConditionExpireTime(this.endTime), "过期")
              : "";
          },
        },
        {
          key: c,
          get: function () {
            var e = this,
              t = y.LimitTypeRange.find(function (t) {
                return t.value === e.zyCondType;
              });
            return (null == t ? void 0 : t.text) || "";
          },
        },
        {
          key: o,
          get: function () {
            var e = this,
              t = y.LimitTypeRange.find(function (t) {
                return t.value === e.zsCondType;
              });
            return (null == t ? void 0 : t.text) || "";
          },
        },
        {
          key: "reset",
          value: function () {
            (this.costPrice = "0.00"),
              (this.lastestBasePrice = "0.00"),
              (this.basePrice = ""),
              (this.zyCondType = y.LimitType.Percent),
              (this.zsCondType = y.LimitType.Percent),
              (this.zyCondPrice = ""),
              (this.zsCondPrice = ""),
              (this.zyCondValue = ""),
              (this.zsCondValue = ""),
              (this.orderPriceType = y.PriceType.BuyOne),
              (this.quantity = ""),
              (this.validDayEnum = l.ORDER_VALIDATES.YEAR),
              (this.zyPullbackFlag = !1),
              (this.zyPullbackType = y.LimitType.Percent),
              (this.zyPullbackValue = "");
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
          key: "setZyCondType",
          value: function (e) {
            this.zyCondType !== e &&
              (this.setZyCondValue(""), this.setZyPullbackValue("")),
              (this.zyCondType = e),
              (this.zyPullbackType = e);
          },
        },
        {
          key: "setZyCondPrice",
          value: function (e) {
            this.zyCondPrice = e;
          },
        },
        {
          key: "setZyCondValue",
          value: function (e) {
            this.zyCondValue = e;
          },
        },
        {
          key: "setZsCondType",
          value: function (e) {
            this.zsCondType !== e && this.setZsCondValue(""),
              (this.zsCondType = e);
          },
        },
        {
          key: "setZsCondPrice",
          value: function (e) {
            this.zsCondPrice = e;
          },
        },
        {
          key: "setZsCondValue",
          value: function (e) {
            this.zsCondValue = e;
          },
        },
        {
          key: "setOrderPriceType",
          value: function (e) {
            this.orderPriceType = e;
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
        {
          key: "setZyPullbackFlag",
          value: function (e) {
            (this.zyPullbackFlag = e), e || (this.zyPullbackValue = "");
          },
        },
        {
          key: "setZyPullbackType",
          value: function (e) {
            this.zyPullbackType !== e && (this.zyPullbackValue = ""),
              (this.zyPullbackType = e);
          },
        },
        {
          key: "setZyPullbackValue",
          value: function (e) {
            this.zyPullbackValue = e;
          },
        },
      ]),
      d
    );
  })(
    c.ConditionBase,
    o.isMp ? "_timeText" : "timeText",
    o.isMp ? "_zyTypeText" : "zyTypeText",
    o.isMp ? "_zsTypeText" : "zsTypeText"
  ),
  d = o.isMp
    ? new Proxy(h, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            ["timeText", "zyTypeText", "zsTypeText"].forEach(function (t) {
              Object.defineProperty(e, t, {
                get: function () {
                  return this["_".concat(t)];
                },
                enumerable: !0,
              });
            }),
            e
          );
        },
      })
    : h;
exports.TPSLCondition = d;
