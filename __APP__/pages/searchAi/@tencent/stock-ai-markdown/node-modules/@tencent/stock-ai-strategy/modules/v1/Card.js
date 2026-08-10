var t = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  u = function (t, e, r) {
    return new Promise(function (n, o) {
      var a = function (t) {
          try {
            u(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          try {
            u(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        u = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, c);
        };
      u((r = r.apply(t, e)).next());
    });
  },
  i = require("../../../../../../../../../common/vendor.js"),
  s = require("../../../../../../../Base64/base64.js"),
  l = require("../../lib/report.js"),
  f = {
    components: {
      StockList: function () {
        return "../../components/CardStockList.js";
      },
    },
    props: { data: Object, context: Object },
    setup: function (r, f) {
      var p = f.emit,
        d = i.ref([]),
        v = i.ref(""),
        m = i.ref(""),
        h = i.ref([]),
        k = i.ref(0),
        y = i.ref(!1);
      function _(t) {
        var u =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          s = (function (t, r) {
            for (var u in r || (r = {})) o.call(r, u) && c(t, u, r[u]);
            if (n) {
              var i,
                s = e(n(r));
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  u = i.value;
                  a.call(r, u) && c(t, u, r[u]);
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
            }
            return t;
          })(
            {
              requestid: r.context.requestId,
              session: r.context.sessionId,
              stocklist: d.value
                .map(function (t) {
                  return t.code;
                })
                .join(","),
              positionlist: d.value
                .map(function (t, e) {
                  return e;
                })
                .join(","),
              fchannel_id_fm_i: "I0O00p000l164",
              foperation_purpose: "zixuan",
            },
            u
          );
        i.length > 0 &&
          i.forEach(function (t) {
            delete s[t];
          }),
          l.report(t, s);
      }
      function b(e) {
        return u(
          this,
          null,
          t().mark(function r() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        l.queryStocksAddStatus(
                          e.map(function (t) {
                            return t.code;
                          })
                        )
                      );
                    case 3:
                      (n = t.sent),
                        e.forEach(function (t) {
                          t.starred = 1 === n.data[t.code];
                        }),
                        (d.value = e),
                        (t.next = 9);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0));
                    case 9:
                      y.value = !0;
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[0, 7]]
            );
          })
        );
      }
      return (
        i.watch(
          function () {
            return v.value;
          },
          function (t) {
            _("jichu.ai_search.xuangu_plugin_brow", { xgfactor: t }, [
              "fchannel_id_fm_i",
              "foperation_purpose",
            ]);
          }
        ),
        i.watch(
          function () {
            return r.data;
          },
          function (t) {
            var r = t.stocks,
              c = t.update_time,
              u = t.conditions,
              i = t.selection_desc,
              s = t.total_stocks;
            (d.value = r.map(function (t) {
              return (t.starred = !1), t;
            })),
              (v.value = l.formatDate(1e3 * +c, "MM-dd hh:mm")),
              (m.value = i),
              (h.value = u.map(function (t) {
                var r = t;
                r.description, r.category;
                return (function (t, r) {
                  var c = {};
                  for (var u in t)
                    o.call(t, u) && r.indexOf(u) < 0 && (c[u] = t[u]);
                  if (null != t && n) {
                    var i,
                      s = e(n(t));
                    try {
                      for (s.s(); !(i = s.n()).done; ) {
                        u = i.value;
                        r.indexOf(u) < 0 && a.call(t, u) && (c[u] = t[u]);
                      }
                    } catch (t) {
                      s.e(t);
                    } finally {
                      s.f();
                    }
                  }
                  return c;
                })(r, ["description", "category"]);
              })),
              (k.value = s),
              b(r);
          },
          { immediate: !0 }
        ),
        i.watch(
          function () {
            return y.value;
          },
          function () {
            _("jichu.ai_search.xuangu_plugin_stock_star_brow", {
              hasaddlist: d.value
                .map(function (t) {
                  return Number(t.starred);
                })
                .join(","),
            });
          }
        ),
        {
          refresh: function () {
            return u(
              this,
              null,
              t().mark(function e() {
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        b(d.value);
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, e);
              })
            );
          },
          stockList: d,
          updateTime: v,
          strategySummary: m,
          totalStockCount: k,
          onEntryClick: function () {
            var t = s.base64Exports.btoa(
              encodeURIComponent(JSON.stringify(h.value))
            );
            p("view", t);
          },
          onStockClick: function (t) {
            p("click", t);
          },
          onStockStarStatusChange: function (e) {
            return u(
              this,
              null,
              t().mark(function r() {
                var n;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            _(
                              "jichu.ai_search.xuangu_plugin_stock_star_" +
                                (e.starred ? "cancel" : "add")
                            ),
                            e.starred || p("star", e),
                            (t.prev = 1),
                            (t.next = 4),
                            l.updateStockAddStatus(e, e.starred)
                          );
                        case 4:
                          if (0 == (n = t.sent).code) {
                            t.next = 7;
                            break;
                          }
                          throw n.msg;
                        case 7:
                          (d.value = d.value.map(function (t) {
                            return (
                              t.code === e.code && (t.starred = !e.starred), t
                            );
                          })),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10), (t.t0 = t.catch(1)), p("error", t.t0);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 10]]
                );
              })
            );
          },
        }
      );
    },
  };
Array || i.resolveComponent("StockList")();
var p = i._export_sfc(f, [
  [
    "render",
    function (t, e, r, n, o, a) {
      return {
        a: i.t(n.updateTime),
        b: i.o(function () {
          return n.onEntryClick && n.onEntryClick.apply(n, arguments);
        }, 5982),
        c: i.t(n.strategySummary),
        d: i.o(function () {
          return n.onEntryClick && n.onEntryClick.apply(n, arguments);
        }, 5983),
        e: i.o(n.onStockStarStatusChange, 5984),
        f: i.o(n.onStockClick, 5985),
        g: i.p({ version: "v1", stocks: n.stockList }),
        h: i.t(n.totalStockCount),
        i: i.o(function () {
          return n.onEntryClick && n.onEntryClick.apply(n, arguments);
        }, 5986),
      };
    },
  ],
  ["__scopeId", "data-v-fb0f543a"],
]);
wx.createComponent(p);
