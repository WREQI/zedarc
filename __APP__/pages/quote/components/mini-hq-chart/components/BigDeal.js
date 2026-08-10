var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  i = require("../../../@tencent/stock-hq-data/index.js"),
  r = null,
  a = {
    name: "big-deal",
    props: ["bigDeal", "scode", "market", "stockType", "landscape", "skin"],
    components: {
      f2: function () {
        return "../../../../detailSbg/@tencent/stock-union-f2/f2MP.js";
      },
      Modal: function () {
        return "./Modal.js";
      },
    },
    data: function () {
      return {
        chart: null,
        detail: [],
        start: "",
        posId: 0,
        promptInfo: !1,
        chartHash: "",
        showTeach: !1,
        chartConfig: { padding: [1, 1, -5, 1] },
      };
    },
    computed: {
      fontSize4: function () {
        return this.getFontsize(parseInt(this.data[4], 10), 1);
      },
      fontSize5: function () {
        return this.getFontsize(parseInt(this.data[5], 10), 1);
      },
      fontSize6: function () {
        return this.getFontsize(parseInt(this.data[6], 10), 1);
      },
      bigFontSize: function () {
        var t = this,
          e = {};
        return (
          this.detail.forEach(function (n, r) {
            var a = t.getFontsize(i.utils.bigNumberToText(n[2], "", 1));
            e[r] = a;
          }),
          e
        );
      },
      normalFontSize: function () {
        var t = {};
        return (
          this.detail.forEach(function (e, n) {
            var i =
              "B" == e[3] || "b" == e[3]
                ? "red"
                : "S" == e[3] || "s" == e[3]
                ? "green"
                : "";
            t[n] = i;
          }),
          t
        );
      },
      isKcb: function () {
        return i.utils.isKeChuangStock(this.stockType);
      },
      percent: function () {
        if (this.volume > 0) {
          var t = (this.data[2] / this.volume) * (this.isKcb ? 1 : 100);
          return {
            text: (100 * t).toFixed(2),
            width: (108 * t + 4).toFixed(2),
          };
        }
        return { text: 0, width: 0 };
      },
      volume: function () {
        var t, e;
        return (
          (null == (e = null == (t = this.bigDeal) ? void 0 : t.summary)
            ? void 0
            : e.volume) || 0
        );
      },
      data: function () {
        var t, e, n, i;
        return (
          (null ==
          (i =
            null ==
            (n =
              null == (e = null == (t = this.bigDeal) ? void 0 : t.summary)
                ? void 0
                : e.data)
              ? void 0
              : n.cje100)
            ? void 0
            : i.split(", ")) || ""
        );
      },
      desc: function () {
        var t, e;
        return (
          (null == (e = null == (t = this.bigDeal) ? void 0 : t.summary)
            ? void 0
            : e.desc) || "注：成交额大于前月均值10倍为大单"
        );
      },
    },
    watch: {
      bigDeal: function (t) {
        this.data && this.data.length && (this.chartHash = Math.random()),
          (this.detail = []),
          this.init(t);
      },
    },
    created: function () {
      r ||
        (r = new i.DetailApi(function () {
          for (var t, e = arguments.length, i = new Array(e), r = 0; r < e; r++)
            i[r] = arguments[r];
          return 1 === i.length
            ? n.StockBridge.request(i[0], "GET", {}, { forceCallback: !0 })
            : i[3]
            ? ((i[3].forceCallback = !0),
              (t = n.StockBridge).request.apply(t, i))
            : void 0;
        }));
    },
    mounted: function () {
      this.init(this.bigDeal);
    },
    methods: {
      onTouchStart: function (t) {
        this.startY = t.touches[0].pageY;
      },
      bigNumberToText: i.utils.bigNumberToText,
      onInitChart: function (t) {
        var e = t.chart,
          n = this.data[4],
          i = this.data[5],
          r = this.data[6];
        if (e) {
          try {
            e && e.clear();
          } catch (t) {}
          var a = parseInt(n || 0),
            o = parseInt(i || 0),
            s = parseInt(r || 0),
            c = a + o + s,
            u = 0,
            l = 0,
            h = 0;
          c > 0
            ? (h = (
                100 -
                (u = ((a / c) * 100).toFixed(2)) -
                (l = ((o / c) * 100).toFixed(2))
              ).toFixed(2))
            : (h = 100);
          var d = [];
          u > 0 && d.push({ genre: "a", percent: 1 * u, a: 1 }),
            l > 0 && d.push({ genre: "b", percent: 1 * l, a: 1 }),
            h > 0 && d.push({ genre: "c", percent: 1 * h, a: 1 }),
            e.source(d),
            100 == u || 100 == l || 100 == h
              ? e.coord("polar", {
                  transposed: !0,
                  innerRadius: 0.68,
                  radius: 0.72,
                })
              : e.coord("polar", {
                  transposed: !0,
                  innerRadius: 0.68,
                  radius: 0.72,
                  startAngle: Math.PI / 4,
                  endAngle: 2.25 * Math.PI,
                }),
            e.axis(!1).legend(!1).tooltip(!1),
            e
              .guide()
              .text({
                position: ["50%", "50%"],
                content: "大单\n成交",
                style: { fill: "#7a8499", fontSize: 10 },
              }),
            c > 0 &&
              e.pieLabel({
                sidePadding: 0,
                inflectionOffset: 5,
                anchorOffset: -2,
                adjustOffset: -5,
                lineHeight: 1,
                anchorStyle: { fill: "" },
                label1: function (t) {
                  return {
                    text: "".concat(t.percent, "%"),
                    fill: "#7a8499",
                    fontSize: 8,
                  };
                },
              });
          var p = [];
          u > 0 && p.push("#e63535"),
            l > 0 && p.push("#43a047"),
            h > 0 && p.push("#B8BECC"),
            a + o + s === 0 && (p = ["#E9EBF0"]),
            e
              .interval()
              .position("a*percent")
              .color("genre", p)
              .adjust("stack")
              .style({
                lineWidth: 1,
                stroke: "black" === this.skin ? "#12161F" : "#fff",
              }),
            e.render();
        }
      },
      showTips: function () {
        this.showTeach = !0;
      },
      closeDialog: function () {
        this.showTeach = !1;
      },
      getFontsize: function (t, e) {
        if (!e) {
          if (isNaN(t)) return t.length > 4 ? "smallft" : "";
          if (parseInt(t, 10) >= 9999 && parseInt(t, 10) < 1e5)
            return "smallft";
          if (parseInt(t, 10) >= 1e3) return "";
        }
        return parseInt(t, 10) > 999999999
          ? "smallerft"
          : parseInt(t, 10) > 1e6
          ? "smallft"
          : "";
      },
      init: function (t) {
        (this.posId = t.lastStart || ""), this.processData(t.detail || []);
      },
      onPullingUp: function () {
        return this.queryData();
      },
      queryData: function () {
        return (
          (t = this),
          null,
          (i = e().mark(function () {
            var t,
              i,
              a,
              o,
              s = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = this.scode),
                        (i = this.market),
                        (a = "".concat(this.posId)),
                        this.$nextTick(function () {
                          var t = n.wx$1.createSelectorQuery();
                          t
                            .in(s)
                            .select(".scroll-container")
                            .boundingClientRect(),
                            t.exec(function (t) {
                              var e = t[0].height;
                              n.wx$1
                                .createSelectorQuery()
                                .in(s)
                                .select(".scroll-content")
                                .boundingClientRect()
                                .exec(function (t) {
                                  t[0].height > e &&
                                    !s.posId &&
                                    (s.promptInfo = !0);
                                });
                            });
                        }),
                        !(this.posId > 0))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 4),
                        r.getBigDeal(
                          {
                            scode: t,
                            market: i,
                            need: 100,
                            start: a,
                            _appver: 9.5,
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 4:
                      return (
                        (o = e.sent),
                        e.abrupt(
                          "return",
                          ((this.posId =
                            this.posId - 100 > 0 ? this.posId - 100 : 0),
                          this.processData(o.detail || []),
                          !this.posId)
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              this
            );
          })),
          new Promise(function (e, n) {
            var r = function (t) {
                try {
                  o(i.next(t));
                } catch (t) {
                  n(t);
                }
              },
              a = function (t) {
                try {
                  o(i.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            o((i = i.apply(t, null)).next());
          })
        );
        var t, i;
      },
      processData: function (e) {
        var n;
        (n = this.detail).push.apply(n, t(e));
      },
    },
  };
Array || (n.resolveComponent("f2") + n.resolveComponent("Modal"))(), Math;
var o = n._export_sfc(a, [
  [
    "render",
    function (t, e, i, r, a, o) {
      return n.e(
        {
          a: n.t(o.percent.text),
          b: o.percent.width + "%",
          c: n.o(function () {
            return o.showTips && o.showTips.apply(o, arguments);
          }, 3699),
          d: o.data.length > 0,
        },
        o.data.length > 0
          ? {
              e: n.o(o.onInitChart, 3700),
              f: n.p({
                chartId: "ddChart",
                cClass: "ddChart",
                cStyle:
                  "width: 100%; height:  " +
                  (i.landscape ? "100rpx" : "2.1rem"),
                refreshHash: a.chartHash,
                config: a.chartConfig,
              }),
            }
          : {},
        {
          g: n.t(o.bigNumberToText(o.data[4]) || ""),
          h: n.t(o.isKcb ? "股" : "手"),
          i: n.n(o.fontSize4),
          j: n.t(o.bigNumberToText(o.data[5]) || ""),
          k: n.t(o.isKcb ? "股" : "手"),
          l: n.n(o.fontSize5),
          m: n.t(o.bigNumberToText(o.data[6]) || ""),
          n: n.t(o.isKcb ? "股" : "手"),
          o: n.n(o.fontSize6),
          p: n.f(a.detail, function (t, e, i) {
            return {
              a: n.t(t[0].substring(0, 5)),
              b: n.t(t[1]),
              c: n.t(o.bigNumberToText(t[2], "", 1)),
              d: n.t(t[3]),
              e: n.n(o.normalFontSize[e]),
              f: n.n(o.bigFontSize[e]),
              g: e,
            };
          }),
          q: a.promptInfo,
        },
        (a.promptInfo, {}),
        {
          r: n.o(function () {
            return o.onTouchStart && o.onTouchStart.apply(o, arguments);
          }, 3701),
          s: n.o(function () {}, 3702),
          t: n.o(function () {
            return o.onPullingUp && o.onPullingUp.apply(o, arguments);
          }, 3703),
          v: n.o(o.closeDialog, 3704),
          w: n.p({ show: a.showTeach, title: "关于大单", content: o.desc }),
          x: n.o(function () {}, 3705),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c9e63c36"],
]);
wx.createComponent(o);
