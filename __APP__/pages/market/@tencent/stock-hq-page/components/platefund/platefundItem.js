var t = require("../../../../../../common/vendor.js"),
  a = {
    props: {
      flucShowMode: { type: String, default: "redup" },
      itemData: { type: Object, default: null },
      title: { type: String, default: null },
      range: { type: Number, default: 0 },
    },
    data: function () {
      return { viewData: [] };
    },
    watch: {
      itemData: {
        deep: !1,
        immediate: !0,
        handler: function (t, a) {
          this.formatViewData();
        },
      },
      range: {
        deep: !1,
        immediate: !0,
        handler: function (t, a) {
          this.formatViewData();
        },
      },
    },
    methods: {
      goToDetail: function () {
        this.$emit("goToDetail", {});
      },
      goToBarDetail: function (t) {
        this.$emit("goToBarDetail", { code: t.code });
      },
      formatViewData: function () {
        var t = this;
        if (this.itemData) {
          this.viewData = [];
          var a = null,
            e = null;
          if (
            (0 === this.range
              ? ((a = this.itemData.top), (e = this.itemData.bottom))
              : 1 === this.range
              ? ((a = this.itemData.top_d5), (e = this.itemData.bottom_d5))
              : 2 === this.range &&
                ((a = this.itemData.top_d20), (e = this.itemData.bottom_d20)),
            a && e)
          ) {
            if (e.length > 0) {
              var o,
                n,
                r = e[0],
                i = e[e.length - 1];
              0 === this.range
                ? ((o = r.zljlr), (n = i.zljlr))
                : 1 === this.range
                ? ((o = r.zljlr_d5), (n = i.zljlr_d5))
                : 2 === this.range && ((o = r.zljlr_d20), (n = i.zljlr_d20)),
                (o = parseFloat(o)) < (n = parseFloat(n)) && (e = e.reverse());
            }
            var c = a.concat(e),
              l = c.length;
            if (0 === l) return;
            var u = 0;
            c.forEach(function (a) {
              var e;
              if (
                (0 === t.range
                  ? (e = a.zljlr)
                  : 1 === t.range
                  ? (e = a.zljlr_d5)
                  : 2 === t.range && (e = a.zljlr_d20),
                a)
              ) {
                var o = Math.abs(parseFloat(e));
                u = Math.max(u, o);
              }
            });
            var h = "greenup" === this.flucShowMode ? "#1caa3c" : "#e63535",
              s = "greenup" === this.flucShowMode ? "#e63535" : "#1caa3c",
              g = "#98A0B3";
            0 != +u &&
              c.forEach(function (a, e) {
                var o;
                0 === t.range
                  ? (o = a.zljlr)
                  : 1 === t.range
                  ? (o = a.zljlr_d5)
                  : 2 === t.range && (o = a.zljlr_d20),
                  (a.count = (parseFloat(o) / 1e4).toFixed(2)),
                  (a.alpha = a.count > 0 ? (l - e) / l : (e + 1) / l),
                  (a.color =
                    0 == a.count ? g : a.count > 0 ? h : 0 === a.count ? g : s),
                  (a.count =
                    a.count > 0 ? "+".concat(a.count) : "".concat(a.count));
                var n = ((0.84 * Math.abs(parseFloat(o))) / u) * 100;
                a.percentage = "".concat(Math.max(n, 3.3), "%");
              }),
              (this.viewData = c);
          }
        }
      },
    },
  },
  e = t._export_sfc(a, [
    [
      "render",
      function (a, e, o, n, r, i) {
        return t.e(
          {
            a: t.t(o.title),
            b: t.o(function () {
              return i.goToDetail && i.goToDetail.apply(i, arguments);
            }, 5502),
            c: r.viewData && r.viewData.length > 0,
          },
          r.viewData && r.viewData.length > 0
            ? {
                d: t.f(r.viewData, function (a, e, o) {
                  return {
                    a: t.t(a.count),
                    b: t.s("color:".concat(a.color, ";")),
                    c: t.s(
                      "height:"
                        .concat(a.percentage, ";background-color:")
                        .concat(a.color, ";opacity:")
                        .concat(a.alpha)
                    ),
                    d: t.o(
                      function (t) {
                        return i.goToBarDetail(a);
                      },
                      5503,
                      a.name
                    ),
                    e: t.o(
                      function (t) {
                        return i.goToBarDetail(a);
                      },
                      5504,
                      a.name
                    ),
                    f: a.name,
                  };
                }),
                e: t.s("height:30%;background-color:transparent;"),
                f: t.f(r.viewData, function (a, e, o) {
                  return {
                    a: t.t(
                      a.name.length > 5
                        ? a.name.substring(0, 4) + "..."
                        : a.name
                    ),
                    b: a.name,
                  };
                }),
                g: t.o(function () {
                  return i.goToDetail && i.goToDetail.apply(i, arguments);
                }, 5505),
              }
            : {},
          { h: t.n(o.flucShowMode) }
        );
      },
    ],
    ["__scopeId", "data-v-c90c0072"],
  ]);
wx.createComponent(e);
