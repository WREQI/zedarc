var e = require("../../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: { name: [String, Number], isNotify: [Boolean], isTitle: [Boolean] },
    data: function () {
      return { selected: !1, touch: null, isClick: !1 };
    },
    computed: {
      isMobile: function () {
        return !!this.isMp || "ontouchstart" in window;
      },
      isMp: function () {
        return this.hqBridge.ENV;
      },
    },
    methods: {
      onClick: function () {
        this.$parent.$emit("select", this.name);
      },
      onTouchStart: function (e) {
        1 === e.touches.length &&
          ((this.touch = e.touches[0]), (this.isClick = !0));
      },
      onTouchMove: function (e) {
        if (1 === e.touches.length && this.isClick) {
          var t = e.touches[0],
            n = Math.abs(t.screenX - this.touch.screenX),
            i = Math.abs(t.screenY - this.touch.screenY);
          (n >= 9 || i >= 9) && (this.isClick = !1);
        }
      },
      onTouchEnd: function (e) {
        this.isClick && (this.onClick(), e.preventDefault()),
          (this.isClick = !1);
      },
      changeTab: function (e) {
        this.selected = this.name === e;
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, o, c, s) {
        return e.e(
          { a: s.isMobile },
          s.isMobile
            ? e.e({ b: i.isNotify }, (i.isNotify, {}), {
                c: e.n(
                  s.isMp && c.selected
                    ? "selectedmp"
                    : c.selected
                    ? "selectedwzq"
                    : ""
                ),
              })
            : {
                d: e.n(
                  s.isMp && c.selected
                    ? "selectedmp"
                    : c.selected
                    ? "selectedwzq"
                    : ""
                ),
                e: e.o(function () {
                  return s.onClick && s.onClick.apply(s, arguments);
                }, 2488),
              },
          {
            f: e.n(i.isTitle ? "cont-title" : "cont-content"),
            g: e.o(function () {
              return s.onTouchStart && s.onTouchStart.apply(s, arguments);
            }, 2489),
            h: e.o(function () {
              return s.onTouchMove && s.onTouchMove.apply(s, arguments);
            }, 2490),
            i: e.o(function () {
              return s.onTouchEnd && s.onTouchEnd.apply(s, arguments);
            }, 2491),
          }
        );
      },
    ],
    ["__scopeId", "data-v-fa75ed0a"],
  ]);
wx.createComponent(n);
