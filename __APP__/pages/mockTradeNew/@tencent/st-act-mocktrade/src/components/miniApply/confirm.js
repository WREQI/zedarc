var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, a) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  u = function (e, r) {
    for (var a in r || (r = {})) i.call(r, a) && s(e, a, r[a]);
    if (n) {
      var o,
        u = t(n(r));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          a = o.value;
          c.call(r, a) && s(e, a, r[a]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return a(e, o(t));
  },
  f = require("../../../../../../../common/vendor.js"),
  l = require("api.js"),
  d = require("../../services/BaseController.js"),
  p = {
    name: "ConfirmComponent",
    props: {
      confirmData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      feeFeatureEnabled: { type: Boolean, default: !1 },
    },
    setup: function (t, r) {
      var a = r.emit,
        o = f.ref(!0),
        n = ["mpwzq", "wzqlight"].includes("mpweapp");
      return {
        handleContinueTrade: function () {
          return (
            (r = this),
            null,
            (n = e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          l.submitOrder({
                            token: t.confirmData.tradeToken,
                            market: t.confirmData.market,
                            stock_code: t.confirmData.stockCode,
                            price: t.confirmData.price,
                            bs_flag: d.ORDER_TYPE.BUY,
                            qty: t.confirmData.quantity,
                            gameid: t.confirmData.gameId,
                            type: d.GAME_TYPE.TRAINING_GAME,
                          })
                        );
                      case 3:
                        (n = e.sent),
                          f.StockBridge.report("hq.mini_apply.add_stock_click"),
                          a(
                            "submitOrderFinish",
                            m(u({}, n), {
                              name: t.confirmData.name,
                              quantity: t.confirmData.quantity,
                              market: t.confirmData.market,
                              stock_code: t.confirmData.stockCode,
                              symbol: t.confirmData.symbol,
                            })
                          ),
                          (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          a(
                            "submitOrderFinish",
                            m(u({}, e.t0), {
                              name: t.confirmData.name,
                              quantity: t.confirmData.quantity,
                              market: t.confirmData.market,
                              stock_code: t.confirmData.stockCode,
                              symbol: t.confirmData.symbol,
                            })
                          );
                      case 10:
                        if (((e.prev = 10), (e.t1 = o.value), !e.t1)) {
                          e.next = 19;
                          break;
                        }
                        return (
                          (e.next = 15), l.getChooseStatus(t.confirmData.symbol)
                        );
                      case 15:
                        if (
                          ((e.t2 = t.confirmData.symbol),
                          (e.t3 = e.sent.data[e.t2]),
                          e.t3)
                        ) {
                          e.next = 19;
                          break;
                        }
                        l.addStockToGroup(t.confirmData.symbol);
                      case 19:
                        e.next = 23;
                        break;
                      case 21:
                        (e.prev = 21), (e.t4 = e.catch(10));
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [
                  [0, 7],
                  [10, 21],
                ]
              );
            })),
            new Promise(function (e, t) {
              var a = function e(r) {
                  try {
                    i(n.next(r));
                  } catch (e) {
                    t(e);
                  }
                },
                o = function (e) {
                  try {
                    i(n.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(a, o);
                };
              i((n = n.apply(r, null)).next());
            })
          );
          var r, n;
        },
        isAddToChoose: o,
        changeIsAddToChoose: function () {
          o.value = !o.value;
        },
        isLite: n,
      };
    },
  },
  b = f._export_sfc(p, [
    [
      "render",
      function (e, t, r, a, o, n) {
        return f.e(
          {
            a: f.t(r.confirmData.name),
            b: f.t(r.confirmData.fullCode),
            c: f.t(r.confirmData.price),
            d: a.isLite ? 1 : "",
            e: f.t(r.confirmData.quantity),
            f: a.isLite ? 1 : "",
            g: f.t(r.confirmData.amount),
            h: r.confirmData.floorStop || r.confirmData.ceilStop,
          },
          r.confirmData.floorStop || r.confirmData.ceilStop
            ? {
                i: f.t(
                  r.confirmData.floorStop
                    ? "价低于跌停价" + r.confirmData.floorStop
                    : "价高于涨停价" + r.confirmData.ceilStop
                ),
              }
            : {},
          { j: r.feeFeatureEnabled },
          (r.feeFeatureEnabled, {}),
          { k: a.isAddToChoose && !a.isLite },
          ((a.isAddToChoose && !a.isLite) || (a.isAddToChoose && a.isLite), {}),
          {
            l: a.isAddToChoose && a.isLite,
            m: f.o(function () {
              return (
                a.changeIsAddToChoose &&
                a.changeIsAddToChoose.apply(a, arguments)
              );
            }, 5147),
            n: f.o(function () {
              return (
                a.handleContinueTrade &&
                a.handleContinueTrade.apply(a, arguments)
              );
            }, 5148),
          }
        );
      },
    ],
    ["__scopeId", "data-v-c2a83a3e"],
  ]);
wx.createComponent(b);
