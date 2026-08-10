var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
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
  m = require("../../../common/vendor.js"),
  l = require("./ConditionBase.js"),
  c = require("../../../config/enum.js"),
  d = require("../../../domain/entities/utils.js"),
  y = (function (a, o, l, d) {
    r(f, a);
    var y = u(f);
    function f() {
      var e;
      return (
        t(this, f),
        (e = y.apply(this, arguments)),
        s(n(e), "validDayEnum", c.ORDER_VALIDATES.YEAR),
        s(n(e), "endTime", 0),
        s(n(e), "isAmountMode", !0),
        s(n(e), "investQuantity", ""),
        s(n(e), "maxAmount", ""),
        e
      );
    }
    return (
      i(
        f,
        [
          {
            key: o,
            get: function () {
              return m.__CJS__export_mul__(this.price, this.amount);
            },
          },
          {
            key: l,
            get: function () {
              return this.isUpdate ? "条件单修改" : "条件单创建";
            },
          },
          {
            key: d,
            get: function () {
              var t,
                i = "",
                n =
                  (e((t = {}), c.ORDER_VALIDATES.TODAY, 0),
                  e(t, c.ORDER_VALIDATES.WEEK, 6),
                  e(t, c.ORDER_VALIDATES.MONTH, 29),
                  e(t, c.ORDER_VALIDATES.YEAR, 364),
                  t);
              void 0 !== n[this.validDayEnum] &&
                (i = m
                  .dayjs()
                  .add(n[this.validDayEnum], "day")
                  .format("YYYY-MM-DD"));
              var r = this.endTime
                ? p.formatConditionExpireTime(this.endTime)
                : "";
              return i ? "".concat(i, " 15:00") : r;
            },
          },
          {
            key: "setAmountMode",
            value: function (e) {
              this.isAmountMode = e;
            },
          },
          {
            key: "setInvestQuantity",
            value: function (e) {
              this.investQuantity = e;
            },
          },
          {
            key: "setMaxAmount",
            value: function (e) {
              this.maxAmount = e;
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
        ],
        [
          {
            key: "formatConditionExpireTime",
            value: function (e) {
              return "".concat(m.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
            },
          },
        ]
      ),
      f
    );
  })(
    l.ConditionBase,
    d.isMp ? "_totalMoney" : "totalMoney",
    d.isMp ? "_orderTypeName" : "orderTypeName",
    d.isMp ? "_timeText" : "timeText"
  ),
  p = d.isMp
    ? new Proxy(y, {
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
    : y;
exports.LimitUpCondition = p;
