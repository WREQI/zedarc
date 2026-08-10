require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  d = require("../../../../../common/vendor.js"),
  f = require("../utils/index.js"),
  m = require("../../stock-hq-data/index.js"),
  p = {
    components: {
      StockHistoryBlock: function () {
        return "./stockHistoryBlock.js";
      },
      EmptyShow: function () {
        return "./emptyShow.js";
      },
    },
    setup: function (n, p) {
      var v,
        k = this,
        b = p.emit,
        h = null,
        y = 0,
        g = !1,
        x = d.ref(null),
        S = d.ref([]),
        w = d.computed(function () {
          return 0 === S.value.length;
        }),
        A = d.ref([]),
        I = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        B = (d.StockBridge.getPlatform() || {}).isZxg;
      function E(e, t, r) {
        S.value
          .filter(function (t) {
            return t.data.find(function (t) {
              return t.symbol === e.symbol;
            });
          })
          .forEach(function (n) {
            (null == n ? void 0 : n.data) &&
              n.data
                .filter(function (t) {
                  return t.symbol === e.symbol;
                })
                .forEach(function (e) {
                  e[t] = r;
                });
          });
      }
      function T(e) {
        return l(
          this,
          null,
          r().mark(function t() {
            var n;
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!B) {
                      t.next = 7;
                      break;
                    }
                    return (t.next = 3), I.$sdk.checkStockZxg(e.symbol);
                  case 3:
                    (n = t.sent),
                      (n = Boolean(null == n ? void 0 : n.exist)),
                      E(e, "added", n),
                      (t.next = 10);
                    break;
                  case 7:
                    return (t.next = 9), P();
                  case 9:
                    E(e, "added", A.value.includes(e.symbol));
                  case 10:
                    x.value = null;
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      }
      function P() {
        return l(
          this,
          null,
          r().mark(function e() {
            var t, n, o, a, u;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), f.AccountAPI.queryStockAdd();
                  case 2:
                    0 === (null == (a = e.sent) ? void 0 : a.code) &&
                      (u =
                        null ==
                        (n =
                          null == (t = null == a ? void 0 : a.data)
                            ? void 0
                            : t.grouplist)
                          ? void 0
                          : n.find(function (e) {
                              var t;
                              return (
                                "1" ===
                                (null == (t = e.groupinfo) ? void 0 : t.type)
                              );
                            })) &&
                      (A.value =
                        (null == (o = null == u ? void 0 : u.stocklist)
                          ? void 0
                          : o.map(function (e) {
                              return e.symbol;
                            })) || []);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }
      function _(e) {
        return l(
          this,
          null,
          r().mark(function n() {
            var l, d;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (Array.isArray(e)) {
                      r.next = 2;
                      break;
                    }
                    return r.abrupt("return");
                  case 2:
                    if (
                      ((d = {}),
                      (r.t0 =
                        B &&
                        (null == (l = I.$sdk) ? void 0 : l.checkStockInGroup)),
                      !r.t0)
                    ) {
                      r.next = 11;
                      break;
                    }
                    return (
                      (r.next = 7),
                      I.$sdk.checkStockInGroup(
                        e.map(function (e) {
                          return e.symbol;
                        })
                      )
                    );
                  case 7:
                    if (((r.t1 = r.sent), r.t1)) {
                      r.next = 10;
                      break;
                    }
                    r.t1 = {};
                  case 10:
                    d = r.t1;
                  case 11:
                    return r.abrupt(
                      "return",
                      e.map(function (e) {
                        var r,
                          n,
                          l = m.utils.splitSymbol(e.symbol),
                          f = l.market,
                          p = l.scode;
                        return (
                          (r = (function (e, r) {
                            for (var n in r || (r = {}))
                              i.call(r, n) && s(e, n, r[n]);
                            if (u) {
                              var o,
                                a = t(u(r));
                              try {
                                for (a.s(); !(o = a.n()).done; ) {
                                  n = o.value;
                                  c.call(r, n) && s(e, n, r[n]);
                                }
                              } catch (e) {
                                a.e(e);
                              } finally {
                                a.f();
                              }
                            }
                            return e;
                          })({}, e)),
                          (n = {
                            market: f,
                            scode: m.utils.trimScode(p),
                            originalScode: p,
                            added: B ? d[e.symbol] : A.value.includes(e.symbol),
                          }),
                          o(r, a(n))
                        );
                      })
                    );
                  case 12:
                  case "end":
                    return r.stop();
                }
            }, n);
          })
        );
      }
      function j(t) {
        return l(
          this,
          null,
          r().mark(function n() {
            var o, a, u, i, c, s, l;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (((r.prev = 0), t)) {
                        (y = 0), !0;
                        try {
                          clearTimeout(v), q();
                        } catch (e) {}
                      }
                      if (!g) {
                        r.next = 4;
                        break;
                      }
                      return r.abrupt("return", !1);
                    case 4:
                      if (
                        ((g = !0),
                        (r.t0 = B || (0 !== A.value.length && !t)),
                        r.t0)
                      ) {
                        r.next = 9;
                        break;
                      }
                      return (r.next = 9), P();
                    case 9:
                      return (
                        (r.next = 11),
                        f.AccountAPI.queryMyHistory(f.RECORD_TYPE.stock, y, 20)
                      );
                    case 11:
                      if (0 !== (o = r.sent).retcode) {
                        r.next = 21;
                        break;
                      }
                      if (
                        ((u = o.has_more),
                        (i = o.offset_time),
                        (c = o.stock_records),
                        u || b("loadAll", "stock"),
                        0 !== c.length)
                      ) {
                        r.next = 16;
                        break;
                      }
                      return r.abrupt("return", ((g = !1), !0));
                    case 16:
                      return (r.next = 18), _(c);
                    case 18:
                      return (
                        (s = r.sent),
                        (l = f.getDateGroupData(s)),
                        r.abrupt(
                          "return",
                          (0 !== y && f.mergeSameDayData(S.value, l),
                          t && (S.value = []),
                          (a = S.value).splice.apply(
                            a,
                            [S.value.length, 0].concat(e(l))
                          ),
                          (y = i),
                          (g = !1),
                          !u)
                        )
                      );
                    case 21:
                      (g = !1),
                        d.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        }),
                        (r.next = 27);
                      break;
                    case 24:
                      (r.prev = 24),
                        (r.t1 = r.catch(0)),
                        (g = !1),
                        d.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        });
                    case 27:
                    case "end":
                      return r.stop();
                  }
              },
              n,
              null,
              [[0, 24]]
            );
          })
        );
      }
      function q() {
        return l(
          this,
          null,
          r().mark(function e() {
            var t, n, o, a, u, i, c, s, l, d;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      h.getMarketState({ market: 0 }, { needProcess: !0 })
                    );
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = "";
                  case 5:
                    (u = e.t0),
                      (i = (
                        (null == (t = null == u ? void 0 : u.split)
                          ? void 0
                          : t.call(u, "|")) || []
                      ).map(function (e) {
                        return e.split("_");
                      })),
                      (c = i.filter(function (e) {
                        return "NEWSH" === e[0];
                      })),
                      (s = i.filter(function (e) {
                        return "NEWHK" === e[0];
                      })),
                      (l = i.filter(function (e) {
                        return "NEWUS" === e[0];
                      })),
                      (d =
                        "open" ===
                          (null == (n = null == c ? void 0 : c[0])
                            ? void 0
                            : n[1]) ||
                        "open" ===
                          (null == (o = null == s ? void 0 : s[0])
                            ? void 0
                            : o[1]) ||
                        "open" ===
                          (null == (a = null == l ? void 0 : l[0])
                            ? void 0
                            : a[1])) && f.getCurIdInView(I, "listRef", C),
                      d &&
                        (v = setTimeout(function () {
                          q(), clearTimeout(v);
                        }, 5e3));
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }
      function C(e) {
        var t = this;
        S.value
          .filter(function (t) {
            return e.includes(t.timeString);
          })
          .forEach(function (e) {
            return l(
              t,
              null,
              r().mark(function t() {
                var n, o, a;
                return r().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.data),
                          (o = n
                            .filter(function (e) {
                              return !(
                                m.utils.isHKMarket(e.market) &&
                                !m.utils.isIndex(e.type)
                              );
                            })
                            .map(function (e) {
                              return e.symbol;
                            })),
                          (t.next = 4),
                          h.getQTs(o)
                        );
                      case 4:
                        (a = t.sent),
                          n.forEach(function (e) {
                            var t, r;
                            (null == (t = a[e.symbol]) ? void 0 : t[5]) &&
                              E(e, "zdf", a[e.symbol][5]),
                              (null == (r = a[e.symbol]) ? void 0 : r[3]) &&
                                E(e, "price", a[e.symbol][3]);
                          });
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          });
      }
      return (
        h ||
          (h = new m.DetailApi(function (e) {
            return d.StockBridge.request(e, "GET");
          })),
        l(
          k,
          null,
          r().mark(function e() {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    j(),
                      B || P(),
                      d.StockBridge.report("history.stock_list.brow"),
                      B &&
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "visible" === document.visibilityState &&
                              x.value &&
                              T(x.value);
                          }
                        );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ),
        d.onMounted(function () {
          q();
        }),
        d.onActivated(function () {
          P(), x.value && T(x.value), q();
        }),
        d.onDeactivated(function () {
          clearTimeout(v);
        }),
        d.onBeforeUnmount(function () {
          clearTimeout(v);
        }),
        {
          stockData: S,
          toggleAdd: function (e, t) {
            return l(
              this,
              null,
              r().mark(function n() {
                var o, a, u;
                return r().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (((r.prev = 0), (o = e.symbol), !B)) {
                            r.next = 16;
                            break;
                          }
                          if ("add" !== t) {
                            r.next = 10;
                            break;
                          }
                          return (r.next = 6), I.$sdk.addStockZxg(o);
                        case 6:
                          "addStockToGroup:ok" !==
                          (null == (a = r.sent) ? void 0 : a.err_msg)
                            ? d.StockBridge.toast("添加失败")
                            : (d.StockBridge.toast("已添加自选"),
                              E(e, "added", "add" === t)),
                            (r.next = 14);
                          break;
                        case 10:
                          return (r.next = 12), I.$sdk.removeStockFromGroup(o);
                        case 12:
                          "removeStockFromGroup:ok" !==
                          (null == (u = r.sent) ? void 0 : u.err_msg)
                            ? d.StockBridge.toast("删除失败")
                            : (d.StockBridge.toast("已删除自选"),
                              E(e, "added", "add" === t));
                        case 14:
                          r.next = 24;
                          break;
                        case 16:
                          return (
                            (r.next = 18), f.AccountAPI.toggleChooseAdd(o, t)
                          );
                        case 18:
                          if (((r.t0 = r.sent.code), 0 !== r.t0)) {
                            r.next = 23;
                            break;
                          }
                          d.StockBridge.toast(
                            "add" === t ? "已添加自选" : "已删除自选"
                          ),
                            E(e, "added", "add" === t),
                            (r.next = 24);
                          break;
                        case 23:
                          d.StockBridge.toast("系统繁忙", "error");
                        case 24:
                          r.next = 29;
                          break;
                        case 26:
                          (r.prev = 26),
                            (r.t1 = r.catch(0)),
                            d.StockBridge.toast("系统繁忙", "error");
                        case 29:
                        case "end":
                          return r.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 26]]
                );
              })
            );
          },
          loadMore: j,
          showEmpty: w,
          refreshStockAddedStatus: T,
          getStockAddList: P,
          handleClickItem: function (e) {
            x.value = e;
          },
          lastItem: x,
          getTradeTime: q,
          tradeTimer: v,
        }
      );
    },
    onPageShow: function () {
      this.getStockAddList(),
        this.lastItem && this.refreshStockAddedStatus(this.lastItem),
        this.getTradeTime();
    },
    onPageHide: function () {
      clearTimeout(this.tradeTimer);
    },
  };
Array ||
  (
    d.resolveComponent("stock-history-block") + d.resolveComponent("empty-show")
  )();
var v = d._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return d.e(
        {
          a: d.f(n.stockData, function (e, t, r) {
            return {
              a: d.sr("listRef", "06906577-0-" + r, { f: 1 }),
              b: e.timeString,
              c: e.timeString,
              d: d.o(n.toggleAdd, 1643, e.timeString),
              e: d.o(n.handleClickItem, 1644, e.timeString),
              f: "06906577-0-" + r,
              g: d.p({ id: e.timeString, data: e.data, title: e.timeString }),
            };
          }),
          b: n.showEmpty,
        },
        (n.showEmpty, {})
      );
    },
  ],
  ["__scopeId", "data-v-06906577"],
]);
wx.createComponent(v);
