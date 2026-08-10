var t,
  e = require("../../../../../../../common/vendor.js"),
  n = [0, 0, 0];
e.wx$1.getSystemInfo({
  success: function (e) {
    t = e.windowWidth / 750;
  },
});
var r = {
    props: {
      navs: {
        type: Array,
        default: function () {
          return [];
        },
      },
      current: { type: Number, default: 0 },
      tabNavActivedWidth: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tablineStyle: { type: Object, default: function () {} },
      tabNavActivedmarginleft: { type: Number, default: 0 },
    },
    data: function () {
      return { slidetransition: "", slidetransform: "" };
    },
    watch: {
      current: function (r) {
        var a = this;
        (this.slidetransition = "all 0.1s cubic-bezier(0, 0, 1, 0.71)"),
          !r || n[r]
            ? (this.slidetransform = "translateX(".concat(
                n[r],
                "px) translateZ(0)"
              ))
            : e.wx$1
                .createSelectorQuery()
                .in(this)
                .selectAll(".tab-bar-item")
                .boundingClientRect(function (e) {
                  (n[r] =
                    e[r].left -
                    66 * t -
                    a.tabNavActivedmarginleft +
                    e[r].width / 2),
                    (a.slidetransform = "translateX(".concat(
                      n[r],
                      "px) translateZ(0)"
                    ));
                })
                .exec();
      },
    },
    methods: {
      changeCurrent: function (t) {
        this.$emit("tapTab", t);
      },
    },
  },
  a = e._export_sfc(r, [
    [
      "render",
      function (t, n, r, a, i, c) {
        return {
          a: e.f(r.navs, function (t, n, a) {
            return {
              a: e.t(t),
              b: n,
              c: e.n(r.current === n ? "tab-bar-item-actived" : ""),
              d: e.o(
                function (t) {
                  return c.changeCurrent(n);
                },
                4556,
                n
              ),
            };
          }),
          b: i.slidetransition,
          c: i.slidetransform,
          d: "".concat(r.tabNavActivedmarginleft, "px"),
        };
      },
    ],
    ["__scopeId", "data-v-bdc6fdf4"],
  ]);
wx.createComponent(a);
