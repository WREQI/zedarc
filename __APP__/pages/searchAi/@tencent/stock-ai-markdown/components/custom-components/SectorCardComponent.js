var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = Object.defineProperty,
  o = function (e, t, n) {
    return (function (e, t, n) {
      return t in e
        ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, "symbol" != a(t) ? t + "" : t, n);
  },
  c = function (e, t, n) {
    return new Promise(function (a, r) {
      var o = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(o, c);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  i = require("../../../../../../common/vendor.js"),
  u = require("../../../stock-hq-data/index.js"),
  s = (function () {
    function a() {
      var n = this;
      t(this, a),
        o(this, "getMiniMinsData", function (e) {
          return n.cacheMinsData[e];
        }),
        o(this, "fetchMiniminsData", function (t) {
          return c(
            n,
            null,
            e().mark(function n() {
              var a,
                r,
                o,
                c,
                u,
                s = this;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = (null == t ? void 0 : t.slice(0, 50)) || []),
                          (e.prev = 1),
                          (c = r.map(function (e) {
                            return {
                              stockCode: e.symbol,
                              needWidth: 40,
                              stockType: e.stockType,
                              app: "wzq_h5",
                            };
                          })),
                          (u = { "Content-Type": "application/json" }),
                          (e.next = 5),
                          i.StockBridge.request(
                            "https://proxy.finance.qq.com/cgi/cgi-bin/generalminute/mini/bath?app=mini_h5",
                            i.RequestTypeEnum.POST,
                            { bathReq: c },
                            { header: u, headers: u }
                          )
                        );
                      case 5:
                        (o = e.sent), (e.next = 10);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1));
                      case 10:
                        (null == (a = null == o ? void 0 : o.data)
                          ? void 0
                          : a.miniList) &&
                          o.data.miniList.length &&
                          o.data.miniList.forEach(function (e) {
                            e &&
                              0 === e.code &&
                              e.data &&
                              (s.cacheMinsData[e.data.stockCode] ||
                                (s.cacheMinsData[e.data.stockCode] = {}),
                              (s.cacheMinsData[e.data.stockCode].data = e.data),
                              (s.cacheMinsData[e.data.stockCode].ts =
                                new Date().getTime()));
                          }),
                          r.forEach(function (e) {
                            var t = e.symbol || "",
                              n = s.cacheMinsData[t];
                            n &&
                              i.StockBridge.busEmit(
                                "morning_brief_stock_chart_render_".concat(
                                  t.replace(".", "_")
                                ),
                                n
                              );
                          });
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[1, 8]]
              );
            })
          );
        }),
        (this.name = "MiniMinsDataUtils"),
        (this.cacheMinsData = {});
    }
    return (
      n(a, null, [
        {
          key: "getInstance",
          value: function () {
            return a._instance || (a._instance = new a()), a._instance;
          },
        },
      ]),
      a
    );
  })(),
  l = {
    name: "SectorCardComponent",
    components: {
      StockItemChart: function () {
        return "./StockItemChart.js";
      },
    },
    props: {
      symbol: { type: String, default: "" },
      propsObj: {
        type: Object,
        required: !1,
        default: function () {
          return {};
        },
      },
    },
    emits: ["click", "component-event"],
    setup: function (t) {
      var n = this,
        a = i.ref(""),
        r = i.ref(0),
        o = i.ref(0),
        l = i.ref(null),
        p = (t.propsObj.plate_info || {}).plate_code,
        d = i.ref(p),
        m = function (e) {
          return "number" != typeof e
            ? "0.00%"
            : "".concat(e >= 0 ? "+" : "").concat(e.toFixed(2), "%");
        },
        h = i.computed(function () {
          return l.value
            ? [{ symbol: l.value.chooseSymbol, stockType: l.value.stock_type }]
            : [];
        });
      return (
        i.watch(
          function () {
            return h.value;
          },
          function () {
            h.value &&
              h.value.length &&
              s.getInstance().fetchMiniminsData(h.value);
          },
          { immediate: !0 }
        ),
        i.watch(
          function () {
            return l.value;
          },
          function (t) {
            return c(
              n,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = t), !e.t0)) {
                          e.next = 4;
                          break;
                        }
                        return (e.next = 4), i.nextTick$1();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          }
        ),
        i.onMounted(function () {
          c(
            n,
            null,
            e().mark(function t() {
              var n, c, u;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = "https://sqt.gtimg.cn/utf8?q=".concat(
                            d.value,
                            "&fmt=json"
                          )),
                          (e.next = 4),
                          i.StockBridge.request(n, i.RequestTypeEnum.GET)
                        );
                      case 4:
                        (e.t0 = d.value),
                          (c = e.sent[e.t0]) &&
                            c.length &&
                            ((a.value = null == c ? void 0 : c[1]),
                            (r.value = Number(null == c ? void 0 : c[32]) || 0),
                            (o.value = Number(null == c ? void 0 : c[50]) || 0),
                            (l.value = {
                              chooseSymbol: d.value,
                              stock_type: (null == c ? void 0 : c[0]) || "",
                              riseDropVal: m(r.value),
                              riseDropStyle:
                                ((u = r.value),
                                u > 0
                                  ? "bg-rise"
                                  : u < 0
                                  ? "bg-drop"
                                  : "bg-peace"),
                            })),
                          (e.next = 11);
                        break;
                      case 9:
                        (e.prev = 9), (e.t1 = e.catch(0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          );
        }),
        {
          title: a,
          todayChange: r,
          ytdChange: o,
          stockData: l,
          formatChange: m,
          getTodayChangeClass: function () {
            return r.value > 0
              ? "text-rise"
              : r.value < 0
              ? "text-drop"
              : "text-peace";
          },
          getYtdChangeClass: function () {
            return o.value > 0
              ? "text-rise"
              : o.value < 0
              ? "text-drop"
              : "text-peace";
          },
          jumpToQuoteDetail: function () {
            var e = u.utils.splitSymbol(d.value).scode,
              t = u.utils.splitSymbol(d.value).market;
            i.StockBridge.routeTo({
              url: "/pages/quote/quote?scode=".concat(e, "&market=").concat(t),
            });
          },
        }
      );
    },
  };
Array || i.resolveComponent("StockItemChart")();
var p = i._export_sfc(l, [
  [
    "render",
    function (e, t, n, a, r, o) {
      return i.e(
        {
          a: i.t(a.title),
          b: i.t(a.formatChange(a.todayChange)),
          c: i.n(a.getTodayChangeClass()),
          d: i.t(a.formatChange(a.ytdChange)),
          e: i.n(a.getYtdChangeClass()),
          f: a.stockData,
        },
        a.stockData
          ? {
              g: i.p({
                "choose-symbol": a.stockData.chooseSymbol,
                "cell-style": a.stockData.riseDropStyle,
                "tab-id": "sector_card",
              }),
            }
          : {},
        {
          h: i.o(function () {
            return (
              a.jumpToQuoteDetail && a.jumpToQuoteDetail.apply(a, arguments)
            );
          }, 5901),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2412d0ec"],
]);
wx.createComponent(p);
var d = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWFpLW1hcmtkb3duL2NvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMvU2VjdG9yQ2FyZENvbXBvbmVudC52dWU =
  d),
  (exports.MiniMinsDataUtils = s);
