var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "SentimentBar",
    props: {
      sentiment: {
        type: Object,
        default: function () {
          return { duo: 0, guanwang: 0, kong: 0, mood: "乐观", moodFull: "" };
        },
      },
    },
    setup: function (t) {
      var n = e.computed(function () {
          var e = t.sentiment,
            n = e.duo,
            u = void 0 === n ? 0 : n,
            r = e.guanwang,
            o = void 0 === r ? 0 : r,
            i = e.kong;
          return u + o + (void 0 === i ? 0 : i);
        }),
        u = e.computed(function () {
          if (0 === n.value) return 0;
          var e = t.sentiment.duo,
            u = void 0 === e ? 0 : e;
          return Math.round((u / n.value) * 100);
        }),
        r = e.computed(function () {
          if (0 === n.value) return 0;
          var e = t.sentiment.guanwang,
            u = void 0 === e ? 0 : e;
          return Math.round((u / n.value) * 100);
        }),
        o = e.computed(function () {
          return 0 === n.value ? 0 : 100 - u.value - r.value;
        }),
        i = e.computed(function () {
          return u.value > 0 ? Math.max(u.value, 5) : 0;
        }),
        a = e.computed(function () {
          return r.value > 0 ? Math.max(r.value, 5) : 0;
        }),
        c = e.computed(function () {
          return o.value > 0 ? Math.max(o.value, 5) : 0;
        }),
        l = e.computed(function () {
          return t.sentiment.mood || "乐观";
        }),
        d = e.computed(function () {
          var e = l.value;
          return "乐观" === e
            ? "😄️"
            : "中立" === e
            ? "😐"
            : "悲观" === e
            ? "☹️"
            : "";
        }),
        s = e.computed(function () {
          return t.sentiment.moodFull || "";
        });
      return {
        total: n,
        bullishPercent: u,
        neutralPercent: r,
        bearishPercent: o,
        bullishDisplayWidth: i,
        neutralDisplayWidth: a,
        bearishDisplayWidth: c,
        emotionText: l,
        emotionIcon: d,
        description: s,
      };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, u, r, o, i) {
        return e.e(
          {
            a: e.t(r.emotionIcon),
            b: e.t(r.emotionText),
            c: e.t(r.description),
            d: r.bullishPercent + "%",
            e: r.neutralPercent + "%",
            f: r.bearishPercent + "%",
            g: r.bullishPercent > 0,
          },
          r.bullishPercent > 0
            ? { h: e.t(r.bullishPercent), i: r.bullishDisplayWidth + "%" }
            : {},
          { j: r.neutralPercent > 0 },
          r.neutralPercent > 0
            ? { k: e.t(r.neutralPercent), l: r.neutralDisplayWidth + "%" }
            : {},
          { m: r.bearishPercent > 0 },
          r.bearishPercent > 0
            ? { n: e.t(r.bearishPercent), o: r.bearishDisplayWidth + "%" }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1695fe85"],
  ]);
wx.createComponent(n);
