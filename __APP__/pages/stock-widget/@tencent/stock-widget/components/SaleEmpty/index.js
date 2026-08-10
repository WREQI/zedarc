var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (a, n) {
      var o = function (t) {
          try {
            r(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          try {
            r(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(o, s);
        };
      r((i = i.apply(t, e)).next());
    });
  },
  i = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-hq-data/index.js"),
  n = {
    components: {
      f2: function () {
        return "../../../../../detailSbg/@tencent/stock-union-f2/f2MP.js";
      },
      RangeSlider: function () {
        return "./components/RangeSlider.js";
      },
    },
    mixins: [
      {
        data: function () {
          return {
            touchPosition: { x: 0, y: 0 },
            tooltipTimer: null,
            isTouching: !1,
          };
        },
        watch: {
          tipsData: function (t, e) {
            t && e && t.title !== e.title && this.shakeit();
          },
        },
        methods: {
          shakeit: function () {
            var t,
              e = this;
            this.shakeTimeOut ||
              "mp" !== (null == (t = this.hqBridge) ? void 0 : t.ENV) ||
              (this.shakeTimeOut = setTimeout(function () {
                i.wx$1.vibrateShort({ type: "light" }),
                  e.shakeTimeOut && clearTimeout(e.shakeTimeOut),
                  (e.shakeTimeOut = null);
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
            var e, i;
            if (
              ((this.startTouch = !1),
              "mp" === (null == (e = this.hqBridge) ? void 0 : e.ENV) &&
                (null == t ? void 0 : t.touches))
            ) {
              var a = t.touches[0],
                n = a.x,
                o = a.y;
              return (
                (this.touchPosition = { x: n, y: o }),
                void (
                  this.showTooltips &&
                  t &&
                  this.chartObj.showTooltip({ x: n, y: o })
                )
              );
            }
            if (
              "wzq_light" === (null == (i = this.hqBridge) ? void 0 : i.ENV) &&
              (null == t ? void 0 : t.touches)
            ) {
              var s = t.touches[0],
                r = t.target.getBoundingClientRect(),
                h = s.clientX - r.left,
                l = s.clientY - r.top;
              (this.touchPosition = { x: h, y: l }),
                this.showTooltips &&
                  t &&
                  this.chartObj.showTooltip({ x: h, y: l });
            }
          },
        },
      },
    ],
    inject: { helper: { default: {} }, hqBridge: { default: null } },
    options: { styleIsolation: "shared" },
    props: [
      "chartData",
      "unit",
      "unitText",
      "pixelRatio",
      "isWidget",
      "symbol",
      "end",
      "stockName",
      "skin",
    ],
    data: function () {
      return {
        dataRange: { start: 0.889, end: 1 },
        chartHash: "",
        firstLoaded: !1,
        chartConfig: { padding: [24, 4, 16, 0], animate: !1 },
        tipsData: null,
        innerChartData: [],
      };
    },
    watch: {
      chartData: {
        handler: function (t) {
          this.innerChartData = t;
        },
        immediate: !0,
      },
      skin: function (t, e) {
        t && t !== e && (this.chartHash = Math.random());
      },
    },
    created: function () {
      this.isWidget && this.getSaleData();
    },
    destroyed: function () {
      this.chartObj = null;
    },
    methods: {
      computeStart: function (t) {
        return 60 / t;
      },
      rangeChange: function (t) {
        var e = this;
        this.hqBridge &&
          this.hqBridge.report("hq.stock_detail.fundhk.saleempty.click"),
          (this.dataRange &&
            this.dataRange.start === t.start &&
            this.dataRange.end === t.end) ||
            ((this.dataRange = t),
            (this.chartHash = Math.random()),
            setTimeout(function () {
              e.hideTooltip();
            }, 0));
      },
      rangeInit: function () {
        var t = this;
        this.$nextTick(function () {
          var e;
          null == (e = t.$refs.rangeSliderEmpty) ||
            e.setDefaultRange(t.dataRange);
        });
      },
      dealData: function (t) {
        var e = null == t ? void 0 : t.length;
        if (!this.firstLoaded) {
          var i = this.computeStart(e);
          (this.dataRange.start = 1 - i),
            (this.firstLoaded = !0),
            this.rangeInit();
        }
        var a = Math.floor(e * this.dataRange.start),
          n = Math.round(e * this.dataRange.end),
          o = t.slice(a, n),
          s = +o[0].shortRadio,
          r = +o[0].shortRadio;
        return {
          chartData: o.map(function (t) {
            var e = +t.shortRadio;
            return (
              e > s && (s = e),
              e < r && (r = e),
              { date: t.date, value: e, close: +t.close }
            );
          }),
          saleMax: (+s).toFixed(2),
          saleMin: (+r).toFixed(2),
        };
      },
      drawHoldHkRate: function (t) {
        var e = this,
          i = t.chart,
          a = t.config,
          n = this.dealData(this.innerChartData),
          o = n.chartData,
          s = void 0 === o ? [] : o,
          r = n.saleMax,
          h = n.saleMin;
        i.source(s, {
          date: { tickCount: 3 },
          value: {
            min: +h,
            max: +r,
            tickCount: 122,
            type: "linear",
            formatter: function (t) {
              return (+t).toFixed(2);
            },
          },
          close: {
            tickCount: 122,
            type: "linear",
            formatter: function (t) {
              return (+t).toFixed(2);
            },
          },
        }),
          i.legend(!1),
          i.tooltip({
            custom: !0,
            showCrosshairs: !0,
            showTooltipMarker: !1,
            crosshairsType: "y",
            alwaysShow: !0,
            triggerOn: [],
            onChange: function (t) {
              e.handleTooltip(t, a);
            },
            onShow: function (t) {
              (e.showTooltips = !0), e.handleTooltip(t, a);
            },
          }),
          i.axis("date", {
            line: {
              stroke: "black" === this.skin ? "#191E27" : "#E9EBF0",
              lineDash: null,
              lineWidth: 1,
            },
            labelOffset: 4,
            label: function (t, i, a) {
              var n = e.dealTimeLabel(t),
                o = {
                  fill: "#7A8499",
                  fontFamily: "stockFont",
                  fontSize: 10 * e.pixelRatio,
                  text: n,
                };
              return (
                0 === i && (o.textAlign = "start"),
                i > 0 && i === a - 1 && (o.textAlign = "end"),
                o
              );
            },
          }),
          i.axis("close", { line: null, grid: null, label: null }),
          i.axis("value", {
            position: "left",
            line: null,
            grid: null,
            labelOffset: 0,
            label: function (t, i, a) {
              var n = {
                fontFamily: "stockFont",
                textAlign: "start",
                fill: "#7A8499",
                text: "",
                fontSize: 9 * e.pixelRatio,
                lineHeight: 12 * e.pixelRatio,
              };
              return (
                0 === i &&
                  ((n.textBaseline = "bottom"), (n.text = "".concat(h, "%"))),
                i === a - 1 &&
                  ((n.text = "卖空比例\n".concat(r, "%")),
                  (n.textBaseline = "bottom")),
                n
              );
            },
          }),
          i.line().position("date*close").color("#C9D0DC").size(1),
          i.line().position("date*value").color("#FF891E").size(1),
          i.render(),
          (this.chartObj = i);
      },
      handleTooltip: function (t, e) {
        this.isTouching &&
          (this.tipsData = {
            layout: t.x < e.width / 2 ? "right" : "left",
            title: t.items[0].title,
            items: [
              { name: "卖空比例", value: "".concat(t.items[1].value, "%") },
              { name: "股价", value: t.items[0].value },
            ],
          });
      },
      dealTimeLabel: function (t) {
        if ((null == t ? void 0 : t.length) < 6) return t;
        var e = new i.dayjs().format("YYYY"),
          a = new i.dayjs(t);
        return a.format("YYYY") !== e ? a.format("YYYY-MM") : a.format("MM-DD");
      },
      getSaleData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.symbol) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (i = a.utils.splitSymbol(this.symbol)),
                        (n = i.market),
                        t.abrupt(
                          "return",
                          a.utils.isUSMarket(n)
                            ? this.getUSSaleData()
                            : this.getHKSaleData()
                        )
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getHKSaleData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a,
              n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (a = this.end || new i.dayjs().format("YYYY-MM-DD")),
                        this.helper
                          .request(
                            "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/hkAnalysis/get?param="
                              .concat(this.symbol, ",day,,")
                              .concat(a, ",30,qfq"),
                            {},
                            { method: "get" }
                          )
                          .then(function (t) {
                            var e = ((null == t ? void 0 : t.data) || {}).data,
                              i = void 0 === e ? [] : e,
                              a = [];
                            null == i ||
                              i.forEach(function (t) {
                                var e = t || {},
                                  i = e.kline,
                                  n = e.short,
                                  o = i && i.length ? i[2] : "";
                                if (n) {
                                  var s = {
                                    date: n.date,
                                    shortRadio: n.ShortRatio,
                                    close: o,
                                  };
                                  a.push(s);
                                }
                              }),
                              (n.innerChartData = a);
                          })
                          .catch(function (t) {});
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getUSSaleData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a,
              n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (a = this.end || new i.dayjs().format("YYYY-MM-DD")),
                        this.helper
                          .request(
                            "https://proxy.finance.qq.com/ifzqgtimg/appstock/us/introduce/getShortInterest?symbol="
                              .concat(this.symbol, "&end_date=")
                              .concat(a),
                            {},
                            { method: "get" }
                          )
                          .then(function (t) {
                            var e = ((null == t ? void 0 : t.data) || {})
                                .short_interest,
                              i = void 0 === e ? [] : e,
                              a = [];
                            null == i ||
                              i.forEach(function (t) {
                                var e = t || {},
                                  i = e.kline,
                                  n = e.short,
                                  o = i && i.length ? i[2] : "";
                                if (n) {
                                  var s = {
                                    date: n.date,
                                    shortRadio: n.ratio,
                                    close: o,
                                  };
                                  a.push(s);
                                }
                              }),
                              (n.innerChartData = a);
                          })
                          .catch(function (t) {});
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
    },
  };
Array || (i.resolveComponent("f2") + i.resolveComponent("RangeSlider"))();
var o = i._export_sfc(n, [
  [
    "render",
    function (t, e, a, n, o, s) {
      return i.e(
        { a: a.isWidget },
        a.isWidget
          ? i.e(
              {
                b: i.t(a.stockName ? "".concat(a.stockName, "-") : ""),
                c: a.end,
              },
              a.end ? { d: i.t(a.end) } : {}
            )
          : {},
        { e: o.innerChartData && o.innerChartData.length > 0 },
        o.innerChartData && o.innerChartData.length > 0
          ? i.e(
              { f: o.tipsData },
              o.tipsData
                ? {
                    g: i.t(o.tipsData.title),
                    h: i.f(o.tipsData.items, function (t, e, a) {
                      return { a: i.t(t.name), b: i.t(t.value), c: e };
                    }),
                    i: i.n(o.tipsData.layout),
                  }
                : {},
              {
                j: i.o(s.drawHoldHkRate, 5667),
                k: i.o(t.chartTouchStop, 5668),
                l: i.o(t.chartTouchStart, 5669),
                m: i.o(t.chartTouchMove, 5670),
                n: i.p({
                  "chart-id": "saleEmpty",
                  "c-class": "saleEmpty",
                  "c-style":
                    "width: 100%; height: 288rpx; border-top: 1px solid #E9EBF0",
                  "refresh-hash": o.chartHash,
                  "disable-touch-move": !0,
                  config: o.chartConfig,
                }),
              }
            )
          : {},
        { o: !a.isWidget },
        a.isWidget
          ? {}
          : {
              p: i.sr("rangeSliderEmpty", "13d76a3c-1"),
              q: i.o(s.rangeChange, 5671),
              r: i.o(s.rangeInit, 5672),
            },
        { s: i.n(a.isWidget ? "widget" : ""), t: i.n(a.skin) }
      );
    },
  ],
  ["__scopeId", "data-v-13d76a3c"],
]);
wx.createComponent(o);
