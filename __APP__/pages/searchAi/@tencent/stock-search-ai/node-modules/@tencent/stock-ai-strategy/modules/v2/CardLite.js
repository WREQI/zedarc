var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  u = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, c);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  i = require("../../../../../../../../../common/vendor.js"),
  s = require("../../../../../../../Base64/base64.js"),
  l = require("../../lib/report.js"),
  d = {
    components: {
      StockList: function () {
        return "../../components/CardStockListLite.js";
      },
    },
    props: { title: String, data: Object, context: Object },
    setup: function (n, d) {
      var f = d.emit,
        p = [],
        v = 3,
        h = i.ref([]),
        m = i.ref([]),
        g = i.ref(""),
        k = i.ref(""),
        b = i.ref(!1),
        S = i.ref(!1),
        x = i.computed(function () {
          var e, t;
          return !(null ==
          (t =
            null == (e = h.value)
              ? void 0
              : e.filter(function (e) {
                  return !e.starred;
                }))
            ? void 0
            : t.length);
        });
      function _(e) {
        var u,
          i,
          s,
          d,
          f =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          p =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          v = (function (e, n) {
            for (var u in n || (n = {})) a.call(n, u) && c(e, u, n[u]);
            if (r) {
              var i,
                s = t(r(n));
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  u = i.value;
                  o.call(n, u) && c(e, u, n[u]);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            }
            return e;
          })(
            {
              requestid: null == (u = n.context) ? void 0 : u.requestId,
              session: null == (i = n.context) ? void 0 : i.sessionId,
              subScene: null == (s = n.context) ? void 0 : s.subScene,
              mbti_strategy: null == (d = n.context) ? void 0 : d.mbti_strategy,
              stocklist: h.value
                .map(function (e) {
                  return e.code;
                })
                .join(","),
              positionlist: h.value
                .map(function (e, t) {
                  return t;
                })
                .join(","),
              fchannel_id_fm_i: "I0O00p000l164",
              foperation_purpose: "zixuan",
            },
            f
          );
        p.length > 0 &&
          p.forEach(function (e) {
            delete v[e];
          }),
          l.report(e, v);
      }
      function y(t) {
        return u(
          this,
          null,
          e().mark(function n() {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        l.queryStocksAddStatus(
                          t.map(function (e) {
                            return e.code;
                          })
                        )
                      );
                    case 3:
                      (r = e.sent),
                        t.forEach(function (e) {
                          e.starred = 1 === r.data[e.code];
                        }),
                        (h.value = t.slice(0, 3)),
                        w(),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                      b.value = !0;
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 7]]
            );
          })
        );
      }
      function w() {
        _("base.ai_search.xuangu_plugin_stocklite_brow", {
          hasaddlist: h.value
            .map(function (e) {
              return Number(e.starred);
            })
            .join(","),
        });
      }
      return (
        i.watch(
          function () {
            return n.data;
          },
          function (e, t) {
            if (JSON.stringify(e) !== JSON.stringify(t)) {
              var n = e.update_time,
                r = e.condition_id,
                a = e.data,
                o = a.stocks,
                c = a.columns;
              (m.value = c),
                (k.value = r),
                (g.value = l.formatDate(n, "MM-dd hh:mm")),
                (p = o),
                (S.value = o.length > 3),
                y(o);
            }
          },
          { immediate: !0 }
        ),
        {
          refresh: function () {
            return u(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        y(h.value);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          stockList: h,
          columnsList: m,
          updateTime: g,
          isAllAdded: x,
          isChangeFlag: S,
          onEntryClick: function () {
            var e = s.base64Exports.btoa(
              encodeURIComponent(JSON.stringify({ condition_id: k.value }))
            );
            f("view", e);
          },
          onStockClick: function (e) {
            f("click", e);
          },
          onStockStarStatusChange: function (t) {
            return u(
              this,
              null,
              e().mark(function n() {
                var r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            _(
                              "base.ai_search.xuangu_plugin_stocklite_" +
                                (t.starred ? "cancel" : "add")
                            ),
                            t.starred || f("star", t),
                            (e.prev = 1),
                            (e.next = 4),
                            l.updateStockAddStatus(t, t.starred)
                          );
                        case 4:
                          if (0 == (r = e.sent).code) {
                            e.next = 7;
                            break;
                          }
                          throw r.msg;
                        case 7:
                          (h.value = h.value.map(function (e) {
                            return (
                              e.code === t.code && (e.starred = !t.starred), e
                            );
                          })),
                            i.StockBridge.busEmit("common-toggleAdded"),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1)), f("error", e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            );
          },
          onStockAllStarStatusChange: function () {
            return u(
              this,
              null,
              e().mark(function t() {
                var n, r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (_(
                              "base.ai_search.xuangu_plugin_stocklite_all_add"
                            ),
                            !(n = h.value.filter(function (e) {
                              return !e.starred;
                            })).length)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            l.updateStockAddStatus(n, 0)
                          );
                        case 6:
                          if (0 == (r = e.sent).code) {
                            e.next = 9;
                            break;
                          }
                          throw r.msg;
                        case 9:
                          (h.value = h.value.map(function (e) {
                            return (e.starred = !0), e;
                          })),
                            f("starAll", h.value),
                            i.StockBridge.busEmit("common-toggleAdded"),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(3)), f("error", e.t0);
                        case 15:
                          e.next = 18;
                          break;
                        case 17:
                          i.StockRouter.routeTo({ name: "ChooseIndex" });
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 12]]
                );
              })
            );
          },
          onStockChange: function (t) {
            return u(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        _(
                          "base.ai_search.xuangu_plugin_stocklite_change_click"
                        ),
                          (v = p.length - v <= 3 ? 0 : v + 3),
                          (h.value = p.slice(v, v + 3)),
                          w();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        }
      );
    },
  };
Array || i.resolveComponent("StockList")();
var f = i._export_sfc(d, [
  [
    "render",
    function (e, t, n, r, a, o) {
      return i.e(
        { a: r.stockList.length },
        r.stockList.length
          ? i.e(
              { b: i.t(n.title), c: i.t(r.updateTime), d: r.isChangeFlag },
              r.isChangeFlag
                ? {
                    e: i.o(function () {
                      return (
                        r.onStockChange && r.onStockChange.apply(r, arguments)
                      );
                    }, 5605),
                  }
                : {},
              {
                f: i.o(r.onStockStarStatusChange, 5606),
                g: i.o(r.onStockClick, 5607),
                h: i.p({
                  version: "v2",
                  stocks: r.stockList,
                  columnsList: r.columnsList,
                }),
                i: i.t(r.isAllAdded ? "去自选查看" : "一键添加"),
                j: r.isAllAdded ? 1 : "",
                k: i.o(function () {
                  return (
                    r.onStockAllStarStatusChange &&
                    r.onStockAllStarStatusChange.apply(r, arguments)
                  );
                }, 5608),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1d3ff431"],
]);
wx.createComponent(f);
