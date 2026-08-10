require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../common/vendor.js"),
  e = [0, 30, 60, 90, 120],
  i = {
    props: {
      skin: { type: String, default: "white" },
      type: { type: String, default: "today" },
      funds: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        fmuHash: "",
        activeIndex: -1,
        picked: null,
        list: [],
        currentDot: null,
        offset: 0,
        fmuConfig: { padding: [1, 0, 20, 10] },
        todayFundsTooltip: {},
      };
    },
    computed: {
      isDark: function () {
        return ["black", "dark"].includes(this.skin);
      },
      themeColor: function () {
        return {
          borderLight: this.isDark ? "#262e40" : "#dcdfe6",
          gray: this.isDark ? "#7d88a1" : "#7a8499",
        };
      },
    },
    watch: {
      funds: function (t, e) {
        Array.isArray(t) &&
          Array.isArray(e) &&
          t.length !== e.length &&
          (this.fmuHash = String(Math.random()));
      },
    },
    methods: {
      handleTime: function (t) {
        var e = 60 * (+t.slice(-4, -2) - 9) + +t.slice(-2) - 30;
        return e > 120 ? e - 89 : e;
      },
      getChartData: function () {
        var t = [];
        return (
          Array.isArray(this.funds) &&
            this.funds.map(function (e, i) {
              t.push({ time: i, rawTime: e[0], price: +e[1], value: +e[2] });
            }),
          t
        );
      },
      initFundChart: function (t) {
        var i = this,
          n = t.chart,
          o = (t.config, this.getChartData());
        if (
          (n.animate({
            line: !1,
            point: {
              enter: {
                animation: "fadeIn",
                easing: "elasticIn",
                delay: 0,
                duration: 1,
              },
              leave: {
                animation: "fadeOut",
                easing: "elasticOut",
                delay: 0,
                duration: 1,
              },
            },
          }),
          n.legend(!1),
          n.source(o, {
            time: {
              min: "history" === this.type ? 0 : this.handleTime("0930"),
              max:
                "history" === this.type
                  ? o.length - 1
                  : this.handleTime("1500"),
              nice: !1,
            },
            price: { tickCount: 122, type: "linear" },
            value: { tickCount: 122, type: "linear" },
          }),
          n.axis("time", !1),
          n.axis("price", {
            position: "left",
            line: null,
            grid: function (t, n) {
              return e.indexOf(n) >= 0
                ? {
                    lineDash: null,
                    stroke: i.themeColor.borderLight,
                    lineWidth: 0.5,
                  }
                : null;
            },
            labelOffset: -3.5,
            label: function (t, n) {
              var o = {
                fill: i.themeColor.gray,
                fontSize: 10,
                text: e.indexOf(n) >= 0 ? Number.parseFloat(t).toFixed(2) : "",
                textAlign: "start",
              };
              return (
                0 === n
                  ? (o.textBaseline = "bottom")
                  : n === e[e.length - 1] && (o.textBaseline = "top"),
                o
              );
            },
          }),
          n.axis("value", {
            position: "right",
            line: null,
            grid: null,
            labelOffset: -3.5,
            label: function (t, n) {
              var o = {
                fill: i.themeColor.gray,
                fontSize: 10,
                text:
                  e.indexOf(n) >= 0
                    ? Number.parseFloat(t / 1e4).toFixed(2)
                    : "",
                textAlign: "end",
                top: !0,
              };
              return (
                0 === n
                  ? (o.textBaseline = "bottom")
                  : n === e[e.length - 1] && (o.textBaseline = "top"),
                o
              );
            },
          }),
          "history" !== this.type)
        )
          for (
            var r = ["0930", "1130", "1500"],
              a = ["09:30", "11:30/13:00", "15:00"],
              s = 0;
            s < 3;
            s++
          ) {
            var l = this.handleTime(r[s]);
            n
              .guide()
              .text({
                position: [l, "min"],
                content: a[s],
                style: {
                  fill: this.themeColor.gray,
                  fontSize: 10,
                  textBaseLine: "top",
                  textAlign: 0 === s ? "start" : 2 === s ? "end" : "center",
                },
                offsetY: 12,
              }),
              n
                .guide()
                .line({
                  top: !1,
                  start: [l, "min"],
                  end: [l, "max"],
                  style: {
                    stroke: this.themeColor.borderLight,
                    lineWidth: 0.5,
                  },
                });
          }
        else
          o.map(function (t, e) {
            (0 !== e && e !== o.length - 1) ||
              n
                .guide()
                .text({
                  position: [e, "min"],
                  content: t.rawTime.substr(-5),
                  style: {
                    fill: i.themeColor.gray,
                    fontSize: 10,
                    textBaseLine: "top",
                    textAlign: 0 === e ? "start" : "end",
                  },
                  offsetY: 12,
                });
          });
        n.guide().line({
          start: ["min", "min"],
          end: ["max", "min"],
          style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
        });
        var d = this;
        if (
          (n.tooltip({
            snap: !0,
            crosshairsType: "y",
            crosshairsStyle: { stroke: "#3591FE", lineWidth: 0.5 },
            showItemMarker: !1,
            onShow: function () {
              d.todayFundsTooltip.isShow = !0;
            },
            custom: !0,
            onChange: function (t) {
              var e = t.items || [];
              if (e.length) {
                var i = e[0] && e[0].origin && e[0].origin.time,
                  n = o[i];
                if (!n) return;
                var r =
                    "history" === d.type
                      ? n.rawTime.substr(-5)
                      : n.rawTime.replace(/^(\d{2})(\d{2})/, "$1:$2"),
                  a = n.price.toFixed(2);
                d.todayFundsTooltip = {
                  position: i > o.length / 2 ? "left" : "right",
                  isShow: !0,
                  time: r,
                  price: a,
                  value: ""
                    .concat(n.value > 0 ? "+" : "")
                    .concat((n.value / 1e4).toFixed(2)),
                };
              }
            },
            onHide: function () {
              d.todayFundsTooltip.isShow = !1;
            },
          }),
          n.line().position("time*price").color("#B0B9CA").size(1),
          n.line().position("time*value").color("#ff891e").size(1),
          n.render(),
          "history" !== this.type && o.length && ![121, 242].includes(o.length))
        ) {
          var u = o[o.length - 1],
            h = n.getPosition({ time: u.time, value: u.value });
          n
            .get("canvas")
            .addGroup()
            .addShape("circle", {
              attrs: {
                x: h.x,
                y: h.y,
                r: 2,
                fill: "#ff891e",
                lineWidth: 5,
                stroke: "rgba(255, 137, 30, 0.4)",
              },
            }),
            n.render();
        }
      },
    },
  };
Array || t.resolveComponent("f2")();
var n = t._export_sfc(i, [
  [
    "render",
    function (e, i, n, o, r, a) {
      return t.e(
        {
          a: t.o(a.initFundChart, 2904),
          b: t.p({
            chartId: "funds-chart-" + n.type,
            cClass: "funds-chart-" + n.type,
            cStyle: "width: 735rpx; height: 360rpx",
            refreshHash: r.fmuHash,
            config: r.fmuConfig,
          }),
          c: r.todayFundsTooltip.isShow,
        },
        r.todayFundsTooltip.isShow
          ? {
              d: t.t(r.todayFundsTooltip.time),
              e: t.t(r.todayFundsTooltip.value),
              f: t.n(
                r.todayFundsTooltip.value.indexOf("+") > -1 ? "red" : "green"
              ),
              g: t.t(r.todayFundsTooltip.price),
              h: t.n(r.todayFundsTooltip.position),
            }
          : {},
        { i: a.isDark ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-5078dd0f"],
]);
wx.createComponent(n);
