var e = require("../defaultWZQ.js"),
  o = require("../assets/filters/stock.js"),
  r = require("../../../../../../../common/vendor.js"),
  t = {
    props: ["detail"],
    methods: {
      hgFlucColor: e.hgFlucColor,
      priceChangePercent: o.priceChangePercent,
      gotoHq: function (e) {
        this.$emit("gotoHq", e);
      },
    },
  },
  n = r._export_sfc(t, [
    [
      "render",
      function (e, o, t, n, c, s) {
        return {
          a: r.f(t.detail.sshq.quotes, function (e, o, t) {
            return {
              a: r.t(e.stock_name),
              b: r.n(s.hgFlucColor(e.zde, "border-")),
              c: r.t(e.price),
              d: r.n(s.hgFlucColor(e.zde, "")),
              e: r.t(e.zde),
              f: r.t(s.priceChangePercent(e.zdf)),
              g: r.n(s.hgFlucColor(e.zde, "")),
              h: o,
              i: r.n(s.hgFlucColor(e.zde, "bg-")),
              j: r.o(
                function (o) {
                  return s.gotoHq(e);
                },
                4498,
                o
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-f32048ff"],
  ]);
wx.createComponent(n);
