var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  u = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, c);
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
        return "../../components/CardStockList.js";
      },
    },
    props: { style: String, data: Object, context: Object, mocktrade: Boolean },
    setup: function (n, d) {
      var f = d.emit,
        p = i.ref([]),
        m = i.ref([]),
        v = i.ref(""),
        k = i.ref(""),
        h = i.ref(""),
        _ = i.ref(0),
        y = i.ref(!1),
        b = i.computed(function () {
          return n.mocktrade;
        });
      function S(e) {
        var u,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          d = (function (e, n) {
            for (var u in n || (n = {})) o.call(n, u) && c(e, u, n[u]);
            if (r) {
              var i,
                s = t(r(n));
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  u = i.value;
                  a.call(n, u) && c(e, u, n[u]);
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
              requestid: n.context.requestId,
              session: n.context.sessionId,
              subScene: null == (u = n.context) ? void 0 : u.subScene,
              stocklist: p.value
                .map(function (e) {
                  return e.code;
                })
                .join(","),
              positionlist: p.value
                .map(function (e, t) {
                  return t;
                })
                .join(","),
              fchannel_id_fm_i: "I0O00p000l164",
              foperation_purpose: "zixuan",
            },
            i
          );
        s.length > 0 &&
          s.forEach(function (e) {
            delete d[e];
          }),
          l.report(e, d);
      }
      function x(t) {
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
                        (p.value = t),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                      y.value = !0;
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
      return (
        i.watch(
          function () {
            return v.value;
          },
          function (e) {
            S("jichu.ai_search.xuangu_plugin_brow", { xgfactor: e }, [
              "fchannel_id_fm_i",
              "foperation_purpose",
            ]);
          }
        ),
        i.watch(
          function () {
            return n.data;
          },
          function (e) {
            var t = e.update_time,
              n = e.condition_id,
              r = e.selection_desc,
              o = e.total_stocks,
              a = e.data,
              c = a.stocks,
              u = a.columns;
            (p.value = c.map(function (e) {
              return (e.starred = !1), e;
            })),
              (m.value = u),
              (h.value = n),
              (v.value = l.formatDate(t, "MM-dd hh:mm")),
              (k.value = r),
              (_.value = o),
              x(c);
          },
          { immediate: !0 }
        ),
        i.watch(
          function () {
            return y.value;
          },
          function () {
            S("jichu.ai_search.xuangu_plugin_stock_star_brow", {
              hasaddlist: p.value
                .map(function (e) {
                  return Number(e.starred);
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
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        x(p.value);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          stockList: p,
          columnsList: m,
          updateTime: v,
          strategySummary: k,
          totalStockCount: _,
          showMockTrade: b,
          onEntryClick: function (e) {
            if ("detail" === e) {
              var t = s.base64Exports.btoa(
                encodeURIComponent(JSON.stringify({ condition_id: h.value }))
              );
              f("view", t);
            } else
              "mocktrade" === e &&
                (S("jichu.ai_search.xuangu_plugin_mocktrade_click", {
                  requestid: n.context.requestId,
                  conditionid: h.value,
                }),
                i.StockRouter.routeTo({
                  name: "mocktrade",
                  query: { scene: "fromai", type: "jq", id: h.value },
                }));
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
                            S(
                              "jichu.ai_search.xuangu_plugin_stock_star_" +
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
                          (p.value = p.value.map(function (e) {
                            return (
                              e.code === t.code && (e.starred = !t.starred), e
                            );
                          })),
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
        }
      );
    },
  };
Array || i.resolveComponent("StockList")();
var f = i._export_sfc(d, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return i.e(
        {
          a: i.t(r.updateTime),
          b: i.o(function () {
            return r.onEntryClick && r.onEntryClick.apply(r, arguments);
          }, 5991),
          c: i.t(r.strategySummary),
          d: i.o(function () {
            return r.onEntryClick && r.onEntryClick.apply(r, arguments);
          }, 5992),
          e: i.o(r.onStockStarStatusChange, 5993),
          f: i.o(r.onStockClick, 5994),
          g: i.p({
            version: "v2",
            stocks: r.stockList,
            columnsList: r.columnsList,
          }),
          h: i.t(r.totalStockCount),
          i: i.o(function (e) {
            return r.onEntryClick("detail");
          }, 5995),
          j: r.showMockTrade,
        },
        r.showMockTrade
          ? {
              k: i.o(function (e) {
                return r.onEntryClick("mocktrade");
              }, 5996),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-180d8133"],
]);
wx.createComponent(f);
