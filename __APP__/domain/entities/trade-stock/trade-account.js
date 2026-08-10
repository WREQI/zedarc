var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  u = require("../../../@babel/runtime/helpers/createClass"),
  _ = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/get"),
  s = require("../../../@babel/runtime/helpers/getPrototypeOf"),
  o = require("../../../@babel/runtime/helpers/inherits"),
  c = require("../../../@babel/runtime/helpers/createSuper"),
  l = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var y = Object.defineProperty,
  h = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? y(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != l(t) ? t + "" : t, r),
      r
    );
  },
  m = require("../../../common/vendor.js"),
  x = require("../user/trade-account.js"),
  b = require("../../../config/enum.js"),
  d = (function (l) {
    o(f, l);
    var y,
      x,
      d,
      p,
      q = c(f);
    function f(e) {
      var t;
      return (
        n(this, f),
        (t = q.call(this, e)),
        h(_(t), "max_buy_qty_switch"),
        h(_(t), "max_sell_qty", "--"),
        h(_(t), "hold_qty"),
        h(_(t), "route_qty"),
        h(_(t), "max_buy_qty", "--"),
        h(_(t), "least_manual_money", "--"),
        h(_(t), "all_manual_money", "--"),
        h(_(t), "service"),
        h(
          _(t),
          "debounceForGetMaxBuyQty",
          m.debounce(t.getMaxBuyQty, 800, { leading: !0 })
        ),
        (t.service = e),
        t
      );
    }
    return (
      u(f, [
        {
          key: "checkAccountMoney",
          value: function (e, t) {
            var r = t.calcTradeFee(e.totalMoney, e.orderExchangeRate),
              a = m.__CJS__export_reduce__(
                m.__CJS__export_add__(
                  m.__CJS__export_mul__(e.totalMoney, e.orderExchangeRate || 1),
                  r
                ),
                this.max_buy_money
              );
            return a > 0
              ? [!1, { retcode: "money-not-enough", data: { diffMoney: a } }]
              : [!0];
          },
        },
        {
          key: "fetchAccountInfo",
          value:
            ((p = a(
              r().mark(function e(t, a) {
                var n, u;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!a) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 3), this.service.reloadAccountInfo(t)
                          );
                        case 3:
                          (e.t0 = e.sent), (e.next = 9);
                          break;
                        case 6:
                          return (
                            (e.next = 8),
                            i(s(f.prototype), "fetchAccountInfo", this).call(
                              this,
                              t
                            )
                          );
                        case 8:
                          e.t0 = e.sent;
                        case 9:
                          return (
                            (n = e.t0),
                            (this.stockholder_code = n.stockholder_code),
                            (u = "1" === n.max_buy_qty_switch),
                            e.abrupt(
                              "return",
                              ((this.max_buy_money = this.formatMaxBuyMoney(
                                n,
                                t
                              )),
                              t.market === b.MARKET.HK &&
                                (u = "1" === n.max_buy_qty_hk_switch),
                              (this.max_buy_qty_switch = u),
                              (this.max_sell_qty =
                                n.max_sell_qty && !isNaN(+n.max_sell_qty)
                                  ? n.max_sell_qty
                                  : "--"),
                              (this.hold_qty =
                                n.hold_qty && !isNaN(+n.hold_qty)
                                  ? n.hold_qty
                                  : "--"),
                              (this.route_qty =
                                n.route_qty && !isNaN(+n.route_qty)
                                  ? n.route_qty
                                  : "--"),
                              n)
                            )
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e, t) {
              return p.apply(this, arguments);
            }),
        },
        {
          key: "fetchPositionAndOrder",
          value: function () {
            return this.service.fetchPositionAndOrder();
          },
        },
        {
          key: "getQuickAmount",
          value: function (r, a, n) {
            var u,
              _,
              i = Number(
                (null == (_ = null == (u = r.quote) ? void 0 : u.info)
                  ? void 0
                  : _.trd_unit) || 0
              ),
              s = r.minAmount,
              o = { buy: {}, sell: {} };
            if (0 === i) return o;
            var c,
              l = t(a);
            try {
              for (l.s(); !(c = l.n()).done; ) {
                var y = c.value.stock_shift;
                if ("1" === y) {
                  var h = +this.max_sell_qty;
                  if (
                    ((o.buy[y] = +this.max_buy_qty), (o.sell[y] = h), r.isGGT)
                  ) {
                    var x = r.calcOddLot(this.max_sell_qty);
                    n !== b.ORDER_TYPES.OLO &&
                      h > x &&
                      x > 0 &&
                      (o.sell[y] = h - x);
                  }
                } else {
                  var d = void 0;
                  if (y.indexOf("/") > 0) {
                    var p = y.split("/"),
                      q = e(p, 2),
                      f = q[0],
                      v = q[1];
                    d = m.__CJS__export_div__(f, v, 8);
                  } else d = y;
                  var k =
                      Math.ceil(
                        m.__CJS__export_div__(
                          m.__CJS__export_mul__(this.max_buy_qty, d),
                          i
                        )
                      ) * i,
                    M =
                      Math.ceil(
                        m.__CJS__export_div__(
                          m.__CJS__export_mul__(this.max_sell_qty, d),
                          i
                        )
                      ) * i;
                  (o.buy[y] = 0 == +this.max_buy_qty ? 0 : k >= s ? k : s),
                    (o.sell[y] =
                      +this.max_sell_qty < s
                        ? +this.max_sell_qty
                        : M >= s
                        ? M
                        : s);
                }
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            return o;
          },
        },
        {
          key: "getMaxBuyFromBackend",
          value:
            ((d = a(
              r().mark(function e(t, a) {
                var n, u;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.service.fetchMaxBuyQty(
                              t,
                              a,
                              this.stockholder_code
                            )
                          );
                        case 2:
                          return (
                            (n = e.sent),
                            (u = n.max_buy_qty),
                            e.abrupt("return", u)
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e, t) {
              return d.apply(this, arguments);
            }),
        },
        {
          key: "getMaxBuyFromFrontEnd",
          value:
            ((x = a(
              r().mark(function e(t, a) {
                var n, u;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.service.getMaxBuyQty(t, a, this.max_buy_money)
                          );
                        case 2:
                          return (
                            (n = e.sent),
                            (u = n.max_buy_qty),
                            e.abrupt("return", u)
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e, t) {
              return x.apply(this, arguments);
            }),
        },
        {
          key: "getMaxBuyQty",
          value:
            ((y = a(
              r().mark(function e(t, a) {
                var n, u, _, i;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.isGGT || !1 === this.max_buy_qty_switch) {
                            e.next = 14;
                            break;
                          }
                          if (
                            !this.max_buy_qty_switch ||
                            !this.ggt_stockholder_code
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            this.getMaxBuyFromBackend(t, a)
                          );
                        case 5:
                          (this.max_buy_qty = e.sent), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(2)),
                            (this.max_buy_qty = "--");
                        case 11:
                          this.calcAllManualMoney({ price: a, stock: t }),
                            (e.next = 37);
                          break;
                        case 14:
                          if (
                            this.max_buy_qty_switch &&
                            ((null ==
                            (u = null == (n = t.quote) ? void 0 : n.info)
                              ? void 0
                              : u.market) ||
                              (null ==
                              (i = null == (_ = t.quote) ? void 0 : _.info)
                                ? void 0
                                : i.secu_code))
                          ) {
                            e.next = 19;
                            break;
                          }
                          return (
                            (e.next = 17), this.getMaxBuyFromFrontEnd(t, a)
                          );
                        case 17:
                          return (
                            (this.max_buy_qty = e.sent),
                            e.abrupt(
                              "return",
                              void this.calcAllManualMoney({
                                price: a,
                                stock: t,
                              })
                            )
                          );
                        case 19:
                          return (
                            (e.prev = 19),
                            (e.next = 22),
                            Promise.race([
                              this.getMaxBuyFromBackend(t, a),
                              new Promise(function (e) {
                                return setTimeout(function () {
                                  return e("");
                                }, 500);
                              }),
                            ])
                          );
                        case 22:
                          if (((e.t1 = e.sent), e.t1)) {
                            e.next = 25;
                            break;
                          }
                          e.t1 = "";
                        case 25:
                          (this.max_buy_qty = e.t1), (e.next = 31);
                          break;
                        case 28:
                          (e.prev = 28),
                            (e.t2 = e.catch(19)),
                            (this.max_buy_qty = "");
                        case 31:
                          if (
                            ((e.t3 =
                              "" === this.max_buy_qty ||
                              void 0 === this.max_buy_qty ||
                              isNaN(+this.max_buy_qty) ||
                              +this.max_buy_qty < 0),
                            !e.t3)
                          ) {
                            e.next = 36;
                            break;
                          }
                          return (
                            (e.next = 35), this.getMaxBuyFromFrontEnd(t, a)
                          );
                        case 35:
                          this.max_buy_qty = e.sent;
                        case 36:
                          this.calcAllManualMoney({ price: a, stock: t });
                        case 37:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [
                    [2, 8],
                    [19, 28],
                  ]
                );
              })
            )),
            function (e, t) {
              return y.apply(this, arguments);
            }),
        },
        {
          key: "clearDebounceForGetMaxBuyQty",
          value: function () {
            var e;
            (null == (e = this.debounceForGetMaxBuyQty) ? void 0 : e.cancel) &&
              this.debounceForGetMaxBuyQty.cancel();
          },
        },
        {
          key: "checkHoldQty",
          value: function () {
            return !(
              !this.hold_qty ||
              +this.hold_qty <= 0 ||
              isNaN(+this.hold_qty)
            );
          },
        },
        {
          key: "calcLeastManualMoney",
          value: function (e) {
            var t = e.price,
              r = e.stock,
              a = e.rate;
            if (t && r.minAmount) {
              var n = m.__CJS__export_mul__(t, r.minAmount),
                u = r.calcTradeFee(n, a);
              this.least_manual_money =
                m.__CJS__export_add__(m.__CJS__export_mul__(n, a || 1), u) ||
                "0";
            }
          },
        },
        {
          key: "calcAllManualMoney",
          value: function (e) {
            var t = e.price,
              r = e.stock,
              a = e.rate;
            if (t && "--" !== this.max_buy_qty) {
              if (0 == +this.max_buy_qty || isNaN(+this.max_buy_qty))
                return (this.all_manual_money = "0");
              var n = m.__CJS__export_mul__(t, this.max_buy_qty || 100),
                u = r.calcTradeFee(n, a);
              this.all_manual_money =
                m.__CJS__export_add__(m.__CJS__export_mul__(n, a || 1), u) ||
                "0";
            } else this.all_manual_money = "0";
          },
        },
      ]),
      f
    );
  })(x.TradeAccount);
exports.TradeAccount = d;
