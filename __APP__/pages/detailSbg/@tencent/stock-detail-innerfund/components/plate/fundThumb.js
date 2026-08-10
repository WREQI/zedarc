var t = require("../../../../../../common/vendor.js"),
  n = {
    props: ["code", "funds"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return { fmuHash: "", chartConfig: { padding: [10, 0, 0, 0] } };
    },
    watch: {
      funds: function () {
        this.fmuHash = String(Math.random());
      },
    },
    methods: {
      initFundChart: function (t) {
        var n = t.chart,
          r = [];
        Array.isArray(this.funds) &&
          this.funds.map(function (t) {
            r.push({ time: t[0], value: +t[1] });
          }),
          n.source(r, {
            time: { type: "timeCat", tickCount: 2, range: [0, 1] },
            value: { tickCount: 2, min: 0 },
          }),
          n.axis("time", {
            label: function (t, n, r) {
              var e = {};
              return (
                0 === n
                  ? (e.textAlign = "left")
                  : n === r - 1 && (e.textAlign = "right"),
                e
              );
            },
          }),
          n.tooltip({ showCrosshairs: !0 }),
          n
            .area()
            .position("time*value")
            .color("l(90) 0:#ff891e 1:#f7f7f7")
            .shape("smooth"),
          n
            .line()
            .position("time*value")
            .color("#ff891e")
            .size(1)
            .shape("smooth"),
          n.render();
      },
    },
  };
Array || t.resolveComponent("f2")();
var r = t._export_sfc(n, [
  [
    "render",
    function (n, r, e, o, i, a) {
      return {
        a: t.o(a.initFundChart, 2905),
        b: t.p({
          chartId: "fund-thumb-chart",
          cClass: "funds-thumb-chart",
          cStyle: "width: 240rpx; height: 100rpx",
          refreshHash: i.fmuHash,
          config: i.chartConfig,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-d15f63d7"],
]);
wx.createComponent(r);
