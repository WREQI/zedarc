var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  a = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != r(t) ? t + "" : t, i),
      i
    );
  },
  o = require("../../../common/vendor.js"),
  c = require("../../../config/enum.js"),
  E = require("../../../config/enum/condition.js"),
  d = require("../utils.js"),
  u = (function (r, s, d, u, h, T) {
    function D(e) {
      i(this, D),
        a(this, "price", "0"),
        a(this, "amount", "0"),
        a(this, "condPrice", "0"),
        a(this, "tradeType", c.ACTION.BUY),
        a(this, "validDayEnum", ""),
        a(this, "condId", ""),
        a(this, "endTime", 0),
        a(this, "isUpdate", !1),
        a(this, "isRecreate", !1),
        a(this, "strategy", c.STRATEGY.MANUAL),
        a(this, "isInvestCondOrder", !1),
        a(this, "buyPriceType", E.PriceType.SellOne),
        a(this, "investPeriod", ""),
        a(this, "investWeekday", ""),
        a(this, "investDate", ""),
        a(this, "investTime", ""),
        a(this, "investQuantity", ""),
        a(this, "isInvestAmountMode", !0),
        a(this, "maxAmount", ""),
        a(this, "upperLimit", ""),
        a(this, "lowerLimit", ""),
        a(this, "highSettingExpanded", !1),
        a(this, "highSettingChecked", !1),
        a(this, "remindType", E.PriceConditionRemindType.upTo),
        a(this, "service"),
        (this.service = e);
    }
    return (
      n(
        D,
        [
          {
            key: r,
            get: function () {
              return o.__CJS__export_mul__(this.price, this.amount);
            },
          },
          {
            key: s,
            get: function () {
              return this.isUpdate ? "条件单修改" : "条件单创建";
            },
          },
          {
            key: d,
            get: function () {
              var e,
                i,
                n = "",
                r = this.isInvestCondOrder
                  ? (t((e = {}), c.INVEST_ORDER_VALIDATES.MONTH3, 89),
                    t(e, c.INVEST_ORDER_VALIDATES.MONTH6, 179),
                    t(e, c.INVEST_ORDER_VALIDATES.YEAR1, 364),
                    t(e, c.INVEST_ORDER_VALIDATES.YEAR2, 729),
                    e)
                  : (t((i = {}), c.ORDER_VALIDATES.TODAY, 0),
                    t(i, c.ORDER_VALIDATES.WEEK, 6),
                    t(i, c.ORDER_VALIDATES.MONTH, 29),
                    t(i, c.ORDER_VALIDATES.YEAR, 364),
                    i);
              void 0 !== r[this.validDayEnum] &&
                (n = o
                  .dayjs()
                  .add(r[this.validDayEnum], "day")
                  .format("YYYY-MM-DD"));
              var s = this.endTime
                ? _.formatConditionExpireTime(this.endTime)
                : "";
              return n ? "".concat(n, " 15:00") : s;
            },
          },
          {
            key: u,
            get: function () {
              if (!this.isInvestCondOrder) return "";
              switch (this.investPeriod) {
                case c.INVEST_ORDER_PERIOD.TRADE_DAY:
                  return c.INVEST_ORDER_PERIOD_TEXT[
                    c.INVEST_ORDER_PERIOD.TRADE_DAY
                  ];
                case c.INVEST_ORDER_PERIOD.WEEK:
                  return ""
                    .concat(
                      c.INVEST_ORDER_PERIOD_TEXT[c.INVEST_ORDER_PERIOD.WEEK]
                    )
                    .concat(c.INVEST_WEEK_LIST[+this.investWeekday - 1]);
                case c.INVEST_ORDER_PERIOD.DOUBLE_WEEK:
                  return ""
                    .concat(
                      c.INVEST_ORDER_PERIOD_TEXT[
                        c.INVEST_ORDER_PERIOD.DOUBLE_WEEK
                      ]
                    )
                    .concat(c.INVEST_WEEK_LIST[+this.investWeekday - 1]);
                case c.INVEST_ORDER_PERIOD.MONTH:
                  return ""
                    .concat(
                      c.INVEST_ORDER_PERIOD_TEXT[c.INVEST_ORDER_PERIOD.MONTH]
                    )
                    .concat(c.INVEST_MONTH_DAY_LIST[+this.investDate - 1]);
                default:
                  return "";
              }
            },
          },
          {
            key: h,
            get: function () {
              if (!this.isInvestCondOrder || !this.investTime) return "";
              var e = o.dayjs(),
                t = e.day(),
                i = e.date(),
                n = o
                  .dayjs(
                    ""
                      .concat(e.format("YYYY/MM/DD"), " ")
                      .concat(this.investTime)
                  )
                  .isBefore(e),
                r = 0,
                s = !1;
              switch (this.investPeriod) {
                case c.INVEST_ORDER_PERIOD.TRADE_DAY:
                  r = n ? 1 : 0;
                  break;
                case c.INVEST_ORDER_PERIOD.WEEK:
                case c.INVEST_ORDER_PERIOD.DOUBLE_WEEK:
                  var a = +this.investWeekday;
                  r = t < a ? a - t : t === a ? (n ? 7 : 0) : 7 - t + a;
                  break;
                case c.INVEST_ORDER_PERIOD.MONTH:
                  i < +this.investDate
                    ? (r = +this.investDate - i)
                    : i === +this.investDate
                    ? n && (s = !0)
                    : ((r = -i + +this.investDate), (s = !0));
                  break;
                default:
                  return "";
              }
              return "预计下期".concat(
                e
                  .add(s ? 1 : 0, "month")
                  .add(r, "day")
                  .format("YYYY/MM/DD"),
                "，如遇非交易日顺延"
              );
            },
          },
          {
            key: T,
            get: function () {
              return (
                [c.ACTION.BUY, c.ACTION.AFTER_BUY].indexOf(this.tradeType) > -1
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
          {
            key: "createLimitTips",
            value: function (e) {
              return "自定价与触发价价差为".concat(e, "%,超出板块涨跌幅限制");
            },
          },
          {
            key: "submit",
            value: function (t) {
              var i = {
                market: t.market,
                scode: t.scode,
                name: t.name,
                stockholder_code: t.holder,
                cond_id: this.condId,
              };
              return (
                (i = this.isInvestCondOrder
                  ? e(
                      e({}, i),
                      {},
                      {
                        cond_type: "3",
                        invest_period: this.investPeriod,
                        invest_weekday: this.investWeekday,
                        invest_date: this.investDate,
                        invest_time: this.investTime,
                        invest_quantity: this.investQuantity,
                        max_amount: this.maxAmount,
                        upper_limit: this.upperLimit,
                        lower_limit: this.lowerLimit,
                        buy_price_type: this.buyPriceType,
                      }
                    )
                  : e(
                      e({}, i),
                      {},
                      {
                        cond_type: "1",
                        trade_type: this.tradeType,
                        cond_price: this.condPrice,
                        order_price: this.price,
                        quantity: this.amount,
                        remind_type: this.remindType,
                      }
                    )),
                this.validDayEnum &&
                  (i = e(e({}, i), {}, { valid_day_enum: this.validDayEnum })),
                this.isUpdate
                  ? this.service.orderUpdate(i)
                  : this.service.orderCreate(i)
              );
            },
          },
        ],
        [
          {
            key: "formatConditionExpireTime",
            value: function (e) {
              return "".concat(o.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
            },
          },
        ]
      ),
      D
    );
  })(
    d.isMp ? "_totalMoney" : "totalMoney",
    d.isMp ? "_orderTypeName" : "orderTypeName",
    d.isMp ? "_timeText" : "timeText",
    d.isMp ? "_investPeriodText" : "investPeriodText",
    d.isMp ? "_investPeriodCalText" : "investPeriodCalText",
    d.isMp ? "_isBuyAction" : "isBuyAction"
  ),
  _ = d.isMp
    ? new Proxy(u, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            [
              "totalMoney",
              "orderTypeName",
              "timeText",
              "strategyText",
              "strategyShortText",
              "isBuyAction",
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
    : u;
exports.Condition = _;
