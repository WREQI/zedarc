var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  l = require("../api/financialReportUtil.js"),
  h = require("../../../../../common/vendor.js"),
  s = {
    options: { styleIsolation: "shared" },
    components: {
      f2: function () {
        return "../util/f2-fit/f2.js";
      },
    },
    props: { incomeData: {}, chartId: "", theme: "" },
    watch: {
      theme: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          t && e && t !== e && (this.hytrendHash = Math.random());
        },
      },
      incomeData: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          t &&
            e &&
            (t.income !== e.income ||
              t.income_ratio !== e.income_ratio ||
              t.income_unit !== e.income_unit) &&
            (this.hytrendHash = Math.random());
        },
      },
    },
    data: function () {
      return { hytrendHash: Math.random() };
    },
    computed: {
      currentDate: function () {
        return this.incomeData &&
          this.incomeData.chartData &&
          this.incomeData.chartData.length > 0
          ? this.incomeData.chartData[this.incomeData.chartData.length - 1].date
          : "";
      },
      chartData: function () {
        return this.incomeData &&
          this.incomeData.chartData &&
          this.incomeData.chartData.length > 0
          ? this.incomeData.chartData
          : [];
      },
    },
    methods: {
      textColor: function (t) {
        return l.textColorByValue(t);
      },
      drawHytrendChart: function (e, l) {
        var h,
          s = this,
          m = this.chartData,
          u = new e.Chart(
            ((h = (function (e, a) {
              for (var n in a || (a = {})) r.call(a, n) && c(e, n, a[n]);
              if (i) {
                var l,
                  h = t(i(a));
                try {
                  for (h.s(); !(l = h.n()).done; ) {
                    n = l.value;
                    o.call(a, n) && c(e, n, a[n]);
                  }
                } catch (t) {
                  h.e(t);
                } finally {
                  h.f();
                }
              }
              return e;
            })({}, l)),
            a(h, n({ padding: [8, 0, "auto", 0], animate: !1 })))
          );
        try {
          u && u.clear();
        } catch (t) {}
        var D = m.map(function (t) {
          return { label: t.date, value: parseFloat(t.income) || 0 };
        });
        if (!D || D.length <= 0) return !1;
        u.axis("label", {
          label: {
            fontFamily: "PingFang SC",
            fontWeight: "400",
            fontSize: 10,
            fill: "#98A0B3",
          },
          labelOffset: 8,
          line: null,
        }),
          u.axis("value", {
            grid: {
              stroke: "black" === this.theme ? "#262E40" : "#DCDFE6",
              lineDash: null,
              lineWidth: 0.5,
            },
            labelOffset: 0,
            label: null,
            line: null,
          }),
          u.source(D, { value: { ticks: [0] } }).tooltip(!1);
        var d = D.length - 1,
          f = 0;
        if (
          (u
            .interval()
            .position("label*value")
            .color("value", function (t) {
              var e = t > 0 ? "#E63535" : "#1caa3c";
              return f < d
                ? ((f += 1),
                  t > 0
                    ? "black" === s.theme
                      ? "#A02C2D"
                      : "#EF8080"
                    : "black" === s.theme
                    ? "#16642A"
                    : "#79CD8C")
                : e;
            }),
          this.incomeData.income_ratio &&
            this.incomeData.income_ratio.length > 0 &&
            Math.abs(parseFloat(this.incomeData.income_ratio)) >= 2.5)
        ) {
          var p = D[D.length - 2].label,
            b = D[D.length - 2].value,
            y = D[D.length - 1].label,
            g = D[D.length - 1].value;
          u
            .guide()
            .line({
              top: !0,
              start: [p, b],
              end: [y, b],
              style: {
                stroke: this.textColor(this.incomeData.income_ratio),
                lineWidth: 1,
                lineDash: [0, 1, 1],
              },
            }),
            u
              .guide()
              .rect({
                top: !0,
                start: [p, b],
                end: [y, g],
                style: {
                  fill: this.textColor(this.incomeData.income_ratio),
                  fillOpacity: 0.1,
                  stroke: this.textColor(this.incomeData.income_ratio),
                },
              }),
            u
              .guide()
              .line({
                top: !0,
                start: [p, g],
                end: [y, g],
                style: {
                  stroke: this.textColor(this.incomeData.income_ratio),
                  lineWidth: 1,
                  lineDash: [0, 1, 1],
                },
              });
        }
        u.render();
      },
    },
  };
Array || h.resolveComponent("f2")();
var m = h._export_sfc(s, [
  [
    "render",
    function (t, e, a, n, i, r) {
      return h.e(
        {
          a:
            a.incomeData &&
            a.incomeData.chartData &&
            a.incomeData.chartData.length > 0,
        },
        a.incomeData &&
          a.incomeData.chartData &&
          a.incomeData.chartData.length > 0
          ? {
              b: h.t(a.incomeData.title),
              c: h.t(r.currentDate),
              d: h.t(a.incomeData.reportType),
              e: h.t(a.incomeData.income),
              f: h.t(a.incomeData.income_unit),
              g: r.textColor(a.incomeData.income),
              h: h.t(a.incomeData.income_ratio),
              i: r.textColor(a.incomeData.income_ratio),
              j: h.p({
                chartId: a.chartId,
                cClass: "hytrendChartClass",
                cStyle: "width: 100%; height: 272rpx",
                onInit: r.drawHytrendChart,
                refreshHash: i.hytrendHash,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-db3bece2"],
]);
wx.createComponent(m);
