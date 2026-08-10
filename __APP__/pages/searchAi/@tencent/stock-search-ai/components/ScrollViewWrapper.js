var o = require("../../../../../common/vendor.js"),
  n = {
    props: { bounces: { type: Boolean, default: !0 } },
    data: function () {
      return {
        isMP: !0,
        options: { bounce: { top: !1, bottom: !1, left: !1, right: !1 } },
      };
    },
    methods: {
      mpBindReachEnd: function () {
        this.$emit("reachListEnd");
      },
      onScrollHandle: function (o) {
        var n,
          e,
          t = o.y,
          r = (
            (null == (e = null == (n = this.$refs) ? void 0 : n.scrollh5)
              ? void 0
              : e.scroll) || {}
          ).maxScrollY;
        Math.abs(t - r) < 20 && this.$emit("reachListEnd"),
          this.$emit("scroll", o);
      },
      mpBindScroll: function (o) {
        this.$emit("scroll", o);
      },
    },
  };
Array || o.resolveComponent("st-scroll")();
var e = o._export_sfc(n, [
  [
    "render",
    function (n, e, t, r, l, s) {
      return o.e(
        { a: l.isMP },
        l.isMP
          ? {
              b: o.o(function () {
                return s.mpBindScroll && s.mpBindScroll.apply(s, arguments);
              }, 3804),
              c: o.o(function () {
                return s.mpBindReachEnd && s.mpBindReachEnd.apply(s, arguments);
              }, 3805),
              d: t.bounces,
            }
          : {
              e: o.sr("scrollh5", "b99b99e0-0"),
              f: o.o(s.onScrollHandle, 3806),
              g: o.p({ "scroll-events": ["scroll"], options: l.options }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-b99b99e0"],
]);
wx.createComponent(e);
