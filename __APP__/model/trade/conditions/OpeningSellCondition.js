var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  u = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o = Object.defineProperty,
  s = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? o(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != a(t) ? t + "" : t, i),
      i
    );
  },
  l = require("../../../common/vendor.js"),
  c = require("./ConditionBase.js"),
  y = require("../../../config/enum.js"),
  p = require("../../../config/enum/condition.js"),
  m = require("../../../domain/entities/utils.js"),
  d = (function (a, o, c, m) {
    n(f, a);
    var d = u(f);
    function f() {
      var e;
      return (
        t(this, f),
        (e = d.apply(this, arguments)),
        s(r(e), "orderPriceType", p.PriceType.BuyOne),
        s(r(e), "quantity", ""),
        s(r(e), "validDayEnum", y.ORDER_VALIDATES.YEAR),
        s(r(e), "endTime", 0),
        s(r(e), "triggerType", p.OPENING_SELL_TRIGGER_TYPE.immediately),
        s(r(e), "downType", p.OPENING_SELL_DOWNTO_TYPE.percent),
        s(r(e), "downValue", ""),
        e
      );
    }
    return (
      i(
        f,
        [
          {
            key: "setTriggerType",
            value: function (e) {
              this.triggerType = e;
            },
          },
          {
            key: "setDownType",
            value: function (e) {
              this.downType = e;
            },
          },
          {
            key: "setDownValue",
            value: function (e) {
              this.downValue = e;
            },
          },
          {
            key: "setValidDayEnum",
            value: function (e) {
              this.validDayEnum = e;
            },
          },
          {
            key: "setEndTime",
            value: function (e) {
              this.endTime = e;
            },
          },
          {
            key: "setQuantity",
            value: function (e) {
              this.quantity = e;
            },
          },
          {
            key: "setOrderPriceType",
            value: function (e) {
              this.orderPriceType = e;
            },
          },
          {
            key: o,
            get: function () {
              return l.__CJS__export_mul__(this.price, this.amount);
            },
          },
          {
            key: c,
            get: function () {
              return this.isUpdate ? "条件单修改" : "条件单创建";
            },
          },
          {
            key: m,
            get: function () {
              var t,
                i = "",
                r =
                  (e((t = {}), y.ORDER_VALIDATES.TODAY, 0),
                  e(t, y.ORDER_VALIDATES.WEEK, 6),
                  e(t, y.ORDER_VALIDATES.MONTH, 29),
                  e(t, y.ORDER_VALIDATES.YEAR, 364),
                  t);
              void 0 !== r[this.validDayEnum] &&
                (i = l
                  .dayjs()
                  .add(r[this.validDayEnum], "day")
                  .format("YYYY-MM-DD"));
              var n = this.endTime
                ? T.formatConditionExpireTime(this.endTime)
                : "";
              return i ? "".concat(i, " 15:00") : n;
            },
          },
        ],
        [
          {
            key: "formatConditionExpireTime",
            value: function (e) {
              return "".concat(l.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
            },
          },
        ]
      ),
      f
    );
  })(
    c.ConditionBase,
    m.isMp ? "_totalMoney" : "totalMoney",
    m.isMp ? "_orderTypeName" : "orderTypeName",
    m.isMp ? "_timeText" : "timeText"
  ),
  T = m.isMp
    ? new Proxy(d, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            ["totalMoney", "orderTypeName", "timeText"].forEach(function (t) {
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
    : d;
exports.OpeningSellCondition = T;
