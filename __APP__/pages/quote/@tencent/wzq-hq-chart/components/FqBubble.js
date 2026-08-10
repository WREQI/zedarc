var e = require("../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "FqBubble",
    props: {
      visible: { type: Boolean, default: !1 },
      position: { type: Object, default: null },
    },
    emits: ["close", "jump"],
    setup: function (n, t) {
      var o = t.emit;
      return {
        arrowSideClass: e.computed(function () {
          var e;
          return (null == (e = n.position) ? void 0 : e.isLeft)
            ? "fq-bubble--left"
            : "fq-bubble--right";
        }),
        bubbleStyle: e.computed(function () {
          var e, t, o, l, u, i;
          return {
            left: "".concat(
              (null != (t = null == (e = n.position) ? void 0 : e.x) ? t : 0) +
                4,
              "px"
            ),
            top: "".concat(
              null != (l = null == (o = n.position) ? void 0 : o.y) ? l : 0,
              "px"
            ),
            transform:
              null == (i = null == (u = n.position) ? void 0 : u.isLeft) || i
                ? "translateY(-50%)"
                : "translate(-100%, -50%)",
          };
        }),
        handleJump: function () {
          o("jump");
        },
        handleClose: function () {
          o("close");
        },
      };
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, l, u, i) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 6042),
                c: e.n(n.arrowSideClass),
                d: e.s(n.bubbleStyle),
                e: e.o(function () {
                  return n.handleJump && n.handleJump.apply(n, arguments);
                }, 6043),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-5f9ca8b6"],
  ]);
wx.createComponent(t);
