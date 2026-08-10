var t = require("../../../../../../common/vendor.js"),
  e = !1;
try {
  e = !0;
} catch (t) {}
var n = {
    inject: { parent: { default: {} } },
    props: {
      name: [String, Number],
      isNotify: [Boolean],
      isPc: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        selected: !1,
        touch: null,
        isClick: !1,
        isMobile: !!e || "ontouchstart" in window,
      };
    },
    mounted: function () {
      var t,
        e,
        n = this;
      (this.selected =
        this.name === (null == (t = this.parent) ? void 0 : t.index)),
        null == (e = this.parent) ||
          e.$on("change", function (t) {
            n.selected = n.name === t;
          });
    },
    methods: {
      onClick: function () {
        var t;
        null == (t = this.parent) || t.$emit("select", this.name);
      },
      onTouchStart: function (t) {
        1 === t.touches.length &&
          ((this.touch = t.touches[0]), (this.isClick = !0));
      },
      onTouchMove: function (t) {
        if (1 === t.touches.length && this.isClick) {
          var e = t.touches[0],
            n = Math.abs(e.screenX - this.touch.screenX),
            o = Math.abs(e.screenY - this.touch.screenY);
          (n >= 9 || o >= 9) && (this.isClick = !1);
        }
      },
      onTouchEnd: function (t) {
        this.isClick && (this.onClick(), t.preventDefault()),
          (this.isClick = !1);
      },
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (e, n, o, i, c, s) {
        return t.e(
          { a: c.isMobile && !o.isPc },
          c.isMobile && !o.isPc
            ? t.e({ b: o.isNotify }, (o.isNotify, {}), {
                c: c.selected ? 1 : "",
              })
            : {
                d: c.selected ? 1 : "",
                e: t.o(function () {
                  return s.onClick && s.onClick.apply(s, arguments);
                }, 4711),
              },
          {
            f: t.o(function () {
              return s.onTouchStart && s.onTouchStart.apply(s, arguments);
            }, 4712),
            g: t.o(function () {
              return s.onTouchMove && s.onTouchMove.apply(s, arguments);
            }, 4713),
            h: t.o(function () {
              return s.onTouchEnd && s.onTouchEnd.apply(s, arguments);
            }, 4714),
          }
        );
      },
    ],
    ["__scopeId", "data-v-0e22c852"],
  ]);
wx.createComponent(o);
