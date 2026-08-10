var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    props: ["score", "trend"],
    setup: function (t, n) {
      var r = n.emit,
        o = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        u = e.ref(0),
        a = "mp" === e.StockBridge.ENV,
        c = e.ref([
          { start: 0, end: 15, text: "过冷" },
          { start: 15, end: 50, text: "适中偏冷" },
          { start: 50, end: 85, text: "适中偏热" },
          { start: 85, end: 100, text: "过热" },
        ]),
        s = e.computed(function () {
          return (
            c.value.findIndex(function (e) {
              return e.start < u.value && e.end >= u.value;
            }) || 0
          );
        });
      return (
        e.watch(
          function () {
            return s.value;
          },
          function () {
            r("getCurrentHeat", c.value[s.value] && c.value[s.value].text);
          }
        ),
        e.onMounted(function () {
          var n = t.score,
            r = function t() {
              (u.value += 2),
                u.value > n && (u.value = n),
                u.value < n &&
                  (o.requestID = a
                    ? e.nextTick$1(t)
                    : window.requestAnimationFrame(t));
            };
          o.requestID = a ? e.nextTick$1(r) : window.requestAnimationFrame(r);
        }),
        e.onBeforeUnmount(function () {
          o.requestID && !a && window.cancelAnimationFrame(o.requestID);
        }),
        { currentScore: u, heats: c, currentHeatIndex: s }
      );
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, o, u, a) {
        return {
          a: e.f(t.heats, function (n, r, o) {
            return e.e(
              {
                a: e.t(n.text),
                b: e.n(t.score > n.start && t.score <= n.end ? "active" : ""),
                c: t.score > n.start && t.score <= n.end,
              },
              t.score > n.start && t.score <= n.end
                ? {
                    d: e.n("上升趋势" !== t.trend ? "reverse" : ""),
                    e: e.t(t.trend),
                    f: e.n(
                      "下降趋势" === t.trend ? "heat-tag-color-green" : ""
                    ),
                  }
                : {},
              {
                g: e.n("heat-" + (r + 1)),
                h: e.n(
                  t.currentScore > n.start && t.currentScore < n.end
                    ? "over"
                    : ""
                ),
                i: e.n(t.currentScore >= n.end ? "fill" : ""),
                j: r,
              }
            );
          }),
          b: e.n("heat-" + (t.currentHeatIndex + 1)),
          c: t.currentScore + "%",
        };
      },
    ],
    ["__scopeId", "data-v-8f1c2b12"],
  ]);
wx.createComponent(n);
