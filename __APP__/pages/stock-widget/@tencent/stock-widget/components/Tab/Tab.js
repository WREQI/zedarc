var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    inject: { helper: { default: {} }, parent: { default: {} } },
    options: { styleIsolation: "shared" },
    props: { name: [String, Number], isNotify: [Boolean] },
    data: function () {
      return { selected: !1, touch: null, isClick: !1, isMobile: !0 };
    },
    mounted: function () {
      var e,
        t,
        n = this,
        o = (this.helper.env || {}).__MP__;
      (this.isMobile = !!o || "ontouchstart" in window),
        (this.selected =
          this.name === (null == (e = this.parent) ? void 0 : e.index)),
        null == (t = this.parent) ||
          t.$on("change", function (e) {
            n.selected = n.name === e;
          });
    },
    methods: {
      onClick: function () {
        var e;
        null == (e = this.parent) || e.$emit("select", this.name);
      },
      onTouchStart: function (t) {
        if (1 === t.touches.length) {
          var n = e(t.touches, 1)[0];
          (this.touch = n), (this.isClick = !0);
        }
      },
      onTouchMove: function (e) {
        if (1 === e.touches.length && this.isClick) {
          var t = e.touches[0],
            n = Math.abs(t.screenX - this.touch.screenX),
            o = Math.abs(t.screenY - this.touch.screenY);
          (n >= 9 || o >= 9) && (this.isClick = !1);
        }
      },
      onTouchEnd: function (e) {
        this.isClick && (this.onClick(), e.preventDefault()),
          (this.isClick = !1);
      },
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (e, n, o, i, s, c) {
        return t.e(
          { a: s.isMobile },
          s.isMobile
            ? t.e({ b: o.isNotify }, (o.isNotify, {}), {
                c: s.selected ? 1 : "",
              })
            : {
                d: s.selected ? 1 : "",
                e: t.o(function () {
                  return c.onClick && c.onClick.apply(c, arguments);
                }, 5808),
              },
          {
            f: t.o(function () {
              return c.onTouchStart && c.onTouchStart.apply(c, arguments);
            }, 5809),
            g: t.o(function () {
              return c.onTouchMove && c.onTouchMove.apply(c, arguments);
            }, 5810),
            h: t.o(function () {
              return c.onTouchEnd && c.onTouchEnd.apply(c, arguments);
            }, 5811),
          }
        );
      },
    ],
    ["__scopeId", "data-v-5a06792e"],
  ]);
wx.createComponent(o);
