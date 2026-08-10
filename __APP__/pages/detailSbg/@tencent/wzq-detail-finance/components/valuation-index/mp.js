require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  u = function (t, e) {
    for (var r in e || (e = {})) l.call(e, r) && s(t, r, e[r]);
    if (a) {
      var o,
        i = n(a(e));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          r = o.value;
          c.call(e, r) && s(t, r, e[r]);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
    return t;
  },
  p = function (t, e) {
    return o(t, i(e));
  },
  f = require("../../../../../../common/vendor.js"),
  d = require("../../../stock-hq-data/index.js");
function h(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  return isNaN(t)
    ? t
    : t
    ? (+t >= 0 ? "" : "-") + y(Math.abs(t), 1, e, e)
    : "--";
}
var y = function (t, e, n, r, o) {
    return (
      (t = parseFloat(t || 0)),
      (e = parseInt(e || 1, 10)),
      (n = parseInt(n || 0, 10)),
      (r = parseInt(r || 2, 10)),
      (o = o || ""),
      (t =
        t < 1e4 * e
          ? t.toFixed(n)
          : t >= 1e4 * e && t < 1e8
          ? "".concat((t / 1e4).toFixed(r), "万")
          : "".concat((t / 1e8).toFixed(r), "亿")) + o
    );
  },
  v = "yysr",
  m = "mgsy",
  g = "--";
function b(n, r) {
  var o = this,
    i = f.ref([]),
    a = f.ref(!1),
    l = f.computed(function () {
      return a.value ? i.value : i.value.slice(0, 3);
    }),
    c = f.computed(function () {
      return 3 === l.value.length || 0 === l.value.length || l.value.length > 5
        ? ""
        : "gzzb-list-".concat(
            ["", "one", "two", "", "unfold-four", "unfold-five"][l.value.length]
          );
    }),
    s = f.computed(function () {
      return ["mpweapp", "mpwzq"].includes("mpweapp");
    }),
    y = f.computed(function () {
      return d.utils.isHKMarket(n.market) || d.utils.isUSMarket(n.market);
    }),
    b = f.computed(function () {
      var t = (y.value && n.originCurrency) || "",
        e = t ? "(".concat(t, ")") : "";
      return n.jumpFromAiPlugin
        ? {
            yysr: {
              title: ["财报周期", "营业收入".concat(e), "营收同比"],
              pct: ["35%", "60%", "40%"],
              hkpct: ["35%", "60%", "40%"],
            },
            mgsy: {
              title: ["财报周期", "每股收益".concat(e), "每股收益同比"],
              pct: ["35%", "60%", "40%"],
              hkpct: ["35%", "60%", "40%"],
            },
            jlr: {
              title: ["财报周期", "净利润".concat(e), "净利润同比"],
              pct: ["35%", "60%", "40%"],
              hkpct: ["35%", "60%", "40%"],
            },
          }
        : {
            yysr: {
              title: ["财报周期", "市销率", "营业收入".concat(e), "营收同比"],
              pct: ["26%", "35%", "35%", "30%"],
              hkpct: [198, 98, e && e.length > 2 ? 196 : 169, 126],
            },
            mgsy: {
              title: [
                "财报周期",
                "市盈率",
                "每股收益".concat(e),
                "每股收益同比",
              ],
              pct: ["26%", "31%", "32%", "37%"],
              hkpct: [198, 98, e && e.length > 2 ? 196 : 169, 152],
            },
            jlr: {
              title: [
                "财报周期",
                "净资产收益率",
                "净利润".concat(e),
                "净利润同比",
              ],
              pct: ["26%", "35%", "35%", "30%"],
              hkpct: [198, 152, e && e.length > 2 ? 180 : 165, 144],
            },
          };
    }),
    w = f.computed(function () {
      var t;
      return (
        (null == (t = b.value[n.ylycSelectTab || "yysr"]) ? void 0 : t.title) ||
        []
      );
    }),
    L = f.computed(function () {
      var t = b.value[n.ylycSelectTab || "yysr"] || {};
      return (
        (y.value && !n.jumpFromAiPlugin
          ? t.hkpct.map(function (t) {
              return s.value
                ? "".concat(t, "rpx")
                : "".concat(Math.floor((t / 2) * 1.1), "px");
            })
          : t.pct) || []
      );
    }),
    _ = function () {
      var t = e(n.indexData || []).reverse();
      if (y.value) {
        var o = n.unit || "";
        (t = t.filter(function (t) {
          return t.label;
        })),
          (i.value = t.map(function (t) {
            var e = g,
              r = g,
              i = t || {},
              a = i.PSTTM,
              l = i.PETTM,
              c = i.operating_rev,
              s = i.fcst_rev,
              f = i.tbbd,
              d = i.roe_weighted,
              h = i.net_profit,
              y = i.fcst_profit,
              b = i.eps,
              w = i.fcst_eps,
              L = f ? "".concat(parseFloat(100 * f).toFixed(2), "%") : g;
            n.ylycSelectTab === v
              ? ((e = a ? "".concat(parseFloat(a).toFixed(2)) : g),
                (r = c || s))
              : "jlr" === n.ylycSelectTab
              ? ((e = d ? "".concat(parseFloat(d).toFixed(2), "%") : g),
                (r = h || y))
              : n.ylycSelectTab === m &&
                ((e = l ? "".concat(parseFloat(l).toFixed(2)) : g),
                (r = b || w));
            var _ = "万" === o ? 1e4 : 1;
            return n.jumpFromAiPlugin
              ? p(u({}, t), {
                  value: [
                    r
                      ? ""
                          .concat((parseFloat(r) / _).toFixed(3))
                          .concat(1 === _ ? o : "亿")
                      : g,
                    L,
                  ],
                  showStatus: "预测值" === t.label,
                })
              : p(u({}, t), {
                  value: [
                    e,
                    r
                      ? ""
                          .concat((parseFloat(r) / _).toFixed(3))
                          .concat(1 === _ ? o : "亿")
                      : g,
                    L,
                  ],
                  showStatus: "预测值" === t.label,
                });
          }));
      } else
        i.value = t.map(function (t) {
          var e = g,
            r = g,
            o = g,
            i = t || {},
            a = i.fcon_ps,
            l = i.fcst_con_ps,
            c = i.operating_rev,
            s = i.fcst_rev,
            f = i.main_rev_yoy,
            d = i.fcst_mainrev_yoy,
            y = i.fcon_roe,
            b = i.fcst_con_roe,
            w = i.net_profit,
            L = i.fcst_profit,
            _ = i.net_profit_yoy,
            S = i.fcst_profit_yoy,
            F = i.fcon_pe,
            k = i.fcst_con_pe,
            x = i.eps,
            j = i.fcst_eps,
            T = i.fcon_eps_yoy,
            P = i.fcst_eps_yoy;
          if (n.ylycSelectTab === v) {
            var M = a || l,
              O = c || s;
            (e = M ? "".concat(parseFloat(M).toFixed(2)) : g),
              (r = O ? "".concat(h(O, 2)) : g),
              (o = f || d);
          } else if ("jlr" === n.ylycSelectTab) {
            var U = y || b,
              q = w || L;
            (e = U ? "".concat(parseFloat(U).toFixed(2), "%") : g),
              (r = q ? "".concat(h(q, 2)) : g),
              (o = _ || S);
          } else if (n.ylycSelectTab === m) {
            var A = F || k,
              C = x || j;
            (e = A ? "".concat(parseFloat(A).toFixed(2)) : g),
              (r = C ? "".concat(h(C, 2)) : g),
              (o = T || P);
          }
          return n.jumpFromAiPlugin
            ? p(u({}, t), {
                value: [r, o ? "".concat(parseFloat(o).toFixed(2), "%") : g],
                showStatus: "" === c,
              })
            : p(u({}, t), {
                value: [e, r, o ? "".concat(parseFloat(o).toFixed(2), "%") : g],
                showStatus: "" === c,
              });
        });
      f.nextTick$1(function () {
        "function" == typeof r && r();
      });
    };
  return (
    f.onMounted(function () {
      return (
        (e = o),
        null,
        (n = t().mark(function e() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  _();
                case 1:
                case "end":
                  return t.stop();
              }
          }, e);
        })),
        new Promise(function (t, r) {
          var o = function (t) {
              try {
                a(n.next(t));
              } catch (t) {
                r(t);
              }
            },
            i = function (t) {
              try {
                a(n.throw(t));
              } catch (t) {
                r(t);
              }
            },
            a = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(o, i);
            };
          a((n = n.apply(e, null)).next());
        })
      );
      var e, n;
    }),
    f.StockBridge.busOn("valuationIndexData-update", _),
    f.onBeforeUnmount(function () {
      f.StockBridge.busOff("valuationIndexData-update", _);
    }),
    {
      data: i,
      unfold: function () {
        (a.value = !a.value),
          a.value &&
            f.StockBridge.report(
              "hq.stock_detail.finance_profit_forcast_unfold_index_click"
            );
      },
      isUnfold: a,
      showList: l,
      titleList: w,
      columnWidthList: L,
      listClass: c,
      isHKUSMarket: y,
    }
  );
}
var w = {},
  L = {
    slidingContainerSelector: ".right-item",
    scrollWrapperSelector: ".scroll-wrapper",
    damping: 0.4,
    enableScrollX: !0,
    enableScrollY: !1,
  },
  _ = f.defineComponent({
    props: {
      market: { type: String, default: "" },
      ylycSelectTab: { type: String, default: "yysr" },
      indexData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      unit: { type: String, default: "" },
      originCurrency: { type: String, default: "" },
      jumpFromAiPlugin: { type: Boolean, default: !1 },
    },
    setup: function (t) {
      var e = ["mpwzq", "wzqlight"].includes("mpweapp"),
        n = f.ref(L),
        r = b(t, function () {
          n.value = p(u({}, L), {
            scrollWrapperSelector: ".".concat(t.ylycSelectTab),
          });
        });
      return {
        isLite: e,
        data: r.data,
        unfold: r.unfold,
        isUnfold: r.isUnfold,
        showList: r.showList,
        titleList: r.titleList,
        columnWidthList: r.columnWidthList,
        listClass: r.listClass,
        isHKUSMarket: r.isHKUSMarket,
        scrollOptions: n,
      };
    },
  });
"function" == typeof w && w(_);
var S = f._export_sfc(_, [
  [
    "render",
    function (t, e, n, r, o, i) {
      return f.e(
        { a: t.data && t.data.length },
        t.data && t.data.length
          ? f.e(
              { b: t.titleList && t.titleList.length },
              t.titleList && t.titleList.length
                ? { c: f.t(t.titleList[0]) }
                : {},
              { d: t.showList && t.showList.length > 0 },
              t.showList && t.showList.length > 0
                ? {
                    e: f.f(t.showList, function (e, n, r) {
                      return {
                        a: f.t(t.isHKUSMarket ? e.endTime : e.year),
                        b: f.t(
                          " (".concat(e.showStatus ? "预测" : "真实", ")")
                        ),
                        c: f.n(e.showStatus ? "content-row-orange" : ""),
                        d: n,
                      };
                    }),
                    f: f.n(t.listClass),
                  }
                : {},
              { g: t.columnWidthList[0], h: t.isHKUSMarket },
              t.isHKUSMarket
                ? f.e(
                    { i: t.titleList && t.titleList.length },
                    t.titleList && t.titleList.length
                      ? {
                          j: f.f(t.titleList.slice(1), function (e, n, r) {
                            return {
                              a: f.t(e),
                              b: n,
                              c: t.columnWidthList[n + 1],
                            };
                          }),
                        }
                      : {},
                    { k: t.showList && t.showList.length > 0 },
                    t.showList && t.showList.length > 0
                      ? {
                          l: f.f(t.showList, function (e, n, r) {
                            return {
                              a: f.f(e.value, function (e, n, r) {
                                return {
                                  a: f.t(e),
                                  b: "value-".concat(n),
                                  c: t.columnWidthList[n + 1],
                                };
                              }),
                              b: n,
                            };
                          }),
                          m: f.n(t.listClass),
                        }
                      : {},
                    { n: f.n(t.ylycSelectTab), o: t.scrollOptions }
                  )
                : f.e(
                    { p: t.titleList && t.titleList.length },
                    t.titleList && t.titleList.length
                      ? {
                          q: f.f(t.titleList.slice(1), function (e, n, r) {
                            return {
                              a: f.t(e),
                              b: n,
                              c: t.columnWidthList[n + 1],
                            };
                          }),
                        }
                      : {},
                    { r: t.showList && t.showList.length > 0 },
                    t.showList && t.showList.length > 0
                      ? {
                          s: f.f(t.showList, function (e, n, r) {
                            return {
                              a: f.f(e.value, function (e, n, r) {
                                return {
                                  a: f.t(e),
                                  b: "value-".concat(n),
                                  c: t.columnWidthList[n + 1],
                                };
                              }),
                              b: n,
                            };
                          }),
                          t: f.n(t.listClass),
                        }
                      : {},
                    { v: f.n(t.ylycSelectTab) }
                  ),
              { w: t.data.length > 3 && !t.jumpFromAiPlugin },
              t.data.length > 3 && !t.jumpFromAiPlugin
                ? {
                    x: f.n(t.isUnfold ? "arrow-up" : "arrow-down"),
                    y: f.o(function () {
                      return t.unfold && t.unfold.apply(t, arguments);
                    }, 4426),
                  }
                : {},
              {
                z: f.n(t.isHKUSMarket && !t.jumpFromAiPlugin ? "hk" : ""),
                A: f.n(t.isLite ? "lite" : "pro"),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-20d2b4a3"],
]);
wx.createComponent(S);
