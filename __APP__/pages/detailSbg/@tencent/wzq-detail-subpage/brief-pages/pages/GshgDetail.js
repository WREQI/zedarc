var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (t, e, n) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e, i) {
    return new Promise(function (n, a) {
      var r = function (t) {
          try {
            s(i.next(t));
          } catch (t) {
            a(t);
          }
        },
        o = function (t) {
          try {
            s(i.throw(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(r, o);
        };
      s((i = i.apply(t, e)).next());
    });
  },
  c = require("../../../../../../common/vendor.js"),
  h = require("../api/index.js"),
  d = require("../../../stock-hq-data/index.js"),
  v = {
    data: function () {
      return {
        touchPosition: { x: 0, y: 0 },
        tooltipTimer: null,
        isTouching: !1,
        showTooltips: !1,
        startTouch: !1,
      };
    },
    watch: {
      tipsData: function (t, e) {
        t && e && t.title !== e.title && this.shakeit();
      },
    },
    methods: {
      shakeit: function () {
        var t = this;
        this.shakeTimeOut ||
          c.StockBridge.ENV !== c.EnvTypeEnum.MP ||
          (this.shakeTimeOut = setTimeout(function () {
            c.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 100));
      },
      hideTooltip: function () {
        var t;
        (this.showTooltips = !1),
          (this.tipsData = null),
          null == (t = this.chartObj) || t.hideTooltip();
      },
      chartTouchStop: function () {
        var t,
          e = this;
        this.isTouching &&
          ((this.isTouching = !1),
          clearTimeout(this.tooltipTimer),
          (this.tooltipTimer = setTimeout(function () {
            e.isTouching || e.hideTooltip();
          }, 4e3)),
          null == (t = this.hqBridge) || t.busEmit("lockSwiper", !1));
      },
      chartTouchStart: function (t) {
        var e = this;
        (this.isTouching = !0), (this.startTouch = !0);
        var i = null == t ? void 0 : t.touches[0];
        (null == t ? void 0 : t.points) &&
          ((i.x = t.points[0].x),
          (i.y = t.points[0].y),
          (this.touchPosition = i)),
          setTimeout(function () {
            (null == t ? void 0 : t.points) &&
              e.isTouching &&
              t &&
              e.startTouch &&
              (e.shakeit(),
              e.chartObj.showTooltip(t.points[0]),
              (e.startTouch = !1));
          }, 500),
          setTimeout(function () {
            e.showTooltips &&
              !e.isTouching &&
              ((e.startTouch = !1), e.hideTooltip());
          }, 150);
      },
      chartTouchMove: function (t) {
        if (null == t ? void 0 : t.touches) {
          var e = t.touches[0],
            i = e.x,
            n = e.y,
            a = {
              x: Math.abs(i - this.touchPosition.x),
              y: Math.abs(n - this.touchPosition.y),
            };
          (a.x > 10 || a.y > 10) && (this.startTouch = !1);
        }
        if (
          c.StockBridge.ENV === c.EnvTypeEnum.MP &&
          (null == t ? void 0 : t.touches)
        ) {
          var r = t.touches[0],
            o = r.x,
            s = r.y;
          return (
            (this.touchPosition = { x: o, y: s }),
            void (
              this.showTooltips &&
              t &&
              this.chartObj.showTooltip({ x: o, y: s })
            )
          );
        }
        if (
          c.StockBridge.ENV !== c.EnvTypeEnum.MP &&
          (null == t ? void 0 : t.touches)
        ) {
          var u = t.touches[0],
            l = t.target.getBoundingClientRect(),
            h = u.clientX - l.left,
            d = u.clientY - l.top;
          (this.touchPosition = { x: h, y: d }),
            this.showTooltips && t && this.chartObj.showTooltip({ x: h, y: d });
        }
      },
    },
  },
  p = function (t, e, i, n, a) {
    var r = !1;
    return (
      (t = parseFloat(t || 0)) < 0 && ((r = !0), (t = -t)),
      (e = parseInt(e || 1, 10)),
      (i = parseInt(i || 0, 10)),
      (a = a || ""),
      (t =
        t < 1e4 * e
          ? t.toFixed(i)
          : t >= 1e4 * e && t < 1e8
          ? "".concat((t / 1e4).toFixed(n), "万")
          : "".concat((t / 1e8).toFixed(n), "亿")),
      r && (t = "-".concat(t)),
      t + a
    );
  },
  g = c.defineComponent({
    components: {
      RangeSlider: function () {
        return "../../../stock-markets-base/components/RangeSlider.js";
      },
      GshgChart: function () {
        return "../components/GshgChart.js";
      },
      gshgList: function () {
        return "../components/gshgList/mp.js";
      },
    },
    mixins: [v],
    inject: ["hqBridge"],
    props: { symbol: { type: String, default: "" } },
    setup: function (i) {
      var v = this,
        g = c.getCurrentInstance().proxy;
      c.StockBridge.setTitle("公司回购");
      var f = c.ref(""),
        b = c.ref(2),
        m = c.reactive({ avg: "", price: "" }),
        y = c.ref([]),
        T = c.ref(null),
        k = function () {
          return l(
            v,
            null,
            t().mark(function l() {
              var c, d, v, g, k, _, x;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (i.symbol) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (t.next = 4),
                        h.getBuyBack({ symbol: i.symbol, detail: !0 })
                      );
                    case 4:
                      (_ = t.sent),
                        (x = null == _ ? void 0 : _.data),
                        (T.value = x),
                        (m.avg = "".concat(
                          p(
                            null ==
                              (c = null == x ? void 0 : x.buyback_statistics)
                              ? void 0
                              : c.current_year_avg_price,
                            1,
                            b.value,
                            b.value
                          ),
                          "元"
                        )),
                        (m.price = p(
                          null ==
                            (d = null == x ? void 0 : x.buyback_statistics)
                            ? void 0
                            : d.current_year_fund_sum,
                          1,
                          2,
                          2
                        )),
                        parseFloat(
                          null ==
                            (v = null == x ? void 0 : x.buyback_statistics)
                            ? void 0
                            : v.current_year_fund_sum
                        ) < 1e4 &&
                          ((m.price = parseFloat(
                            null ==
                              (g = null == x ? void 0 : x.buyback_statistics)
                              ? void 0
                              : g.current_year_fund_sum
                          ).toFixed(0)),
                          (m.price += f.value)),
                        0 ===
                          parseFloat(
                            null ==
                              (k = null == x ? void 0 : x.buyback_statistics)
                              ? void 0
                              : k.current_year_avg_price
                          ) && (m.avg = "--"),
                        (y.value =
                          null == x
                            ? void 0
                            : x.buyback_items.toReversed().map(function (t) {
                                return (
                                  (i = (function (t, i) {
                                    for (var n in i || (i = {}))
                                      o.call(i, n) && u(t, n, i[n]);
                                    if (r) {
                                      var a,
                                        l = e(r(i));
                                      try {
                                        for (l.s(); !(a = l.n()).done; ) {
                                          n = a.value;
                                          s.call(i, n) && u(t, n, i[n]);
                                        }
                                      } catch (t) {
                                        l.e(t);
                                      } finally {
                                        l.f();
                                      }
                                    }
                                    return t;
                                  })({}, t)),
                                  (l = {
                                    showFund:
                                      t.fund > 1e4
                                        ? p(t.fund, 1, 2, 2)
                                        : t.fund.toFixed(0),
                                    showAmount:
                                      t.amount > 1e4
                                        ? p(t.amount, 1, 2, 2)
                                        : t.amount.toFixed(0),
                                    showAvg: p(
                                      t.avg_price,
                                      1,
                                      b.value,
                                      b.value
                                    ),
                                  }),
                                  n(i, a(l))
                                );
                                var i, l;
                              }));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, l);
            })
          );
        },
        _ = c.ref(""),
        x = c.ref(!0),
        w = c.ref([]),
        S = c.ref([]),
        O = function () {
          var t, e;
          w.value = [];
          var i = E(
              null ==
                (e = null == (t = T.value) ? void 0 : t.buyback_statistics)
                ? void 0
                : e.buyback_items
            ),
            n = i.length;
          return i.map(function (t, e) {
            return (
              n < 7
                ? w.value.push(t.date)
                : (0 !== e && e !== n - 1 && e % Math.round(n / 4) != 0) ||
                  w.value.push(t.date),
              {
                time: t.date,
                buyAvg: t.avg_price,
                buyFund: t.fund,
                showValue: p(t.fund, 1, 2, 2),
              }
            );
          });
        },
        j = [],
        D = c.ref(null),
        M = c.ref(null),
        E = function (t) {
          if (Array.isArray(t) && M.value) {
            var e = M.value,
              i = e.start,
              n = e.end;
            t = t.filter(function (e, a) {
              return (
                a >= Math.floor(t.length * i) && a < Math.ceil(t.length * n)
              );
            });
          }
          return t;
        },
        P = c.ref(null),
        F = c.ref(!1),
        R = c.ref(0),
        B = c.ref(""),
        C = function () {
          return l(
            v,
            null,
            t().mark(function e() {
              var n, a, r, o, s, u;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r = d.utils.splitSymbol(i.symbol)),
                        (o = r.market),
                        d.utils.isHSMarket(o)
                          ? (f.value = "元")
                          : d.utils.isHKMarket(o)
                          ? ((f.value = "港元"),
                            (b.value = 3),
                            (B.value = "（港币）"))
                          : d.utils.isUSMarket(o) &&
                            ((f.value = "美元"), (B.value = "（美元）")),
                        (t.t0 = q.value),
                        !t.t0)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (t.next = 6), k();
                    case 6:
                      (s =
                        null ==
                        (a =
                          null == (n = T.value) ? void 0 : n.buyback_statistics)
                          ? void 0
                          : a.buyback_items),
                        (u = {
                          start:
                            (null == s ? void 0 : s.length) <= 5
                              ? 0
                              : 1 - 5 / (null == s ? void 0 : s.length),
                          end: 1,
                        }).start > 0.97 && (u.start = 0.97),
                        (M.value = u),
                        (S.value = O()),
                        c.StockBridge.ENV === c.EnvTypeEnum.MP
                          ? c.wx$1
                              .createIntersectionObserver(g)
                              .relativeToViewport()
                              .observe("#hg-overview", function (t) {
                                0 === t.intersectionRatio
                                  ? (F.value = !0)
                                  : (F.value = !1);
                              })
                          : new IntersectionObserver(function (t) {
                              var e = t[0].intersectionRatio;
                              F.value = 0 === e;
                            }).observe(document.querySelector("#hg-overview"));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        q = c.computed(function () {
          var t = d.utils.splitSymbol(i.symbol).market;
          return d.utils.isUSMarket(t);
        });
      return (
        c.watch(
          function () {
            return i.symbol;
          },
          function (t) {
            t && C();
          }
        ),
        c.onMounted(function () {
          return l(
            v,
            null,
            t().mark(function e() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      C();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        }),
        {
          board: m,
          rangeChange: function (t) {
            var e;
            if (
              !M.value ||
              M.value.start !== t.start ||
              M.value.end !== t.end
            ) {
              (M.value = t),
                (x.value = !1),
                null == (e = g.$refs.chart) || e.toolTipHide();
              var i = O();
              i.length !== j.length &&
                ((S.value = i),
                (_.value = String(Math.random())),
                c.StockBridge.report(
                  "hq.stock_detail.depth_hg_detail_range_click"
                ));
            }
          },
          list: y,
          chartConfig: { animate: !1, padding: [0, 0, 0, 0] },
          gshgHash: _,
          tipsData: P,
          gshgData: T,
          dateList: w,
          rangeSlider: D,
          unit: f,
          handlePageScroll: function (t) {
            var e = t.scrollTop;
            e > 0 && (R.value = e);
          },
          listTouchEnd: function () {
            R.value &&
              c.StockBridge.report("hq.stock_detail.depth_hg_detail_scroll");
          },
          rangeSliderInit: function () {
            var t;
            null == (t = g.$refs.rangeSlider) || t.setDefaultRange(M.value);
          },
          isTabFix: F,
          subTitle: B,
          dataFixed: b,
          dataRange: M,
          chartData: S,
          updateRenderData: function (t) {
            j = t;
          },
          isUS: q,
          isMP: c.StockBridge.ENV === c.EnvTypeEnum.MP,
        }
      );
    },
  });
Array ||
  (
    c.resolveComponent("gshg-chart") +
    c.resolveComponent("RangeSlider") +
    c.resolveComponent("gshgList")
  )();
var f = c._export_sfc(g, [
  [
    "render",
    function (t, e, i, n, a, r) {
      return c.e(
        { a: t.isUS },
        t.isUS
          ? c.e(
              {
                b: c.t(t.subTitle),
                c: c.t(t.board.avg),
                d: c.t(t.board.price),
                e:
                  t.gshgData &&
                  t.gshgData.buyback_statistics.buyback_items &&
                  t.gshgData.buyback_statistics.buyback_items.length > 0,
              },
              t.gshgData &&
                t.gshgData.buyback_statistics.buyback_items &&
                t.gshgData.buyback_statistics.buyback_items.length > 0
                ? c.e(
                    { f: t.gshgData },
                    t.gshgData
                      ? {
                          g: c.sr("chart", "9eefc257-0"),
                          h: c.o(t.updateRenderData, 519),
                          i: c.p({
                            data: t.chartData,
                            gshgData: t.gshgData,
                            dataFixed: t.dataFixed,
                            dataRange: t.dataRange,
                            gshgHash: t.gshgHash,
                          }),
                        }
                      : {},
                    { j: t.dateList.length },
                    t.dateList.length
                      ? {
                          k: c.f(t.dateList, function (t, e, i) {
                            return { a: c.t(t), b: t };
                          }),
                        }
                      : {},
                    {
                      l: c.sr("rangeSlider", "9eefc257-1"),
                      m: c.o(t.rangeChange, 520),
                      n: c.o(t.rangeSliderInit, 521),
                    }
                  )
                : {}
            )
          : {},
        { o: t.isUS },
        t.isUS
          ? {
              p: c.t(t.isUS ? "季度报告期" : "日期"),
              q: c.t(t.unit),
              r: c.t(t.unit),
              s: c.n(t.isTabFix ? "title-area-fix" : ""),
            }
          : {},
        { t: t.isUS },
        t.isUS
          ? {
              v: c.f(t.list, function (t, e, i) {
                return {
                  a: c.t(t.date),
                  b: c.t(t.showFund),
                  c: c.t(t.showAvg),
                  d: c.t(t.showAmount),
                  e: t.date,
                };
              }),
              w: c.o(function () {
                return t.listTouchEnd && t.listTouchEnd.apply(t, arguments);
              }, 522),
            }
          : c.e(
              { x: t.symbol },
              t.symbol ? { y: c.p({ symbol: t.symbol }) } : {}
            )
      );
    },
  ],
  ["__scopeId", "data-v-9eefc257"],
]);
wx.createComponent(f);
var b = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.ChartMixin = v),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtc3VicGFnZS9icmllZi1wYWdlcy9wYWdlcy9Hc2hnRGV0YWlsLnZ1ZQ =
    b),
  (exports.formatNumber = p);
