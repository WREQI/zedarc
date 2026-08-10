var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      text: { type: String, default: "" },
      backgroundColor: { type: String, default: "rgba(0, 0, 0, 0.60)" },
      color: { type: String, default: "#fff" },
      editMode: { type: Boolean, default: !1 },
      value: { type: String, default: "" },
      arrowUp: { type: Boolean, default: !1 },
      closeable: { type: Boolean, default: !1 },
    },
    computed: {
      bubbleStyle: function () {
        var t, o;
        return {
          transform: "translateX(calc(-50% + ".concat(
            ((e.StockBridge.ENV === e.EnvTypeEnum.MP
              ? (
                  (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
                  e.wx$1.getSystemInfoSync()
                ).screenWidth
              : window.innerWidth) /
              375) *
              ((this.editMode ? 42 : 53) -
                5 *
                  (null != (o = null == (t = this.value) ? void 0 : t.length)
                    ? o
                    : 0)),
            "px))"
          ),
        };
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, r, n, a, l) {
        return e.e(
          { a: r.text },
          r.text
            ? e.e(
                { b: r.arrowUp },
                r.arrowUp ? { c: r.backgroundColor } : {},
                { d: e.t(r.text), e: r.closeable },
                r.closeable
                  ? {
                      f: e.o(function (e) {
                        return t.$emit("close");
                      }, 2568),
                    }
                  : {},
                { g: r.color, h: r.backgroundColor, i: !r.arrowUp },
                r.arrowUp ? {} : { j: r.backgroundColor },
                {
                  k: e.n(r.editMode ? "edit-mode" : ""),
                  l: e.n(r.arrowUp ? "arrow-up" : ""),
                  m: e.s(l.bubbleStyle),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-421fa093"],
  ]);
wx.createComponent(o);
