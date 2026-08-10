var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  a = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != n(r) ? r + "" : r, t),
      t
    );
  },
  c = require("../../../common/vendor.js"),
  u = require("../../../config/enum.js");
require("../../../service/broker.js");
var h = require("../utils.js"),
  d = require("../../../config/broker/11100/index.js"),
  T = (function (n, s, h, T, l) {
    function A(e) {
      i(this, A),
        a(this, "price", "0"),
        a(this, "amount", "0"),
        a(this, "action", u.ACTION.BUY),
        a(this, "manualMoney", ""),
        a(this, "strategy", u.STRATEGY.MANUAL),
        a(this, "STRATEGY2TEXT", {
          1: { long: "限价", short: "限价" },
          2: { long: "跟最新价", short: "最新" },
          3: { long: "跟买一价", short: "买一" },
          4: { long: "跟卖一价", short: "卖一" },
          5: { long: "盘后", short: "盘后" },
        }),
        a(this, "orderDomain", d.brokerConfig.base.domain),
        a(this, "orderId", ""),
        a(this, "orderType", ""),
        a(this, "retryTime", 0),
        a(this, "orderExchangeRate", "1"),
        a(this, "service"),
        (this.service = e);
    }
    var p, y;
    return (
      o(A, [
        {
          key: n,
          get: function () {
            return c.__CJS__export_mul__(this.price || 0, this.amount || 0);
          },
        },
        {
          key: s,
          get: function () {
            var e;
            return (
              (null == (e = this.STRATEGY2TEXT[this.strategy])
                ? void 0
                : e.long) || ""
            );
          },
        },
        {
          key: h,
          get: function () {
            var e;
            return (
              (null == (e = this.STRATEGY2TEXT[this.strategy])
                ? void 0
                : e.short) || "价格"
            );
          },
        },
        {
          key: T,
          get: function () {
            return (
              [
                u.ACTION.BUY,
                u.ACTION.AFTER_BUY,
                u.ACTION.COLLATERAL_BUY,
                u.ACTION.AFTER_COLLATERAL_BUY,
                u.ACTION.MARGIN_BUY,
                u.ACTION.BUY_AND_COVER,
                u.ACTION.COLLATERAL_TRANSFER_IN,
                u.ACTION.AUO_BUY,
                u.ACTION.ODD_LOT_ELO_BUY,
              ].indexOf(this.action) > -1
            );
          },
        },
        {
          key: l,
          get: function () {
            return (
              [
                u.ACTION.SELL,
                u.ACTION.AFTER_SELL,
                u.ACTION.COLLATERAL_SELL,
                u.ACTION.SHORT_SELL,
                u.ACTION.REPURCHASE_AGREEMENT,
                u.ACTION.COLLATERAL_TRANSFER_OUT,
                u.ACTION.REPURCHASE,
                u.ACTION.AFTER_COLLATERAL_SELL,
                u.ACTION.AUO_SELL,
                u.ACTION.ODD_LOT_ELO_SELL,
              ].indexOf(this.action) > -1
            );
          },
        },
        {
          key: "checkPrice",
          value: function () {
            return this.price && 0 != +this.price
              ? /^([\d]{1,5})(\.[\d]{1,4})?$/.test(this.price)
                ? [!0]
                : [
                    !1,
                    {
                      retcode: "price_format",
                      retmsg: "价格格式错误，请调整",
                      stop: !0,
                    },
                  ]
              : [
                  !1,
                  {
                    retcode: "price_zero",
                    retmsg: "价格不能为0，请调整",
                    stop: !0,
                  },
                ];
          },
        },
        {
          key: "stripDomainPrePostFix",
          value: function (e) {
            return e.replace(/^https?:\/\//, "").replace(/\/$/, "");
          },
        },
        {
          key: "setTradeSetInfo",
          value: function (e) {
            var r = e.trade_set_domain,
              t = e.trade_order_no;
            (this.orderDomain = this.stripDomainPrePostFix(
              r || d.brokerConfig.base.domain
            )),
              (this.orderId = t);
          },
        },
        {
          key: "resetTradeSetInfo",
          value: function () {
            (this.orderDomain = d.brokerConfig.base.domain),
              (this.orderId = "");
          },
        },
        {
          key: "setTradeOrderType",
          value: function (e) {
            this.orderType = e;
          },
        },
        {
          key: "setExchangeRate",
          value: function (e) {
            this.orderExchangeRate = e;
          },
        },
        {
          key: "queryTradeOrderNo",
          value:
            ((y = t(
              r().mark(function e(t, i) {
                var o;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (this.retryTime = i ? this.retryTime + 1 : 0),
                            this.resetTradeSetInfo(),
                            (e.prev = 1),
                            (e.next = 4),
                            this.service.queryOrderNo({
                              market: t.market,
                              stock_code: t.stock_code,
                              stockholder_code: t.stockholder_code,
                              retry_time: "".concat(this.retryTime),
                            })
                          );
                        case 4:
                          (o = e.sent), this.setTradeSetInfo(o), (e.next = 10);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 8]]
                );
              })
            )),
            function (e, r) {
              return y.apply(this, arguments);
            }),
        },
        {
          key: "submit",
          value:
            ((p = t(
              r().mark(function t(i) {
                var o, n;
                return r().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((o = {
                              market: i.market,
                              stock_code: i.scode,
                              stockholder_code: i.stockholder_code,
                            }),
                            (r.t0 = this.orderId),
                            r.t0)
                          ) {
                            r.next = 5;
                            break;
                          }
                          return (r.next = 5), this.queryTradeOrderNo(o, !0);
                        case 5:
                          return (
                            (r.prev = 5),
                            (r.next = 8),
                            this.service.submit(
                              e(e({}, i), {}, { orderid: this.orderId }),
                              e(
                                e(
                                  {},
                                  this.orderDomain ===
                                    d.brokerConfig.base.domain
                                    ? void 0
                                    : {
                                        baseURL: "https://".concat(
                                          this.orderDomain,
                                          "/cgi-bin/"
                                        ),
                                        withCredentials: !0,
                                      }
                                ),
                                {},
                                { checkTradeSession: !1, ignoreDomainSync: !0 }
                              )
                            )
                          );
                        case 8:
                          return (
                            (n = r.sent),
                            r.abrupt(
                              "return",
                              (this.queryTradeOrderNo(o, !1), n)
                            )
                          );
                        case 12:
                          throw (
                            ((r.prev = 12),
                            (r.t1 = r.catch(5)),
                            this.queryTradeOrderNo(o, !0),
                            r.t1)
                          );
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 12]]
                );
              })
            )),
            function (e) {
              return p.apply(this, arguments);
            }),
        },
      ]),
      A
    );
  })(
    h.isMp ? "_totalMoney" : "totalMoney",
    h.isMp ? "_strategyText" : "strategyText",
    h.isMp ? "_strategyShortText" : "strategyShortText",
    h.isMp ? "_isBuyAction" : "isBuyAction",
    h.isMp ? "_isSellAction" : "isSellAction"
  ),
  l = h.isMp
    ? new Proxy(T, {
        construct: function (e, r) {
          var t = Reflect.construct.apply(Reflect, arguments);
          return (
            [
              "totalMoney",
              "strategyText",
              "strategyShortText",
              "isBuyAction",
              "isSellAction",
            ].forEach(function (e) {
              Object.defineProperty(t, e, {
                get: function () {
                  return this["_".concat(e)];
                },
                set: function () {},
                enumerable: !0,
              });
            }),
            t
          );
        },
      })
    : T;
exports.StockOrder = l;
