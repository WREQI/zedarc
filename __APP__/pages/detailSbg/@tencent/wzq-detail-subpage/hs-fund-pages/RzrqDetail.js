var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../common/vendor.js"),
  r = require("../../../dayjs/plugin/customParseFormat.js"),
  a = require("../../stock-hq-data/index.js"),
  n = require("../../stock-hq-core/config/css-token.js"),
  s = require("api/index.js"),
  o = require("utils/hqDataFormat.js");
i.dayjs.extend(r.customParseFormat);
var h = [0, 30, 60, 90, 120],
  l = {
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
    },
    inject: ["hqBridge"],
    props: { scode: String, market: String, skin: String },
    data: function () {
      return {
        pageIndex: 1,
        list: [],
        hasMore: !0,
        showChart: !1,
        rzrqHash: "",
        lastDate: "",
        showDifference: !1,
        axisUnit: { rzye: "", rqye: "", rzrqce: "" },
        tipsData: null,
        chartConfig: { animate: !1, padding: [0.5, 1.5, 24, 0.5] },
      };
    },
    computed: {
      themeColor: function () {
        var t = n.CSSTOKEN.DEFAULT;
        return {
          bigRed:
            (t =
              ("black" === this.skin && n.CSSTOKEN.BLACK) || n.CSSTOKEN.DEFAULT)
              .bigRed || "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          bigBlue: t.bigBlue || "#3077ec",
          borderLight: "#e9ebf0",
          bigOrange: t.bigOrange || "#ff891e",
        };
      },
    },
    created: function () {
      this.getData();
    },
    mounted: function () {
      "wzq_light" === this.hqBridge.ENV &&
        window.addEventListener("resize", this.refreshHash);
    },
    destroyed: function () {
      this.destoryChart(),
        "wzq_light" === this.hqBridge.ENV &&
          window.removeEventListener("resize", this.refreshHash);
    },
    methods: {
      toggleRadio: function () {
        this.hqBridge.report("hq.stock_detail.rzrq_detail_switch_click"),
          (this.showDifference = !this.showDifference),
          (this.rzrqHash = Math.random());
      },
      formatValue: function (t) {
        return t
          ? Math.abs(t) > 1e8
            ? "".concat((t / 1e8).toFixed(2), "亿")
            : Math.abs(t) > 1e4
            ? "".concat((t / 1e4).toFixed(2), "万")
            : t
          : "";
      },
      formatDate: function (t) {
        return 8 === t.length
          ? ""
              .concat(t.slice(0, 4), "-")
              .concat(t.slice(4, 6), "-")
              .concat(t.slice(6, 8))
          : 4 === t.length
          ? "".concat(t.slice(0, 2), "月").concat(t.slice(2, 4), "日")
          : void 0;
      },
      loadMore: function () {
        var t = this;
        this.hasMore &&
          ((this.pageIndex += 1),
          this.getData(function () {
            t.rzrqHash = Math.random();
          }));
      },
      pullDownRefresh: function (t) {
        var e = this;
        (this.pageIndex = 1),
          this.getData(function () {
            t && t(), (e.rzrqHash = Math.random());
          });
      },
      getData: function (t) {
        return (
          (r = this),
          null,
          (n = e().mark(function r() {
            var n,
              o,
              h,
              l = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.loading) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (this.loading = !0),
                        (e.next = 5),
                        s.queryRzrqDetail(this.hqBridge, {
                          symbol: a.utils.getSymbol(this.market, this.scode),
                          pageIndex: this.pageIndex,
                        })
                      );
                    case 5:
                      (n = e.sent),
                        (this.loading = !1),
                        0 == +n.code &&
                          n.data &&
                          ((o = n.data.map(function (t) {
                            return (
                              (t.fdate = l.formatDate(t.date)),
                              (t.frzmr = l.formatValue(t.rzmr)),
                              (t.frzjmr = l.formatValue(t.rzjmr)),
                              (t.total = l.formatValue(
                                1 * t.rzye + 1 * t.rqye
                              )),
                              t
                            );
                          })),
                          (this.hasMore = 60 === o.length),
                          1 === this.pageIndex
                            ? (this.list = o)
                            : (this.list = this.list.concat(o)),
                          this.list.length &&
                            ((h = i.dayjs(this.list[0].date, "YYYYMMDD")),
                            (this.lastDate = ""
                              .concat(h.month() + 1, "月")
                              .concat(h.date(), "日"))),
                          (this.showChart = !0)),
                        t && t.call(this);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })),
          new Promise(function (t, e) {
            var i = function t(i) {
                try {
                  s(n.next(i));
                } catch (t) {
                  e(t);
                }
              },
              a = function (t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, a);
              };
            s((n = n.apply(r, null)).next());
          })
        );
        var r, n;
      },
      initChart: function (e) {
        var r = this,
          a = e.chart,
          n = e.config,
          s = t(this.list).reverse();
        a.legend(!1),
          a.source(
            s,
            this.showDifference
              ? {
                  date: { tickCount: 3, range: [0.01, 0.99] },
                  rzrqce: { tickCount: 122, type: "linear" },
                }
              : {
                  date: { tickCount: 3, range: [0.01, 0.99] },
                  rzye: { tickCount: 122, type: "linear" },
                  rqye: { tickCount: 122, type: "linear" },
                }
          ),
          a.axis("date", {
            line: null,
            label: function (t, e, r) {
              var n = i.dayjs(t, "YYYYMMDD").format("MM-DD");
              a.guide().text({
                position:
                  0 === e
                    ? ["min", "min"]
                    : e === r - 1
                    ? ["max", "min"]
                    : ["median", "min"],
                content: n,
                style: {
                  fill: "#7A8499",
                  fontSize: 10,
                  textBaseLine: "top",
                  textAlign: 0 === e ? "start" : 2 === e ? "end" : "center",
                  fontFamily: "stockFont",
                },
                offsetY: 12,
              });
            },
          }),
          this.showDifference
            ? a.axis("rzrqce", {
                position: "left",
                line: null,
                grid: null,
                labelOffset: 0,
                label: function (t, e) {
                  var i = {
                    fill: "#98A0B3",
                    fontSize: 10,
                    text:
                      h.indexOf(e) >= 0
                        ? o.hqDataFormat.getNumberToUnit(
                            t,
                            r.axisUnit.rzrqce,
                            1
                          )
                        : "",
                    textAlign: "start",
                    fontFamily: "stockFont",
                  };
                  return (
                    0 === e
                      ? (i.textBaseline = "bottom")
                      : e === h[h.length - 1]
                      ? (i.textBaseline = "top")
                      : (i.text = ""),
                    i
                  );
                },
              })
            : (a.axis("rzye", {
                position: "left",
                line: null,
                grid: null,
                labelOffset: 0,
                label: function (t, e) {
                  var i = {
                    fill: "#7A8499",
                    fontSize: 10,
                    text:
                      h.indexOf(e) >= 0
                        ? o.hqDataFormat.getNumberToUnit(t, r.axisUnit.rzye, 1)
                        : "",
                    textAlign: "start",
                    fontFamily: "stockFont",
                  };
                  return (
                    0 === e
                      ? (i.textBaseline = "bottom")
                      : e === h[h.length - 1]
                      ? (i.textBaseline = "top")
                      : (i.text = ""),
                    i
                  );
                },
              }),
              a.axis("rqye", {
                position: "right",
                line: null,
                grid: null,
                labelOffset: 0,
                label: function (t, e) {
                  var i = {
                    fill: "#7A8499",
                    fontSize: 10,
                    text:
                      h.indexOf(e) >= 0
                        ? o.hqDataFormat.getNumberToUnit(t, r.axisUnit.rqye, 1)
                        : "",
                    textAlign: "end",
                    fontFamily: "stockFont",
                  };
                  return (
                    0 === e
                      ? (i.textBaseline = "bottom")
                      : e === h[h.length - 1]
                      ? (i.textBaseline = "top")
                      : (i.text = ""),
                    i
                  );
                },
              }));
        var l = s[s.length - 1];
        (this.axisUnit.rqye = o.hqDataFormat.getBigNumberTextUnit(l.rqye)),
          (this.axisUnit.rzye = o.hqDataFormat.getBigNumberTextUnit(l.rzye)),
          (this.axisUnit.rzrqce = o.hqDataFormat.getBigNumberTextUnit(
            l.rzrqce
          )),
          this.showDifference
            ? a.line().position("date*rzrqce").color("#30AAEC").size(1)
            : (a.line().position("date*rqye").color("#ff891e").size(1),
              a
                .line()
                .position("date*rzye")
                .color(this.themeColor.bigBlue)
                .size(1)),
          a
            .guide()
            .line({
              start: ["min", "min"],
              end: ["max", "min"],
              top: !1,
              style: { stroke: this.themeColor.borderLight, lineWidth: 1 },
            }),
          a.tooltip({
            custom: !0,
            showCrosshairs: !0,
            showTooltipMarker: !1,
            crosshairsType: "y",
            onChange: function (t) {
              (r.disableChartTouchMove = !0),
                "wzq_light" === r.hqBridge.ENV &&
                  r.hqBridge.busEmit("lockSwiper", !0),
                r.showDifference
                  ? (r.tipsData = {
                      layout: t.x < n.width / 2 ? "right" : "left",
                      title: i
                        .dayjs(t.items[0].title, "YYYYMMDD")
                        .format("YYYY-MM-DD"),
                      items: [
                        {
                          name: "融资融券差额",
                          value:
                            o.hqDataFormat.getNumberToUnit(
                              t.items[0].value,
                              r.axisUnit.rzrqce,
                              2
                            ) + r.axisUnit.rzrqce,
                        },
                      ],
                    })
                  : (r.tipsData = {
                      layout: t.x < n.width / 2 ? "right" : "left",
                      title: i
                        .dayjs(t.items[0].title, "YYYYMMDD")
                        .format("YYYY-MM-DD"),
                      items: [
                        {
                          name: "融资",
                          value:
                            o.hqDataFormat.getNumberToUnit(
                              t.items[1].value,
                              r.axisUnit.rzye,
                              2
                            ) + r.axisUnit.rzye,
                        },
                        {
                          name: "融券",
                          value:
                            o.hqDataFormat.getNumberToUnit(
                              t.items[0].value,
                              r.axisUnit.rqye,
                              2
                            ) + r.axisUnit.rqye,
                        },
                      ],
                    });
            },
            onHide: function () {
              (r.tipsData = null),
                (r.disableChartTouchMove = !1),
                "wzq_light" === r.hqBridge.ENV &&
                  r.hqBridge.busEmit("lockSwiper", !1);
            },
          }),
          a.render();
      },
      destoryChart: function () {
        try {
          this.chart && this.chart.destroy && this.chart.destroy(),
            (this.chart = null);
        } catch (t) {}
      },
      refreshHash: function () {
        this.rzrqHash = Math.random();
      },
    },
  };
Array || i.resolveComponent("f2")();
var c = i._export_sfc(l, [
  [
    "render",
    function (t, e, r, a, n, s) {
      return i.e(
        { a: n.lastDate },
        n.lastDate ? { b: i.t(n.lastDate) } : {},
        { c: n.showDifference },
        n.showDifference
          ? { d: i.t(n.axisUnit.rzrqce) }
          : { e: i.t(n.axisUnit.rzye), f: i.t(n.axisUnit.rqye) },
        { g: n.showChart },
        n.showChart
          ? i.e(
              { h: n.tipsData },
              n.tipsData
                ? {
                    i: i.t(n.tipsData.title),
                    j: i.f(n.tipsData.items, function (t, e, r) {
                      return { a: i.t(t.name), b: i.t(t.value), c: e };
                    }),
                    k: i.n(n.tipsData.layout),
                  }
                : {},
              {
                l: i.o(s.initChart, 512),
                m: i.o(function () {}, 513),
                n: i.p({
                  chartId: "rzrq-detail-chart",
                  cClass: "rzrq-detail-chart",
                  cStyle: "width: 100%; height: 270rpx",
                  refreshHash: n.rzrqHash,
                  config: n.chartConfig,
                }),
              }
            )
          : {},
        { o: n.showDifference ? 1 : "", p: n.showDifference },
        (n.showDifference, {}),
        {
          q: i.n(n.showDifference ? "radio-checked" : ""),
          r: i.o(function () {
            return s.toggleRadio && s.toggleRadio.apply(s, arguments);
          }, 514),
          s: n.list.length,
        },
        n.list.length
          ? i.e(
              {
                t: i.f(n.list, function (t, e, r) {
                  return {
                    a: i.t(t.fdate),
                    b: i.t(t.frzmr),
                    c: i.t(t.frzjmr),
                    d: i.t(t.total),
                    e: t.date,
                  };
                }),
                v: n.hasMore,
              },
              (n.hasMore, {})
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-9dc3af60"],
]);
wx.createComponent(c);
