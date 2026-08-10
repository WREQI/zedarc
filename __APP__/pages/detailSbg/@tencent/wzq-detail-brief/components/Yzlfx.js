var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  l = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  f = function (t, e) {
    for (var a in e || (e = {})) o.call(e, a) && c(t, a, e[a]);
    if (n) {
      var l,
        r = i(n(e));
      try {
        for (r.s(); !(l = r.n()).done; ) {
          a = l.value;
          s.call(e, a) && c(t, a, e[a]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  h = function (t, e) {
    return l(t, r(e));
  },
  u = require("../../../../../common/vendor.js"),
  d = require("../api/index.js"),
  x = require("../BriefETF.js"),
  y = {
    inject: ["hqBridge"],
    props: {
      symbol: { type: String, required: !0 },
      etfName: { type: String, default: "" },
      isSpecialPlatform: { type: Boolean, default: !1 },
      skin: { type: String, default: "" },
      themeColor: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    components: {
      f2: function () {
        return "./f2-fit/f2.js";
      },
      SelectPlate: function () {
        return "../../wzq-detail-finance/components/SelectPlate.js";
      },
    },
    data: function () {
      return {
        curYzlfxTabName: "近1年",
        curYzlfxTabIndex: 5,
        yzlfxTabList: [
          { id: 1, type: "lastYear", name: "今年以来" },
          { id: 2, type: "oneMonth", name: "近1月" },
          { id: 3, type: "threeMonth", name: "近3月" },
          { id: 4, type: "halfYear", name: "近6月" },
          { id: 5, type: "oneYear", name: "近1年" },
          { id: 6, type: "all", name: "近3年" },
        ],
        yzlfxHash: "",
        yzlfxData: [],
        chartDescYzlfx: "",
        yzlfxDateList: [],
        yzlfxTipsData: null,
        isShowYzlfxBlock: !1,
        isYzlfxLoading: !1,
        yzlfxPercentile30: null,
        yzlfxPercentile70: null,
        aiInterpretationText: "",
        showTabPlate: !1,
      };
    },
    computed: {
      hasYzlfxPercentile: function () {
        return (
          Number.isFinite(this.yzlfxPercentile30) &&
          Number.isFinite(this.yzlfxPercentile70)
        );
      },
      isMini: function () {
        return u.StockBridge.ENV === u.EnvTypeEnum.MP;
      },
    },
    watch: {
      symbol: {
        immediate: !0,
        handler: function () {
          this.loadYzlfxData();
        },
      },
    },
    methods: {
      formatPercentValue: function (t) {
        return Number.isFinite(t) ? "".concat(t.toFixed(2), "%") : "--";
      },
      showYzlfxPlate: function (t) {
        var e,
          i,
          a,
          l,
          r = this;
        if (this.isMini)
          return (
            (this.showTabPlate = !0),
            void this.$nextTick(function () {
              r.$refs.selectPlate && r.$refs.selectPlate.onPopupMore();
            })
          );
        this.$emit("open-select", {
          tabList: this.yzlfxTabList,
          curTabIndex: this.curYzlfxTabIndex,
          targetRef: "yzlfxSelectbtn",
          location:
            (null ==
            (i =
              null == (e = null == t ? void 0 : t.currentTarget)
                ? void 0
                : e.getBoundingClientRect)
              ? void 0
              : i.call(e)) ||
            (null ==
            (l =
              null == (a = null == t ? void 0 : t.target)
                ? void 0
                : a.getBoundingClientRect)
              ? void 0
              : l.call(a)),
        });
      },
      changeTab: function (t) {
        this.showTabPlate = !1;
        var e = this.yzlfxTabList.find(function (e) {
          return e.id === t;
        });
        e &&
          this.curYzlfxTabIndex !== e.id &&
          ((this.curYzlfxTabIndex = e.id),
          (this.curYzlfxTabName = e.name),
          this.loadYzlfxData(),
          u.StockBridge.report(
            "hq.stock_detail.etf.deepth_tab_yzlfx.changeDate"
          ));
      },
      loadYzlfxData: function () {
        return (
          (t = this),
          null,
          (i = e().mark(function t() {
            var i,
              a,
              l,
              r,
              n,
              o,
              s,
              c,
              u,
              x = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.symbol && !this.isYzlfxLoading) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (this.isYzlfxLoading = !0),
                        (i = {
                          symbol: this.symbol,
                          fixedType: this.curYzlfxTabIndex,
                        }),
                        (t.next = 6),
                        d
                          .getDiscountRatio(this.hqBridge, i)
                          .catch(function (t) {
                            (x.isYzlfxLoading = !1),
                              (x.yzlfxPercentile30 = null),
                              (x.yzlfxPercentile70 = null),
                              (x.aiInterpretationText = ""),
                              (x.isShowYzlfxBlock = !1),
                              x.$emit("visible-change", x.isShowYzlfxBlock);
                          })
                      );
                    case 6:
                      (a = t.sent),
                        (this.isYzlfxLoading = !1),
                        0 == +(null == a ? void 0 : a.code)
                          ? ((l = a.etf_discount_ratio_data),
                            (n = (r = void 0 === l ? {} : l).quantile),
                            (o = void 0 === n ? {} : n),
                            (s = (r.etf_discount_ratio_items || []).map(
                              function (t) {
                                return (
                                  (t.ratio = t.discount_ratio),
                                  (t.avg_ratio = t.avg_discount_ratio),
                                  t
                                );
                              }
                            )),
                            (this.isShowYzlfxBlock = s.length > 0),
                            this.$emit("visible-change", this.isShowYzlfxBlock),
                            s.length
                              ? ((this.yzlfxData = s),
                                (this.chartDescYzlfx = h(
                                  f({}, s[s.length - 1]),
                                  {
                                    maxRatio: +(
                                      r.cur_line_spec_max_discount_ratio || 0
                                    ),
                                  }
                                )),
                                (c = Number(o.pct30)),
                                (u = Number(o.pct70)),
                                (this.yzlfxPercentile30 = Number.isFinite(c)
                                  ? c
                                  : null),
                                (this.yzlfxPercentile70 = Number.isFinite(u)
                                  ? u
                                  : null),
                                (this.yzlfxHash = Math.random()),
                                (this.aiInterpretationText =
                                  o.interpretation || ""))
                              : ((this.yzlfxPercentile30 = null),
                                (this.yzlfxPercentile70 = null),
                                (this.aiInterpretationText = "")))
                          : ((this.isShowYzlfxBlock = !1),
                            (this.yzlfxPercentile30 = null),
                            (this.yzlfxPercentile70 = null),
                            (this.aiInterpretationText = ""),
                            this.$emit(
                              "visible-change",
                              this.isShowYzlfxBlock
                            ));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, a) {
            var l = function (t) {
                try {
                  n(i.next(t));
                } catch (t) {
                  a(t);
                }
              },
              r = function (t) {
                try {
                  n(i.throw(t));
                } catch (t) {
                  a(t);
                }
              },
              n = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(l, r);
              };
            n((i = i.apply(t, null)).next());
          })
        );
        var t, i;
      },
      drawYzlfxChart: function (e, i) {
        var a = this,
          l = this.yzlfxData;
        if (l && l.length) {
          var r = this;
          this.yzlfxDateList = [l[0].trade_day, l[l.length - 1].trade_day];
          var n = [];
          l.map(function (t) {
            n.push({ trade_day: t.trade_day, type: "ratio", value: t.ratio });
          });
          var o = l
              .map(function (t) {
                return Number(t.ratio);
              })
              .filter(function (t) {
                return Number.isFinite(t);
              }),
            s = Math.max.apply(Math, t(o)),
            c = Math.min.apply(Math, t(o)),
            d = s - c,
            y = d > 0 ? 0.12 * d : Math.max(0.12 * Math.abs(s), 0.2),
            p = c - y,
            m = s + y,
            g = l.find(function (t) {
              return Number(t.ratio) === s;
            }),
            z = l.find(function (t) {
              return Number(t.ratio) === c;
            }),
            b = this.yzlfxPercentile30,
            v = this.yzlfxPercentile70,
            Y = new e.Chart(
              h(f({}, i), { animate: !1, padding: [0, 0, 0, 0] })
            );
          if (
            (Y.source(n, {
              trade_day: { tickCount: 3 },
              value: { tickCount: 5, type: "linear", min: p, max: m, nice: !1 },
            }),
            Y.legend(!1),
            Y.axis("trade_day", !1),
            Y.axis("value", {
              position: "left",
              line: null,
              grid: null,
              labelOffset: -4,
              label: null,
            }),
            Number.isFinite(b) && Number.isFinite(v))
          ) {
            var P = Math.max.apply(Math, t(o)),
              S = [0, 1.5, 0.6],
              T = {
                textBaseline: "middle",
                textAlign: "center",
                fontSize: 10,
                fontFamily: "stockFont",
              };
            Y.guide().line({
              start: ["min", b],
              end: ["max", b],
              top: !1,
              style: {
                lineDash: S,
                stroke: x.getCSSVariable("--color-green"),
                lineWidth: 0.6,
              },
            }),
              Y.guide().line({
                start: ["min", v],
                end: ["max", v],
                top: !1,
                style: {
                  lineDash: S,
                  stroke: x.getCSSVariable("--color-red"),
                  lineWidth: 0.6,
                },
              }),
              Y.guide().text({
                position: ["min", b],
                content: "30分位",
                offsetY: 7,
                offsetX: 16,
                style: h(f({}, T), {
                  fill: x.getCSSVariable("--color-lightgray"),
                }),
              }),
              Y.guide().text({
                position: ["min", v],
                content: "70分位",
                offsetY: v > P ? 7 : -7,
                offsetX: 16,
                style: h(f({}, T), {
                  fill: x.getCSSVariable("--color-lightgray"),
                }),
              }),
              Y.guide().rect({
                top: !1,
                start: ["min", b],
                end: ["max", "min"],
                style: { fill: "rgba(28, 170, 60, .12)" },
              }),
              Y.guide().rect({
                top: !1,
                start: ["min", "max"],
                end: ["max", v],
                style: { fill: "rgba(230, 53, 53, .12)" },
              });
          }
          Y.tooltip({
            custom: !0,
            crosshairsType: "y",
            showCrosshairs: !0,
            showTooltipMarker: !1,
            crosshairsStyle: {
              stroke: x.getCSSVariable("--color-heavygray"),
              lineWidth: 0.5,
            },
            onChange: function (t) {
              u.StockBridge.report(
                "hq.stock_detail.etf.deepth_tab_yzlfx.touchchart"
              ),
                r.hqBridge.busEmit("lockSwiper", !0),
                (r.yzlfxTipsData = {
                  layout: t.x < i.width / 2 ? "right" : "left",
                  title: t.items[0].title,
                  items: [{ name: r.etfName || "", value: +t.items[0].value }],
                });
            },
            onHide: function () {
              (a.yzlfxTipsData = null), a.hqBridge.busEmit("lockSwiper", !1);
            },
          }),
            this.isSpecialPlatform && this.addLatestValueTag(Y, l),
            Y.line()
              .position("trade_day*value")
              .color(this.themeColor.orange)
              .size(1);
          var D = g ? l.indexOf(g) : -1,
            w = z ? l.indexOf(z) : -1,
            _ = l.length / 2;
          if ((Y.render(), g)) {
            var k = D < _,
              C = Y.getPosition({
                trade_day: g.trade_day,
                value: g.ratio,
                type: "ratio",
              });
            if (C) {
              var F = (C.x / i.width) * 100 + "%",
                B = ((C.x + (k ? 24 : -24)) / i.width) * 100 + "%",
                M = (C.y / i.height) * 100 + "%";
              Y.guide().line({
                top: !0,
                start: [F, M],
                end: [B, M],
                style: {
                  lineWidth: 0.5,
                  lineDash: null,
                  stroke: x.getCSSVariable("--border-heavy-divider2"),
                },
              }),
                Y.guide().text({
                  top: !0,
                  position: [B, M],
                  content: ""
                    .concat(s > 0 ? "+" : "")
                    .concat(s.toFixed(2), "%"),
                  limitInPlot: !0,
                  offsetX: k ? 2 : -2,
                  style: {
                    fontSize: 10,
                    fontFamily: "stockFont",
                    textAlign: k ? "left" : "right",
                    textBaseline: "middle",
                    fill: x.getCSSVariable("--color-lightgray-2"),
                  },
                });
            }
          }
          if (z && c !== s) {
            var I = w < _,
              N = Y.getPosition({
                trade_day: z.trade_day,
                value: z.ratio,
                type: "ratio",
              });
            if (N) {
              var L = (N.x / i.width) * 100 + "%",
                q = ((N.x + (I ? 24 : -24)) / i.width) * 100 + "%",
                V = (N.y / i.height) * 100 + "%";
              Y.guide().line({
                top: !0,
                start: [L, V],
                end: [q, V],
                style: {
                  lineWidth: 0.5,
                  lineDash: null,
                  stroke: x.getCSSVariable("--border-heavy-divider2"),
                },
              }),
                Y.guide().text({
                  top: !0,
                  position: [q, V],
                  content: ""
                    .concat(c > 0 ? "+" : "")
                    .concat(c.toFixed(2), "%"),
                  limitInPlot: !0,
                  offsetX: I ? 2 : -2,
                  style: {
                    fontSize: 10,
                    fontFamily: "stockFont",
                    textAlign: I ? "left" : "right",
                    textBaseline: "middle",
                    fill: x.getCSSVariable("--color-lightgray-2"),
                  },
                });
            }
          }
          return Y.repaint(), Y;
        }
      },
      addLatestValueTag: function (e, i) {
        var a = i[i.length - 1],
          l = i
            .map(function (t) {
              return Number(t.ratio);
            })
            .filter(function (t) {
              return Number.isFinite(t);
            }),
          r = Math.max.apply(Math, t(l)),
          n = Math.min.apply(Math, t(l)),
          o = i.length - 1,
          s = i.length / 2,
          c = Number(null == a ? void 0 : a.ratio),
          f = o < s,
          h = Math.abs(r - c) < Math.abs(c - n),
          u = h ? (f ? "bl" : "br") : f ? "tl" : "tr",
          d = h ? 4 : -4;
        e.guide().tag({
          top: !0,
          position: [a.trade_day, a.ratio],
          content: "".concat(a.ratio, "%"),
          limitInPlot: !0,
          direct: u,
          side: 0,
          offsetY: d,
          background: {
            padding: [2, 3],
            radius: 2,
            fill: x.getCSSVariable("--fill-content-layer"),
            lineWidth: 1,
            stroke: this.themeColor.orange,
            strokeOpacity: 0.6,
          },
          textStyle: { fontSize: 10, fill: this.themeColor.orange },
          withPoint: !0,
          pointStyle: {
            fill: this.themeColor.orange,
            r: 2.5,
            lineWidth: 1,
            stroke: this.themeColor.orange,
          },
        });
      },
    },
  };
Array || (u.resolveComponent("f2") + u.resolveComponent("SelectPlate"))();
var p = u._export_sfc(y, [
  [
    "render",
    function (t, e, i, a, l, r) {
      return u.e(
        { a: l.isShowYzlfxBlock },
        l.isShowYzlfxBlock
          ? u.e(
              {
                b: u.t(l.chartDescYzlfx.ratio > 0 ? "+" : ""),
                c: u.t((+l.chartDescYzlfx.ratio).toFixed(2)),
                d: l.chartDescYzlfx.ratio > 0 ? 1 : "",
                e: l.chartDescYzlfx.ratio < 0 ? 1 : "",
                f: 0 == l.chartDescYzlfx.ratio ? 1 : "",
                g: l.chartDescYzlfx.maxRatio,
              },
              l.chartDescYzlfx.maxRatio
                ? {
                    h: u.t(
                      "最大溢折率"
                        .concat(l.chartDescYzlfx.maxRatio > 0 ? "+" : "")
                        .concat(l.chartDescYzlfx.maxRatio.toFixed(2), "%")
                    ),
                  }
                : {},
              {
                i: u.t(l.curYzlfxTabName),
                j: u.o(function () {
                  return (
                    r.showYzlfxPlate && r.showYzlfxPlate.apply(r, arguments)
                  );
                }, 4086),
                k: l.chartDescYzlfx,
              },
              l.chartDescYzlfx
                ? {
                    l: u.t(l.chartDescYzlfx.avg_ratio > 0 ? "+" : ""),
                    m: u.t((+l.chartDescYzlfx.avg_ratio).toFixed(2)),
                    n: l.chartDescYzlfx.avg_ratio > 0 ? 1 : "",
                    o: 0 == l.chartDescYzlfx.avg_ratio ? 1 : "",
                    p: l.chartDescYzlfx.avg_ratio < 0 ? 1 : "",
                  }
                : {},
              { q: l.yzlfxTipsData },
              l.yzlfxTipsData
                ? {
                    r: u.t(l.yzlfxTipsData.title),
                    s: u.f(l.yzlfxTipsData.items, function (t, e, i) {
                      return {
                        a: u.t(t.name),
                        b: u.t(t.value > 0 ? "+" : ""),
                        c: u.t(t.value.toFixed(2)),
                        d: t.value > 0 ? 1 : "",
                        e: t.value < 0 ? 1 : "",
                        f: 0 == t.value ? 1 : "",
                        g: e,
                      };
                    }),
                    t: u.n(l.yzlfxTipsData.layout),
                  }
                : {},
              {
                v: u.sr("yzlfxChart", "03ab689c-0"),
                w: u.p({
                  "chart-id": "yzlfxChart",
                  "c-class": "yzlfxChartClass",
                  "c-style": "width: 100%; height: 256rpx",
                  "on-init": r.drawYzlfxChart,
                  "refresh-hash": l.yzlfxHash,
                }),
                x: l.yzlfxDateList.length,
              },
              l.yzlfxDateList.length
                ? {
                    y: u.f(l.yzlfxDateList, function (t, e, i) {
                      return { a: u.t(t), b: t };
                    }),
                  }
                : {},
              { z: l.yzlfxPercentile70 },
              l.yzlfxPercentile70
                ? { A: u.t(r.formatPercentValue(l.yzlfxPercentile70)) }
                : {},
              { B: l.yzlfxPercentile30 },
              l.yzlfxPercentile30
                ? { C: u.t(r.formatPercentValue(l.yzlfxPercentile30)) }
                : {}
            )
          : {},
        { D: l.aiInterpretationText },
        l.aiInterpretationText ? { E: u.t(l.aiInterpretationText) } : {},
        { F: r.isMini },
        r.isMini
          ? u.e(
              { G: l.showTabPlate },
              l.showTabPlate
                ? {
                    H: u.sr("selectPlate", "03ab689c-1"),
                    I: u.o(r.changeTab, 4087),
                    J: u.p({
                      data: l.yzlfxTabList,
                      "cur-tab-index": l.curYzlfxTabIndex,
                      "tab-type": "yzlfx",
                      skin: i.skin,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-03ab689c"],
]);
wx.createComponent(p);
