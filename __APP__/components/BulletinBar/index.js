require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    props: {
      clickStop: { type: Boolean, default: !0 },
      bulletinId: { type: String, default: "" },
      showRightIcon: { type: Boolean, default: !1 },
      closeText: { type: String, default: "" },
      animate: { type: Boolean, default: !0 },
      showRadius: { type: Boolean, default: !1 },
    },
    data: function () {
      return { toggle: !0, showAnimate: !0, time: "15s" };
    },
    computed: {
      hasBulletin: function () {
        return "" !== this.bulletinId;
      },
    },
    mounted: function () {
      var t = this;
      this.animate
        ? this.$refs.inner &&
          this.$refs.outer &&
          ((this.time = "".concat(
            Math.max(
              15,
              parseInt(
                (this.$refs.inner.offsetWidth / this.$refs.outer.offsetWidth) *
                  7.5,
                10
              )
            ),
            "s"
          )),
          setTimeout(function () {
            t.$refs.outer &&
              2 * t.$refs.outer.offsetWidth > t.$refs.inner.offsetWidth + 15 &&
              (t.showAnimate = !1);
          }, 100))
        : (this.showAnimate = !1);
    },
    updated: function () {
      if (this.animate) {
        var t = this.$refs.outer,
          e = this.$refs.inner;
        t &&
          e &&
          ((this.showAnimate = t.offsetWidth <= e.offsetWidth),
          (this.time = "".concat(
            Math.max(15, parseInt((e.offsetWidth / t.offsetWidth) * 7.5, 10)),
            "s"
          )));
      } else this.showAnimate = !1;
    },
    methods: {
      close: function () {
        this.$emit("close");
      },
      textClick: function () {
        this.clickStop && (this.toggle = !this.toggle), this.$emit("textClick");
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, o, s, n, a) {
        return t.e(
          {
            a: n.toggle ? "" : 1,
            b: n.showAnimate ? "" : 1,
            c: n.time,
            d: n.showAnimate ? 1 : "",
            e: n.showAnimate ? 1 : "",
            f: n.showAnimate ? "" : 1,
            g: t.o(function () {
              return a.textClick && a.textClick.apply(a, arguments);
            }),
            h: o.showRightIcon,
          },
          o.showRightIcon
            ? {
                i: t.o(function () {
                  return a.textClick && a.textClick.apply(a, arguments);
                }),
              }
            : {},
          { j: !o.closeText },
          o.closeText
            ? {
                l: t.t(o.closeText),
                m: t.o(function () {
                  return a.close && a.close.apply(a, arguments);
                }),
              }
            : {
                k: t.o(function () {
                  return a.close && a.close.apply(a, arguments);
                }),
              },
          { n: n.showAnimate ? 1 : "", o: o.showRadius ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-b8d016e0"],
  ]);
wx.createComponent(i);
