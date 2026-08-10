var t = require("../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  o = function (t, e, i) {
    return new Promise(function (n, o) {
      var a = function (t) {
          try {
            r(i.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            r(i.throw(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, s);
        };
      r((i = i.apply(t, e)).next());
    });
  },
  a = require("../../../../../common/vendor.js"),
  s = require("../../stock-crypto-modules-config/dist/index.js"),
  r = require("../api/index.js"),
  h = require("../BriefETF.js"),
  c = (function () {
    function t(e) {
      i(this, t),
        (this.component = e),
        (this.internalTouchPosition = { x: 0, y: 0 }),
        (this.internalTooltipTimer = null),
        (this.internalIsTouching = !1),
        (this.internalShowTooltips = !1),
        (this.internalStartTouch = !1),
        (this.internalShakeTimeOut = null);
    }
    return (
      n(t, [
        {
          key: "touchPosition",
          get: function () {
            return this.internalTouchPosition;
          },
          set: function (t) {
            (this.internalTouchPosition = t),
              this.component && (this.component.touchPosition = t);
          },
        },
        {
          key: "tooltipTimer",
          get: function () {
            return this.internalTooltipTimer;
          },
          set: function (t) {
            this.internalTooltipTimer = t;
          },
        },
        {
          key: "isTouching",
          get: function () {
            return this.internalIsTouching;
          },
          set: function (t) {
            (this.internalIsTouching = t),
              this.component && (this.component.isTouching = t);
          },
        },
        {
          key: "showTooltips",
          get: function () {
            return this.internalShowTooltips;
          },
          set: function (t) {
            (this.internalShowTooltips = t),
              this.component && (this.component.showTooltips = t);
          },
        },
        {
          key: "startTouch",
          get: function () {
            return this.internalStartTouch;
          },
          set: function (t) {
            (this.internalStartTouch = t),
              this.component && (this.component.startTouch = t);
          },
        },
        {
          key: "shakeTimeOut",
          get: function () {
            return this.internalShakeTimeOut;
          },
          set: function (t) {
            this.internalShakeTimeOut = t;
          },
        },
        {
          key: "shakeit",
          value: function () {
            var t = this;
            this.shakeTimeOut ||
              a.StockBridge.ENV !== a.EnvTypeEnum.MP ||
              (this.shakeTimeOut = setTimeout(function () {
                a.wx$1.vibrateShort({ type: "light" }),
                  t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
                  (t.shakeTimeOut = null);
              }, 100));
          },
        },
        {
          key: "hideTooltip",
          value: function () {
            var t, e;
            (this.showTooltips = !1),
              this.component && (this.component.tipsData = null),
              null ==
                (e = null == (t = this.component) ? void 0 : t.chartObj) ||
                e.hideTooltip();
          },
        },
        {
          key: "chartTouchStart",
          value: function (t) {
            var e = this;
            (this.isTouching = !0), (this.startTouch = !0);
            var i = null == t ? void 0 : t.touches[0];
            (null == t ? void 0 : t.points) &&
              ((i.x = t.points[0].x),
              (i.y = t.points[0].y),
              (this.touchPosition = i)),
              setTimeout(function () {
                var i, n, o, a;
                (null == t ? void 0 : t.points) &&
                  e.isTouching &&
                  t &&
                  e.startTouch &&
                  (e.shakeit(),
                  null ==
                    (n = null == (i = e.component) ? void 0 : i.chartObj) ||
                    n.showTooltip(t.points[0]),
                  null ==
                    (a = null == (o = e.component) ? void 0 : o.hqBridge) ||
                    a.busEmit("lockSwiper", !0),
                  (e.startTouch = !1));
              }, 500),
              setTimeout(function () {
                e.showTooltips &&
                  !e.isTouching &&
                  ((e.startTouch = !1), e.hideTooltip());
              }, 150);
          },
        },
        {
          key: "chartTouchMove",
          value: function (t) {
            var e, i, n, o;
            if (null == t ? void 0 : t.touches) {
              var s = t.touches[0],
                r = s.x,
                h = s.y,
                c = {
                  x: Math.abs(r - this.touchPosition.x),
                  y: Math.abs(h - this.touchPosition.y),
                };
              (c.x > 20 || c.y > 20) && (this.startTouch = !1);
            }
            if (
              a.StockBridge.ENV === a.EnvTypeEnum.MP &&
              (null == t ? void 0 : t.touches)
            ) {
              var u = t.touches[0],
                l = u.x,
                d = u.y;
              return (
                (this.touchPosition = { x: l, y: d }),
                void (
                  this.showTooltips &&
                  t &&
                  ((this.startTouch = !1),
                  null ==
                    (i = null == (e = this.component) ? void 0 : e.chartObj) ||
                    i.showTooltip({ x: l, y: d }))
                )
              );
            }
            if (
              a.StockBridge.ENV !== a.EnvTypeEnum.MP &&
              (null == t ? void 0 : t.touches)
            ) {
              var p = t.touches[0];
              if (!(null == t ? void 0 : t.target)) return;
              var f = t.target.getBoundingClientRect(),
                g = p.clientX - f.left,
                T = p.clientY - f.top;
              (this.touchPosition = { x: g, y: T }),
                this.showTooltips &&
                  t &&
                  ((this.startTouch = !1),
                  null ==
                    (o = null == (n = this.component) ? void 0 : n.chartObj) ||
                    o.showTooltip({ x: g, y: T }));
            }
          },
        },
        {
          key: "chartTouchStop",
          value: function () {
            var t,
              e,
              i = this;
            this.isTouching &&
              ((this.isTouching = !1),
              this.tooltipTimer &&
                (clearTimeout(this.tooltipTimer), (this.tooltipTimer = null)),
              (this.tooltipTimer = setTimeout(function () {
                i.isTouching || i.hideTooltip();
              }, 4e3)),
              null ==
                (e = null == (t = this.component) ? void 0 : t.hqBridge) ||
                e.busEmit("lockSwiper", !1));
          },
        },
        {
          key: "destroy",
          value: function () {
            this.tooltipTimer &&
              (clearTimeout(this.tooltipTimer), (this.tooltipTimer = null)),
              this.shakeTimeOut &&
                (clearTimeout(this.shakeTimeOut), (this.shakeTimeOut = null)),
              (this.component = null);
          },
        },
      ]),
      t
    );
  })(),
  u = {
    name: "Gzfx",
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
      RangeSlider: function () {
        return "../../stock-markets-base/components/RangeSlider.js";
      },
      SelectPlate: function () {
        return "../../wzq-detail-finance/components/SelectPlate.js";
      },
    },
    mixins: [
      {
        data: function () {
          return {
            tipsData: null,
            disableChartTouchMove: !1,
            gzfxChartConfig: { padding: [0, 0, 25, 0] },
            isTooltipShow: !1,
          };
        },
        methods: {
          percentileFromValue: function (t, e) {
            if (parseFloat(e) == parseFloat(this.curGzNum))
              return parseFloat(
                0 === this.curGzTabIndex ? this.curGzPospe : this.curGzPospb
              );
            t.sort(function (t, e) {
              return t - e;
            });
            var i = t.indexOf(e);
            return (
              -1 === i &&
                (i = t.reduce(function (i, n, o) {
                  return Math.abs(n - e) < Math.abs(t[i] - e) ? o : i;
                }, 0)),
              (i / (t.length - 1)) * 100
            );
          },
        },
        watch: {
          disableChartTouchMove: function (t) {
            t && this.hqBridge.report("hq.stock_detail.depth_gzfx_touch_click");
          },
        },
      },
    ],
    inject: ["hqBridge"],
    props: {
      symbol: { type: String, required: !0 },
      chartHidden: { type: Boolean, default: !1 },
      isSpecialPlatform: { type: Boolean, default: !1 },
      skin: {
        type: String,
        default: "white",
        validator: function (t) {
          return ["white", "black"].includes(t);
        },
      },
    },
    data: function () {
      return {
        chartInteraction: null,
        touchPosition: { x: 0, y: 0 },
        isTouching: !1,
        showTooltips: !1,
        startTouch: !1,
        curGzTabIndex: 0,
        gzAllData: [],
        gzfxHash: "",
        dropValue: 0,
        highValue: 0,
        showGzfx: !1,
        curGzPospe: 0,
        curGzPospb: 0,
        curGzNum: 0,
        showGzTabPlate: !1,
        curGzfxTabName: "3年",
        curGzfxTabType: "3_years",
        curGzfxTabIndex: 2,
        gzfxTabList: [
          { id: 0, type: "10_years", name: "10年" },
          { id: 1, type: "5_years", name: "5年" },
          { id: 2, type: "3_years", name: "3年" },
          { id: 3, type: "1_years", name: "1年" },
        ].reverse(),
        gzfwData: null,
        tipsData: null,
        gzdatalist: [],
        dataRange: { start: 0, end: 1 },
        gzfxChartConfig: { padding: [0, 0, 25, 0] },
        hasReportedExposure: !1,
        arrowImageUrl:
          "https://st.gtimg.com/design/3fab13aa4b4e9f2d17efba9ccc2ff322.png",
      };
    },
    computed: {
      isMini: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      tipsData: function (t, e) {
        t && e && t.title !== e.title && this.chartInteraction.shakeit();
      },
    },
    created: function () {
      (this.chartInteraction = new c(this)),
        (this.dataRange = { start: 0, end: 1 }),
        this.getGzfxData(),
        this.hqBridge.busOn("commonSelectChange", this.changeDateSelect);
    },
    mounted: function () {
      this.setupExposureTracking();
    },
    beforeDestroy: function () {
      this.chartInteraction &&
        (this.chartInteraction.destroy(), (this.chartInteraction = null)),
        (this.hydbChart = null),
        this.hqBridge.busOff("commonSelectChange", this.changeDateSelect),
        (this.chartObj = null),
        this.intersectionObserver &&
          (this.intersectionObserver.disconnect(),
          (this.intersectionObserver = null));
    },
    methods: {
      chartTouchStart: function (t) {
        this.chartInteraction.chartTouchStart(t);
      },
      chartTouchMove: function (t) {
        this.chartInteraction.chartTouchMove(t);
      },
      chartTouchStop: function () {
        this.chartInteraction.chartTouchStop();
      },
      hideTooltip: function () {
        this.chartInteraction.hideTooltip();
      },
      setupExposureTracking: function () {
        var t = this;
        h.checkIntersectionObserver(this, ".gzfx-container", function (e) {
          t.hasReportedExposure ||
            (e &&
              (Array.isArray(e) ? e.length > 0 : e.intersectionRatio > 0) &&
              ((t.hasReportedExposure = !0),
              t.hqBridge.report("hq.stock_detail.briefetf_gzfx_brow", {
                stockid: t.symbol,
              })));
        });
      },
      changeDateSelect: function (t) {
        if (this.showGzTabPlate) {
          this.showGzTabPlate = !1;
          var e = this.gzfxTabList.find(function (e) {
            return +e.id == +t;
          });
          this.changeGzYearTab(t, e.name, e.type);
        }
      },
      changeGzTab: function (t) {
        var e;
        t !== this.curGzTabIndex &&
          (this.hideTooltip(),
          (this.dataRange = { start: 0, end: 1 }),
          null == (e = this.$refs.rangeSlider) ||
            e.setDefaultRange(this.dataRange),
          (this.curGzTabIndex = t),
          (this.gzfxHash = String(Math.random())),
          0 === t
            ? this.hqBridge.report("hq.stock_detail.briefetf_gzfx_pe_click", {
                stockid: this.symbol,
              })
            : 1 === t &&
              this.hqBridge.report("hq.stock_detail.briefetf_gzfx_pb_click", {
                stockid: this.symbol,
              }));
      },
      changeGzYearTab: function (t, i, n) {
        return o(
          this,
          null,
          e().mark(function o() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.curGzfxTabIndex = t),
                        (this.curGzfxTabName = i),
                        (this.curGzfxTabType = n),
                        (this.showGzTabPlate = !1),
                        (e.next = 6),
                        this.getGzfxData()
                      );
                    case 6:
                      this.hideTooltip(),
                        this.hqBridge.report(
                          "hq.stock_detail.depth.gzfx.date_change",
                          {
                            stockid: this.symbol,
                            currentType: this.curGzfxTabName,
                          }
                        );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      showGzPlate: function (t) {
        var e = this;
        (this.showGzTabPlate = !0),
          "mp" === this.hqBridge.ENV
            ? this.$nextTick(function () {
                var t;
                null == (t = e.$refs.selectPlateGz) || t.onPopupMore();
              })
            : this.hqBridge.busEmit("showCommonPopup", {
                data: this.gzfxTabList,
                currentId: this.curGzfxTabIndex,
                location: t.target.getBoundingClientRect(),
              });
      },
      rangeChange: function (t) {
        var e, i;
        ((null == (e = this.dataRange) ? void 0 : e.start) === t.start &&
          (null == (i = this.dataRange) ? void 0 : i.end) === t.end) ||
          (this.hideTooltip(),
          (this.dataRange = t),
          (this.gzfxHash = String(Math.random())));
      },
      getGzfxData: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            var i, n, o, h, c, u, l, d, p, f, g, T, m, x, z, b, v, y, G;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (function (t) {
                          var e = [];
                          for (var i in t)
                            i && e.push("".concat(i, "=").concat(t[i]));
                          e.push("key=".concat(s.dist.SIGN_KEY.wzq_analyse)),
                            (t.sign = a.md5Module(e.join("&")));
                        })(
                          (i = {
                            addWzqSign: !0,
                            app_source: "SimpleXcx",
                            days: this.curGzfxTabType,
                            source: "wzq",
                            stock_code: this.symbol,
                          })
                        ),
                        (n = Object.keys(i)
                          .map(function (t) {
                            return "".concat(t, "=").concat(i[t]);
                          })
                          .join("&")),
                        (t.next = 6),
                        r.getEvaluation(this.hqBridge, n)
                      );
                    case 6:
                      0 === (null == (o = t.sent) ? void 0 : o.retcode) &&
                        ((h = o.data),
                        (c = void 0 === h ? [] : h),
                        (u = o.now_tantile_pe),
                        (l = void 0 === u ? 0 : u),
                        (d = o.now_tantile_pb),
                        (p = void 0 === d ? 0 : d),
                        (f = o.tantile30_pb),
                        (g = void 0 === f ? 0 : f),
                        (T = o.tantile30_pe),
                        (m = void 0 === T ? 0 : T),
                        (x = o.tantile70_pb),
                        (z = void 0 === x ? 0 : x),
                        (b = o.tantile70_pe),
                        (v = void 0 === b ? 0 : b),
                        (y = o.opt_field),
                        (G = void 0 === y ? ["1_years", "3_years"] : y),
                        (this.gzAllData = c),
                        (this.gzfwData = {
                          tan30pb: g,
                          tan30pe: m,
                          tan70pb: z,
                          tan70pe: v,
                        }),
                        (this.curGzPospe = (+l > 1 ? +l : 100 * +l).toFixed(2)),
                        (this.curGzPospb = (+p > 1 ? +p : 100 * +p).toFixed(2)),
                        (this.gzfxTabList = this.gzfxTabList.filter(function (
                          t
                        ) {
                          return G.includes(t.type);
                        })),
                        (this.showGzfx = (null == c ? void 0 : c.length) > 0),
                        (this.gzfxHash = String(Math.random())),
                        this.$emit(
                          "loaded",
                          !!(null == c ? void 0 : c.length)
                        )),
                        (t.next = 13);
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(0)), (this.showGzfx = !1);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 10]]
            );
          })
        );
      },
      getChartData: function () {
        var t,
          e,
          i = this,
          n = this.gzAllData.length,
          o = [];
        return (
          0 === this.curGzTabIndex
            ? ((this.dropValue = (+this.gzfwData.tan30pe).toFixed(2)),
              (this.highValue = (+this.gzfwData.tan70pe).toFixed(2)),
              (this.curGzNum =
                (null == (t = this.gzAllData[n - 1]) ? void 0 : t.stock_pe) ||
                0))
            : ((this.dropValue = (+this.gzfwData.tan30pb).toFixed(2)),
              (this.highValue = (+this.gzfwData.tan70pb).toFixed(2)),
              (this.curGzNum =
                (null == (e = this.gzAllData[n - 1]) ? void 0 : e.stock_pb) ||
                0)),
          this.gzAllData.forEach(function (t, e) {
            if (e >= n * i.dataRange.start && e <= n * i.dataRange.end) {
              var a = 0 === i.curGzTabIndex ? +t.stock_pe : +t.stock_pb;
              o.push({ date: t.date, value: a });
            }
          }),
          (this.curGzNum = (+this.curGzNum).toFixed(2)),
          (this.gzdatalist = o.map(function (t) {
            return +t.value;
          })),
          o
        );
      },
      drawGzfxChart: function (e) {
        var i = this,
          n = e.chart,
          o = e.config,
          a = this.getChartData();
        n.source(a, {
          date: { tickCount: 3 },
          value: { ticks: [+this.dropValue, +this.highValue] },
        }),
          n.axis("date", {
            line: !1,
            labelOffset: 12,
            label: function (t, e, i) {
              var n = {
                textAlign: "center",
                fontSize: 10,
                fill: "#7A8499",
                fontFamily: "stockFont",
              };
              return (
                0 === e && (n.textAlign = "start"),
                e > 0 && e === i - 1 && (n.textAlign = "end"),
                n
              );
            },
          }),
          n.axis("value", !1),
          n
            .guide()
            .line({
              start: ["min", +this.dropValue],
              end: ["max", +this.dropValue],
              top: !1,
              style: {
                lineDash: [0, 1.5, 0.6],
                stroke: "#1CAA3C",
                lineWidth: 0.6,
              },
            }),
          n
            .guide()
            .line({
              start: ["min", +this.highValue],
              end: ["max", +this.highValue],
              top: !1,
              style: {
                lineDash: [0, 1.5, 0.6],
                stroke: "#E63535",
                lineWidth: 0.6,
              },
            }),
          n
            .guide()
            .text({
              position: ["min", +this.dropValue],
              content: "30分位",
              offsetY: 7,
              offsetX: 16,
              style: {
                textBaseline: "middle",
                textAlign: "center",
                fill: "#7A8499",
                fontSize: 9,
                fontFamily: "stockFont",
              },
            });
        var s = +this.highValue > Math.max.apply(Math, t(this.gzdatalist));
        n
          .guide()
          .text({
            position: ["min", +this.highValue],
            content: "70分位",
            offsetY: s ? 7 : -7,
            offsetX: 16,
            style: {
              textBaseline: "middle",
              textAlign: "center",
              fill: "#7A8499",
              fontSize: 9,
              fontFamily: "stockFont",
            },
          }),
          n
            .guide()
            .rect({
              top: !1,
              start: ["min", +this.dropValue],
              end: ["max", "min"],
              style: { fill: "rgba(28, 170, 60, 0.12)" },
            }),
          n
            .guide()
            .rect({
              top: !1,
              start: ["min", "max"],
              end: ["max", +this.highValue],
              style: { fill: "rgba(230, 53, 53, 0.12)" },
            }),
          n.legend(!1),
          n.tooltip({
            custom: !0,
            crosshairsType: "y",
            showTooltipMarker: !1,
            alwaysShow: !0,
            triggerOn: [],
            onChange: function (t) {
              i.handleTooltip(t, o, a);
            },
            onShow: function (t) {
              (i.chartInteraction.showTooltips = !0), i.handleTooltip(t, o, a);
            },
          }),
          n.line().position("date*value").color("#FF891E").size(1),
          n.render(),
          (this.chartObj = n);
      },
      handleTooltip: function (t, e, i) {
        this.isTouching &&
          (this.hqBridge.busEmit("lockSwiper", !0),
          (this.tipsData = {
            layout: t.x < e.width / 2 ? "right" : "left",
            title: t.items[0].title,
            items: [
              {
                name: 0 === this.curGzTabIndex ? "市盈率(TTM)" : "市净率",
                value: parseFloat(t.items[0].value).toFixed(2),
              },
              {
                name: "分位",
                value: parseInt(
                  this.percentileFromValue(
                    i.map(function (t) {
                      return t.value;
                    }),
                    t.items[0].value
                  ),
                  10
                ).toFixed(2),
              },
            ],
          }));
      },
      rangeInit: function () {
        var t = this;
        this.$nextTick(function () {
          var e;
          null == (e = t.$refs.rangeSlider) || e.setDefaultRange(t.dataRange);
        });
      },
    },
  };
Array ||
  (
    a.resolveComponent("f2") +
    a.resolveComponent("range-slider") +
    a.resolveComponent("SelectPlate")
  )();
var l = a._export_sfc(u, [
  [
    "render",
    function (t, e, i, n, o, s) {
      return a.e(
        {
          a: a.n(0 === o.curGzTabIndex ? "gz-actived" : ""),
          b: a.o(function (t) {
            return s.changeGzTab(0);
          }, 4073),
          c: a.n(1 === o.curGzTabIndex ? "gz-actived" : ""),
          d: a.o(function (t) {
            return s.changeGzTab(1);
          }, 4074),
          e: a.t(0 === o.curGzTabIndex ? "市盈率（TTM）" : "市净率 "),
          f: a.t(o.curGzNum),
          g: 0 === o.curGzTabIndex && o.curGzPospe,
        },
        0 === o.curGzTabIndex && o.curGzPospe ? { h: a.t(o.curGzPospe) } : {},
        { i: 1 === o.curGzTabIndex && o.curGzPospb },
        1 === o.curGzTabIndex && o.curGzPospb ? { j: a.t(o.curGzPospb) } : {},
        {
          k: a.t(o.curGzfxTabName),
          l: o.arrowImageUrl,
          m: a.o(function () {
            return s.showGzPlate && s.showGzPlate.apply(s, arguments);
          }, 4075),
          n: o.showGzfx,
        },
        o.showGzfx
          ? a.e(
              { o: o.showGzfx },
              o.showGzfx
                ? a.e(
                    { p: o.tipsData },
                    o.tipsData
                      ? {
                          q: a.t(o.tipsData.title),
                          r: a.f(o.tipsData.items, function (t, e, i) {
                            return { a: a.t(t.name), b: a.t(t.value), c: e };
                          }),
                          s: a.n(o.tipsData.layout),
                        }
                      : {},
                    {
                      t: a.sr("gzfxChart", "367a7c9b-0"),
                      v: a.o(s.drawGzfxChart, 4076),
                      w: a.o(s.chartTouchStop, 4077),
                      x: a.o(s.chartTouchStart, 4078),
                      y: a.o(s.chartTouchMove, 4079),
                      z: a.p({
                        "disable-touch-move": !0,
                        "chart-id": "gzfxChart",
                        "c-class": "gzfxChartClass",
                        "c-style": "width: 100%; height: 324rpx",
                        "refresh-hash": o.gzfxHash,
                        hidden: i.chartHidden,
                        config: o.gzfxChartConfig,
                      }),
                    }
                  )
                : {},
              { A: a.o(function () {}, 4080), B: a.o(function () {}, 4081) }
            )
          : {},
        { C: o.showGzfx },
        o.showGzfx
          ? {
              D: a.sr("rangeSlider", "367a7c9b-1"),
              E: a.o(s.rangeChange, 4082),
              F: a.o(s.rangeInit, 4083),
              G: a.o(function () {}, 4084),
            }
          : {},
        { H: o.showGzfx },
        o.showGzfx
          ? {
              I: a.t(o.highValue),
              J: a.t(o.dropValue),
              K: a.t(0 === o.curGzTabIndex ? "市盈率" : "市净率"),
            }
          : {},
        { L: o.showGzTabPlate && s.isMini },
        o.showGzTabPlate && s.isMini
          ? {
              M: a.sr("selectPlateGz", "367a7c9b-2"),
              N: a.o(s.changeGzYearTab, 4085),
              O: a.p({
                data: o.gzfxTabList,
                "cur-tab-index": o.curGzfxTabIndex,
                "tab-type": "gzfx",
                skin: i.skin,
              }),
            }
          : {},
        { P: i.isSpecialPlatform ? 1 : "", Q: "black" === i.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-367a7c9b"],
]);
wx.createComponent(l);
