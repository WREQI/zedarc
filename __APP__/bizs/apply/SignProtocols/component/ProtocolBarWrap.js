require("../../../../app.js");
var e = require("../../../../stores/app/useMode.js"),
  o = require("../../../../common/vendor.js"),
  r = {
    name: "ProtocolBarWrap",
    props: {
      isCheck: { type: Boolean, default: !1 },
      hideCheckbox: { type: Boolean, default: !0 },
      useWrapStyle: { type: Boolean, default: !1 },
    },
    setup: function () {
      return { modeStore: e.useModeStore() };
    },
  },
  t = o._export_sfc(r, [
    [
      "render",
      function (e, r, t, n, a, c) {
        return o.e(
          { a: !t.hideCheckbox },
          t.hideCheckbox
            ? { f: o.n(t.useWrapStyle ? "protocol-container" : "") }
            : {
                b: n.modeStore.simpleMode ? "#e63535" : "#3077ec",
                c: t.isCheck,
                d: o.n(t.useWrapStyle ? "protocol-container" : ""),
                e: o.o(function (o) {
                  return e.$emit("change");
                }),
              }
        );
      },
    ],
    ["__scopeId", "data-v-039f370a"],
  ]);
wx.createComponent(t);
