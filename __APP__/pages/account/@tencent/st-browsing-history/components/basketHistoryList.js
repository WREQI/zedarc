require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  o = require("../utils/index.js"),
  a = require("../../stock-hq-data/index.js"),
  i = require("../../wzq-lite-basket/api/StockBasketAPI.js"),
  u = {
    components: {
      BasketHistoryBlock: function () {
        return "./basketHistoryBlock.js";
      },
      EmptyShow: function () {
        return "./emptyShow.js";
      },
    },
    props: {},
    setup: function (u, c) {
      var s,
        l,
        f = this,
        d = c.emit,
        p = null,
        m = 0,
        v = !1,
        h = r.ref([]),
        k = r.computed(function () {
          return 0 === h.value.length;
        }),
        b = r.getCurrentInstance().proxy || r.getCurrentInstance();
      function g(a) {
        return n(
          this,
          null,
          e().mark(function n() {
            var i, u, c, s, f, p;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), a)) {
                        (m = 0), !0;
                        try {
                          clearTimeout(l), y();
                        } catch (e) {}
                      }
                      if (!v) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 4:
                      return (
                        (v = !0),
                        (e.next = 7),
                        o.AccountAPI.queryMyHistory(o.RECORD_TYPE.basket, m, 20)
                      );
                    case 7:
                      if (0 !== (i = e.sent).retcode) {
                        e.next = 14;
                        break;
                      }
                      if (
                        ((c = i.has_more),
                        (s = i.offset_time),
                        (f = i.stock_order_records),
                        c || d("loadAll", "basket", 0 === f.length),
                        0 !== f.length)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return", ((v = !1), !0));
                    case 12:
                      return (
                        (p = o.getDateGroupData(f)),
                        e.abrupt(
                          "return",
                          (m && o.mergeSameDayData(h.value, p),
                          a && (h.value = []),
                          (u = h.value).splice.apply(
                            u,
                            [h.value.length, 0].concat(t(p))
                          ),
                          (m = s),
                          (v = !1),
                          !c)
                        )
                      );
                    case 14:
                      (v = !1),
                        r.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        }),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17),
                        (e.t0 = e.catch(0)),
                        (v = !1),
                        r.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        });
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 17]]
            );
          })
        );
      }
      function y() {
        return n(
          this,
          null,
          e().mark(function t() {
            var n, r, a, i, u, c, f, d, p, m;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      s.getMarketState({ market: 0 }, { needProcess: !0 })
                    );
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = "";
                  case 5:
                    (u = e.t0),
                      (c = (
                        (null == (n = null == u ? void 0 : u.split)
                          ? void 0
                          : n.call(u, "|")) || []
                      ).map(function (e) {
                        return e.split("_");
                      })),
                      (f = c.filter(function (e) {
                        return "NEWSH" === e[0];
                      })),
                      (d = c.filter(function (e) {
                        return "NEWHK" === e[0];
                      })),
                      (p = c.filter(function (e) {
                        return "NEWUS" === e[0];
                      })),
                      (m =
                        "open" ===
                          (null == (r = null == f ? void 0 : f[0])
                            ? void 0
                            : r[1]) ||
                        "open" ===
                          (null == (a = null == d ? void 0 : d[0])
                            ? void 0
                            : a[1]) ||
                        "open" ===
                          (null == (i = null == p ? void 0 : p[0])
                            ? void 0
                            : i[1])) && o.getCurIdInView(b, "listRef", w),
                      m &&
                        (l = setTimeout(function () {
                          y(), clearTimeout(l);
                        }, 5e3));
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      }
      function w(t) {
        return n(
          this,
          null,
          e().mark(function r() {
            var o = this;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    h.value
                      .filter(function (e) {
                        return t.includes(e.timeString);
                      })
                      .forEach(function (t) {
                        return n(
                          o,
                          null,
                          e().mark(function n() {
                            var r, o, a, i, u, c;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = t.data),
                                      (o = {
                                        ids: r
                                          .map(function (e) {
                                            return e.symbol;
                                          })
                                          .join(","),
                                      }),
                                      (e.next = 4),
                                      p.getBasketSummary(o)
                                    );
                                  case 4:
                                    (a = e.sent),
                                      (i = a.data),
                                      (u = i.list),
                                      (c = void 0 === u ? [] : u),
                                      r.forEach(function (e, t) {
                                        var n,
                                          r,
                                          o,
                                          a,
                                          i =
                                            null ==
                                            (r =
                                              null == (n = c[t])
                                                ? void 0
                                                : n.ranking)
                                              ? void 0
                                              : r.avgChangePct,
                                          u =
                                            null ==
                                            (a =
                                              null == (o = c[t])
                                                ? void 0
                                                : o.ranking)
                                              ? void 0
                                              : a.accChangePct1M;
                                        i &&
                                          x(
                                            e,
                                            "zdf",
                                            parseFloat(i) > 0
                                              ? "+".concat(i)
                                              : i
                                          ),
                                          u &&
                                            x(
                                              e,
                                              "month_zdf",
                                              parseFloat(u) > 0
                                                ? "+".concat(u)
                                                : u
                                            );
                                      });
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, n);
                          })
                        );
                      });
                  case 1:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      }
      function x(e, t, n) {
        h.value
          .filter(function (t) {
            return t.data.find(function (t) {
              return t.symbol === e.symbol;
            });
          })
          .forEach(function (r) {
            (null == r ? void 0 : r.data) &&
              r.data
                .filter(function (t) {
                  return t.symbol === e.symbol;
                })
                .forEach(function (e) {
                  e[t] = n;
                });
          });
      }
      return (
        s ||
          (s = new a.DetailApi(function (e) {
            return r.StockBridge.request(e, "GET");
          })),
        p || (p = new i.StockBasketAPI(r.StockBridge)),
        n(
          f,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    g();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        ),
        r.onMounted(function () {
          y();
        }),
        r.onActivated(function () {
          y();
        }),
        r.onDeactivated(function () {
          clearTimeout(l);
        }),
        r.onBeforeUnmount(function () {
          clearTimeout(l);
        }),
        {
          basketData: h,
          loadMore: g,
          showEmpty: k,
          getTradeTime: y,
          tradeTimer: l,
        }
      );
    },
    onPageShow: function () {
      this.getTradeTime();
    },
    onPageHide: function () {
      clearTimeout(this.tradeTimer);
    },
  };
Array ||
  (
    r.resolveComponent("basket-history-block") +
    r.resolveComponent("empty-show")
  )();
var c = r._export_sfc(u, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return r.e(
        {
          a: r.f(o.basketData, function (e, t, n) {
            return {
              a: r.sr("listRef", "54b1c2ea-0-" + n, { f: 1 }),
              b: e.timeString,
              c: e.timeString,
              d: "54b1c2ea-0-" + n,
              e: r.p({ id: e.timeString, data: e.data, title: e.timeString }),
            };
          }),
          b: o.showEmpty,
        },
        (o.showEmpty, {})
      );
    },
  ],
  ["__scopeId", "data-v-54b1c2ea"],
]);
wx.createComponent(c);
