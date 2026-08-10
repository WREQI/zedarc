var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var E = Object.defineProperty,
  o = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? E(e, t, {
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
  c = require("../../../common/vendor.js"),
  u = require("./ConditionBase.js"),
  T = require("../../../config/enum.js"),
  _ = require("../../../domain/entities/utils.js"),
  D = require("../../../config/enum/condition.js"),
  R = (function (s, E, u, _, R, I) {
    n(O, s);
    var l = a(O);
    function O() {
      var e;
      return (
        t(this, O),
        (e = l.apply(this, arguments)),
        o(r(e), "condPrice", "0"),
        o(r(e), "validDayEnum", T.INVEST_ORDER_VALIDATES.YEAR1),
        o(r(e), "endTime", 0),
        o(r(e), "strategy", T.STRATEGY.MANUAL),
        o(r(e), "isInvestCondOrder", !0),
        o(r(e), "buyPriceType", D.PriceType.SellOne),
        o(r(e), "investPeriod", ""),
        o(r(e), "investWeekday", ""),
        o(r(e), "investDate", ""),
        o(r(e), "investTime", ""),
        o(r(e), "investQuantity", ""),
        o(r(e), "isInvestAmountMode", !0),
        o(r(e), "maxAmount", ""),
        o(r(e), "upperLimit", ""),
        o(r(e), "lowerLimit", ""),
        o(r(e), "highSettingExpanded", !1),
        o(r(e), "highSettingChecked", !1),
        o(r(e), "tradeType", T.ACTION.BUY),
        e
      );
    }
    return (
      i(
        O,
        [
          {
            key: E,
            get: function () {
              return c.__CJS__export_mul__(this.price, this.amount);
            },
          },
          {
            key: u,
            get: function () {
              return this.isUpdate ? "条件单修改" : "条件单创建";
            },
          },
          {
            key: _,
            get: function () {
              var t,
                i = "",
                r =
                  (e((t = {}), T.INVEST_ORDER_VALIDATES.MONTH3, 89),
                  e(t, T.INVEST_ORDER_VALIDATES.MONTH6, 179),
                  e(t, T.INVEST_ORDER_VALIDATES.YEAR1, 364),
                  e(t, T.INVEST_ORDER_VALIDATES.YEAR2, 729),
                  t);
              void 0 !== r[this.validDayEnum] &&
                (i = c
                  .dayjs()
                  .add(r[this.validDayEnum], "day")
                  .format("YYYY-MM-DD"));
              var n = this.endTime
                ? d.formatConditionExpireTime(this.endTime)
                : "";
              return i ? "".concat(i, " 15:00") : n;
            },
          },
          {
            key: R,
            get: function () {
              switch (this.investPeriod) {
                case T.INVEST_ORDER_PERIOD.TRADE_DAY:
                  return T.INVEST_ORDER_PERIOD_TEXT[
                    T.INVEST_ORDER_PERIOD.TRADE_DAY
                  ];
                case T.INVEST_ORDER_PERIOD.WEEK:
                  return ""
                    .concat(
                      T.INVEST_ORDER_PERIOD_TEXT[T.INVEST_ORDER_PERIOD.WEEK]
                    )
                    .concat(T.INVEST_WEEK_LIST[+this.investWeekday - 1]);
                case T.INVEST_ORDER_PERIOD.DOUBLE_WEEK:
                  return ""
                    .concat(
                      T.INVEST_ORDER_PERIOD_TEXT[
                        T.INVEST_ORDER_PERIOD.DOUBLE_WEEK
                      ]
                    )
                    .concat(T.INVEST_WEEK_LIST[+this.investWeekday - 1]);
                case T.INVEST_ORDER_PERIOD.MONTH:
                  return ""
                    .concat(
                      T.INVEST_ORDER_PERIOD_TEXT[T.INVEST_ORDER_PERIOD.MONTH]
                    )
                    .concat(T.INVEST_MONTH_DAY_LIST[+this.investDate - 1]);
                default:
                  return "";
              }
            },
          },
          {
            key: I,
            get: function () {
              var e = c.dayjs(),
                t = e.day(),
                i = e.date(),
                r = c
                  .dayjs(
                    ""
                      .concat(e.format("YYYY/MM/DD"), " ")
                      .concat(this.investTime)
                  )
                  .isBefore(e),
                n = 0,
                a = !1;
              switch (this.investPeriod) {
                case T.INVEST_ORDER_PERIOD.TRADE_DAY:
                  n = r ? 1 : 0;
                  break;
                case T.INVEST_ORDER_PERIOD.WEEK:
                case T.INVEST_ORDER_PERIOD.DOUBLE_WEEK:
                  var s = +this.investWeekday;
                  n = t < s ? s - t : t === s ? (r ? 7 : 0) : 7 - t + s;
                  break;
                case T.INVEST_ORDER_PERIOD.MONTH:
                  i < +this.investDate
                    ? (n = +this.investDate - i)
                    : i === +this.investDate
                    ? r && (a = !0)
                    : ((n = -i + +this.investDate), (a = !0));
                  break;
                default:
                  return "";
              }
              return "预计下期".concat(
                e
                  .add(a ? 1 : 0, "month")
                  .add(n, "day")
                  .format("YYYY/MM/DD"),
                "，如遇非交易日顺延"
              );
            },
          },
          {
            key: "calcPriceAndCondPriceChg",
            value: function () {
              var e = 100 * (+this.price / +this.condPrice - 1),
                t = String(e).split(".");
              return (
                t[1] &&
                  t[1].length > 2 &&
                  ((t[1] = t[1].slice(0, 2)), (e = Number(t.join(".")))),
                e
              );
            },
          },
        ],
        [
          {
            key: "formatConditionExpireTime",
            value: function (e) {
              return "".concat(c.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
            },
          },
        ]
      ),
      O
    );
  })(
    u.ConditionBase,
    _.isMp ? "_totalMoney" : "totalMoney",
    _.isMp ? "_orderTypeName" : "orderTypeName",
    _.isMp ? "_timeText" : "timeText",
    _.isMp ? "_investPeriodText" : "investPeriodText",
    _.isMp ? "_investPeriodCalText" : "investPeriodCalText"
  ),
  d = _.isMp
    ? new Proxy(R, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            [
              "totalMoney",
              "orderTypeName",
              "timeText",
              "investPeriodCalText",
              "investPeriodText",
            ].forEach(function (t) {
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
    : R;
exports.InvestCondition = d;
