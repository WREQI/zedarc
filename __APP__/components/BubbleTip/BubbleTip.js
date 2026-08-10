require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    name: "BubbleTip",
    props: {
      isShow: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      arrowPosition: {
        type: String,
        default: "top-right",
        validator: function (t) {
          return (
            -1 !==
            [
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
              "bottom-center",
              "top-center",
            ].indexOf(t)
          );
        },
      },
      showCloseBtn: { type: Boolean, default: !1 },
      duration: { type: Number, default: 0 },
    },
    emits: ["click"],
    setup: function (e, o) {
      var n = o.emit,
        i = null;
      function r() {
        i && clearTimeout(i), (i = null);
      }
      return (
        t.watch(
          function () {
            return e.isShow;
          },
          function (t) {
            t && (null == e ? void 0 : e.duration) > 0
              ? (i = setTimeout(function () {
                  n("close");
                }, e.duration))
              : t || r();
          },
          { immediate: !0 }
        ),
        t.onBeforeUnmount(function () {
          r();
        }),
        {}
      );
    },
    methods: {
      handleClick: function () {
        this.$emit("click");
      },
      closeBubble: function () {
        this.$emit("close");
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, i, r, u) {
        return t.e(
          { a: n.isShow },
          n.isShow
            ? t.e(
                { b: t.t(n.content), c: n.showCloseBtn },
                n.showCloseBtn
                  ? {
                      d: t.o(function () {
                        return (
                          u.closeBubble && u.closeBubble.apply(u, arguments)
                        );
                      }),
                    }
                  : {},
                {
                  e: t.n(n.arrowPosition),
                  f: t.n("^".concat(n.arrowPosition)),
                  g: t.o(function () {
                    return u.handleClick && u.handleClick.apply(u, arguments);
                  }),
                }
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(o);
