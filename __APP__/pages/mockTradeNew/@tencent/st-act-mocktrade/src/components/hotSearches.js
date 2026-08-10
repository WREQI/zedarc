var t = require("../../../../../../common/vendor.js"),
  n = {
    components: {
      emptyTips: function () {
        return "./emptyTips.js";
      },
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      emptyText: { type: String, default: "" },
    },
    setup: function (n, e) {
      var r = e.emit;
      return {
        onePixel: t.ref(!0),
        flucColor: function (t, n) {
          "--" === t && (t = 0),
            /%$/.test(t.toString()) && (t = parseInt(t.toString(), 10) / 100);
          var e = "up";
          return t < 0 ? (e = "down") : 0 === t && (e = "flat"), n + e;
        },
        onStockItemTap: function (t) {
          r("onStockTap", t);
        },
        rankdelta: function (t) {
          if ("--" !== t && 0 !== t) return Math.abs(t);
        },
        zdf: function (t) {
          return (parseInt(t, 10) > 0 ? "+" : "") + (+t).toFixed(2) + "%";
        },
      };
    },
  },
  e = t._export_sfc(n, [
    [
      "render",
      function (n, e, r, o, a, u) {
        return {
          a: t.f(r.list, function (n, e, r) {
            return {
              a: t.t(e + 1),
              b: t.n("label-" + (e + 1)),
              c: t.n(o.flucColor(n.rankdelta, "rank-")),
              d: t.t(o.rankdelta(n.rankdelta)),
              e: t.t(n.name),
              f: t.t(n.fullCode),
              g: t.t(o.zdf(n.zdf)),
              h: t.n(o.flucColor(n.zdf, "quote-")),
              i: t.t(n.index),
              j: e,
              k: t.o(
                function (t) {
                  return o.onStockItemTap(n);
                },
                2308,
                e
              ),
            };
          }),
          b: o.onePixel,
        };
      },
    ],
    ["__scopeId", "data-v-9b4de186"],
  ]);
wx.createComponent(e);
