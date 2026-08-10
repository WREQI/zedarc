var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      data: { type: Object, default: function () {} },
      stat: { type: String, default: "" },
    },
    setup: function (e, n) {
      var a = n.emit,
        o = t.ref(!1);
      return {
        show: o,
        jump: function () {
          a("reportData", "finish_popup_click"),
            setTimeout(function () {
              t.wx$1.navigateTo({
                url: "/pages/act/webview/main?url=".concat(
                  encodeURIComponent(e.data.jumplink + e.stat)
                ),
              });
            }, 300);
        },
        open: function () {
          o.value = !0;
        },
      };
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, a, o, u, i) {
        return t.e(
          { a: o.show },
          o.show
            ? t.e(
                { b: a.data.img },
                a.data.img
                  ? {
                      c: t.t(a.data.title),
                      d: a.data.img,
                      e: t.o(function () {
                        return o.jump && o.jump.apply(o, arguments);
                      }, 2493),
                    }
                  : {},
                { f: t.o(function () {}, 2494) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f88c85cf"],
  ]);
wx.createComponent(n);
