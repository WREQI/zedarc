var e = require("../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  c = function (e, i, r) {
    return (
      (function (e, i, r) {
        i in e
          ? a(e, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[i] = r);
      })(e, "symbol" != u(i) ? i + "" : i, r),
      r
    );
  },
  s = require("../../../common/vendor.js"),
  l = require("./ConditionBase.js"),
  p = require("../../../config/enum.js"),
  m = require("../../../config/enum/condition.js"),
  d = require("../../../domain/entities/utils.js"),
  y = (function (u, a, l, d, y) {
    n(h, u);
    var T = o(h);
    function h() {
      var e;
      return (
        i(this, h),
        (e = T.apply(this, arguments)),
        c(t(e), "condPrice", "0"),
        c(t(e), "tradeType", p.ACTION.BUY),
        c(t(e), "validDayEnum", p.ORDER_VALIDATES.YEAR),
        c(t(e), "endTime", 0),
        c(t(e), "remindType", m.PriceConditionRemindType.upTo),
        e
      );
    }
    return (
      r(
        h,
        [
          {
            key: a,
            get: function () {
              return s.__CJS__export_mul__(this.price, this.amount);
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
              var i,
                r = "",
                t =
                  (e((i = {}), p.ORDER_VALIDATES.TODAY, 0),
                  e(i, p.ORDER_VALIDATES.WEEK, 6),
                  e(i, p.ORDER_VALIDATES.MONTH, 29),
                  e(i, p.ORDER_VALIDATES.YEAR, 364),
                  i);
              void 0 !== t[this.validDayEnum] &&
                (r = s
                  .dayjs()
                  .add(t[this.validDayEnum], "day")
                  .format("YYYY-MM-DD"));
              var n = this.endTime
                ? f.formatConditionExpireTime(this.endTime)
                : "";
              return r ? "".concat(r, " 15:00") : n;
            },
          },
          {
            key: y,
            get: function () {
              return (
                [p.ACTION.BUY, p.ACTION.AFTER_BUY].indexOf(this.tradeType) > -1
              );
            },
          },
          {
            key: "calcPriceAndCondPriceChg",
            value: function () {
              var e = 100 * (+this.price / +this.condPrice - 1),
                i = String(e).split(".");
              return (
                i[1] &&
                  i[1].length > 2 &&
                  ((i[1] = i[1].slice(0, 2)), (e = Number(i.join(".")))),
                e
              );
            },
          },
          {
            key: "createLimitTips",
            value: function (e) {
              return "自定价与触发价价差为".concat(e, "%,超出板块涨跌幅限制");
            },
          },
        ],
        [
          {
            key: "formatConditionExpireTime",
            value: function (e) {
              return "".concat(s.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
            },
          },
        ]
      ),
      h
    );
  })(
    l.ConditionBase,
    d.isMp ? "_totalMoney" : "totalMoney",
    d.isMp ? "_orderTypeName" : "orderTypeName",
    d.isMp ? "_timeText" : "timeText",
    d.isMp ? "_isBuyAction" : "isBuyAction"
  ),
  f = d.isMp
    ? new Proxy(y, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            ["totalMoney", "orderTypeName", "timeText", "isBuyAction"].forEach(
              function (i) {
                Object.defineProperty(e, i, {
                  get: function () {
                    return this["_".concat(i)];
                  },
                  enumerable: !0,
                });
              }
            ),
            e
          );
        },
      })
    : y;
exports.PriceCondition = f;
