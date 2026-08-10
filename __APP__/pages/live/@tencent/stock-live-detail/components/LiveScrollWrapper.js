var o = require("../../../../../common/vendor.js"),
  r = {
    props: [
      "options",
      "scrollEvents",
      "scroll",
      "scrollEnd",
      "beforeScrollStart",
    ],
    data: function () {
      return { disableScroll: !0 };
    },
    methods: {
      getScrollRef: function () {
        return this.$refs.scroll;
      },
      onScroll: function (o) {
        this.$emit("scroll", o);
      },
      onScrollEnd: function (o) {
        this.$emit("scroll-end", o);
      },
      onBeforeScrollStart: function (o) {
        this.$emit("before-scroll-start", o);
      },
    },
  };
Array || o.resolveComponent("st-scroll")();
var l = o._export_sfc(r, [
  [
    "render",
    function (r, l, e, t, n, s) {
      return o.e(
        { a: n.disableScroll },
        n.disableScroll
          ? {}
          : {
              b: o.sr("scroll", "199822bf-0"),
              c: o.o(s.onScroll, 4642),
              d: o.o(s.onScrollEnd, 4643),
              e: o.o(s.onBeforeScrollStart, 4644),
              f: o.p({ options: e.options, "scroll-events": e.scrollEvents }),
            }
      );
    },
  ],
]);
wx.createComponent(l);
