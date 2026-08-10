var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    props: {
      tabConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, default: 0 },
      showMore: { type: Boolean, default: !0 },
    },
    data: function () {
      return { currTabBarIndex: 0 };
    },
    methods: {
      switchTab: function (e) {
        this.curIndex !== e && this.$emit("switchTab", e);
      },
      viewMore: function () {
        this.$emit("viewMore");
      },
      scrollIntoView: function (t) {
        var n = this,
          r = t > 0 ? t - 1 : t,
          o = t < this.tabConfig.length - 1 ? t + 1 : this.tabConfig.length - 1;
        this.createSelectorQuery()
          .select("#tabbar-scroll-view")
          .boundingClientRect()
          .select("#tab-".concat(r))
          .boundingClientRect()
          .select("#tab-".concat(o))
          .boundingClientRect()
          .exec(function (t) {
            var o = e(t, 3),
              c = o[0],
              i = o[1],
              a = o[2],
              u = (i && i.left) || 0;
            (((a && a.right) || 0) >= ((c && c.width) || 0) || u <= 0) &&
              (n.currTabBarIndex = r);
          });
      },
    },
  },
  r = t._export_sfc(n, [
    [
      "render",
      function (e, n, r, o, c, i) {
        return t.e(
          {
            a: t.f(r.tabConfig, function (e, n, o) {
              return {
                a: t.t(e.name),
                b: "tab-".concat(n),
                c: n,
                d: t.n(r.curIndex === n ? "select-tab" : ""),
                e: t.o(
                  function (e) {
                    return i.switchTab(n);
                  },
                  3918,
                  n
                ),
              };
            }),
            b: "tab-".concat(c.currTabBarIndex),
            c: r.showMore,
          },
          r.showMore
            ? {
                d: t.o(function () {
                  return i.viewMore && i.viewMore.apply(i, arguments);
                }, 3919),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-633281da"],
  ]);
wx.createComponent(r);
